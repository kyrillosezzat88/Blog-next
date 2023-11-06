"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
type userType = {
  username: string;
  password: string;
  email: string;
};
const Register = () => {
  const [data, setData] = useState<userType | {}>({});
  const [err, setError] = useState<string | null>(null);
  const router = useRouter();
  // handle  register
  const handleRegister = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=account has been created");
    } catch (error: any) {
      console.log(error);
      setError(error);
    }
  };
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center mb-10 uppercase text-green-200">
        Register
      </h1>
      <form className="flex flex-col w-1/3 gap-6" onSubmit={handelSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="user Name"
          required
          className="p-3 rounded-sm outline-none bg-transparent border border-gray-50"
          onChange={handleRegister}
        />
        <input
          type="email"
          name="email"
          required
          id="email"
          placeholder="Email"
          className="p-3 rounded-sm outline-none bg-transparent border border-gray-50"
          onChange={handleRegister}
        />
        <input
          type="password"
          name="password"
          required
          id="password"
          placeholder="password"
          className="p-3 rounded-sm outline-none bg-transparent border border-gray-50"
          onChange={handleRegister}
        />
        <button type="submit" className="btn btn-primary mt-6 w-auto">
          Register
        </button>
        {err && err}
        <Link href={"/dashboard/login"}>Login with an existing account </Link>
      </form>
    </section>
  );
};

export default Register;
