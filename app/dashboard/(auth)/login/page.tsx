"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Login = () => {
  const [data, setData] = useState<{ email: string; passowrd: string } | {}>(
    {}
  );
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") {
    return <p className="text-2xl uppercase text-center">Loading...</p>;
  }
  if (session.status === "authenticated") {
    return router.push("/dashboard");
  }

  const handleLogin = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    signIn("credentials", data).then(() => router.push("/dashboard"));
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl text-green-200 uppercase text-center mb-6">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/3 gap-6">
        <input
          type="email"
          name="email"
          required
          id="email"
          placeholder="Email"
          className="p-3 rounded-sm outline-none bg-transparent border border-gray-50"
          onChange={handleLogin}
        />
        <input
          type="password"
          name="password"
          required
          id="password"
          placeholder="password"
          className="p-3 rounded-sm outline-none bg-transparent border border-gray-50"
          onChange={handleLogin}
        />
        <button type="submit" className="btn btn-primary w-auto">
          Login
        </button>
        <button
          className=" flex justify-center items-center gap-4 border border-gray-300 py-3 rounded-full"
          onClick={() => signIn("google")}
        >
          <Image
            src="/google.svg"
            width={100}
            height={100}
            alt="sign in with google"
            className="w-8 h-8"
          />
          Login with Google
        </button>
        <Link href="/dashboard/register">Don`t Have an account</Link>
      </form>
      {err && <span className="text-red-500 font-bold ">{err}</span>}
    </section>
  );
};

export default Login;
