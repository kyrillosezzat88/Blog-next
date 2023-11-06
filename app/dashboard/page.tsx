"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import useSWR from "swr";

type formDataTytpes = {
  _id?: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string | null | undefined;
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const Dashboard = () => {
  const session = useSession<any>();
  const router = useRouter();
  const [formData, setFormData] = useState<formDataTytpes>({
    username: "",
    title: "",
    desc: "",
    img: "",
    content: "",
  });
  const [edit, setEdit] = useState<Boolean>(false);
  //fetch user data
  const fetcher = async (...args: [RequestInfo, RequestInit?]) => {
    const res = await fetch(...args);
    return res.json();
  };

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p className="text-2xl uppercase text-center">Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    return router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    // handle change
    const handlePostData = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // add new post
    const handlePost = async (e: FormEvent) => {
      e.preventDefault();
      const url = edit ? `/api/posts/${formData?._id}` : "/api/posts";
      const method = edit ? "PUT" : "POST";
      try {
        const res = await fetch(url, {
          method,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            username: session?.data?.user?.name,
          }),
        });
        console.log(res.ok);
        if (res.ok) {
          mutate();
          setFormData({
            username: "",
            title: "",
            desc: "",
            img: "",
            content: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    //delete post
    const deletePost = async (id: string) => {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          mutate();
        }
      } catch (error) {
        console.log(error);
      }
    };

    //edit Post
    const editPost = async (id: string) => {
      const selectPost = data.find((post: any) => post._id === id);
      console.log({ selectPost });
      setEdit(true);
      setFormData(selectPost);
    };
    return (
      <section>
        <div className="flex flex-wrap md:flex-nowrap gap-12">
          <div className="w-full md:w-2/3">
            {isLoading ? (
              <p className="font-bold">Loading...</p>
            ) : data.length ? (
              data.map((post: any) => (
                <div
                  key={post._id}
                  className="flex justify-between items-start mb-6"
                >
                  <div className="flex gap-6">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={200}
                      height={200}
                      className="w-[200px] h-[200px] object-cover rounded-xl"
                    />
                    <div>
                      <h1 className="text-2xl font-bold">{post.title}</h1>
                      <p>{post.content}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <button
                      onClick={() => deletePost(post._id)}
                      className="px-3 rounded-full bg-red-500 text-white"
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => editPost(post._id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-2xl font-bold capitalize">
                There is no posts yet
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
              Add New Post
            </h1>
            <form className="flex flex-col gap-6 " onSubmit={handlePost}>
              <input
                type="text"
                name="title"
                id="Title"
                placeholder="Title"
                defaultValue={formData.title}
                required
                className="p-3 rounded-sm outline-none bg-transparent border border-gray-50"
                onChange={handlePostData}
              />
              <input
                type="text"
                name="desc"
                id="Desc"
                defaultValue={formData.desc}
                placeholder="Description"
                required
                onChange={handlePostData}
                className="p-3 rounded-sm outline-none bg-transparent border border-gray-50"
              />
              <input
                type="text"
                name="img"
                id="image"
                placeholder="Image"
                defaultValue={formData.img}
                required
                onChange={handlePostData}
                className="p-3 rounded-sm outline-none bg-transparent border border-gray-50"
              />
              <textarea
                placeholder="Content"
                name="content"
                className="p-3 rounded-sm outline-none bg-transparent border border-gray-50"
                cols={30}
                rows={10}
                defaultValue={formData.content}
                onChange={handlePostData}
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
};

export default Dashboard;
