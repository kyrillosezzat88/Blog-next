import Image from "next/image";
import { notFound } from "next/navigation";
type postTypes = {
  params: {
    id: string;
  };
};

const getData = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};
// or Dynamic metadata
export async function generateMetadata({ params: { id } }: postTypes) {
  const data = await getData(id);
  return {
    title: data.title,
    description: data.desc,
  };
}
const BlogPost = async ({ params: { id } }: postTypes) => {
  const data = await getData(id);
  return (
    <div className="py-12">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold">{data.title}</h1>
          <p className="my-6">{data.desc}</p>
          <div className="flex gap-2 items-center">
            <Image
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={100}
              height={100}
              className="rounded-full w-[40px] h-[40px] object-cover"
              alt="user profile"
            />
            <span className="font-bold text-xs">{data.username}</span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className=" flex-1 h-[300px] relative">
            <Image
              src={data.img}
              fill={true}
              alt="Blog post"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="my-12">{data.content}</div>
    </div>
  );
};

export default BlogPost;
