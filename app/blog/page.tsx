import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-12">
      {data.map((post: any) => (
        <Link
          href={`/blog/${post._id}`}
          className="flex items-center gap-12"
          key={post._id}
        >
          <Image
            src={post.img}
            alt={post.title}
            width={400}
            height={250}
            className="w-[400px] h-[250px] rounded-xl object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold capitalize">{post.title}</h1>
            <p>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
