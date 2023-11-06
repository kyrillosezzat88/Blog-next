import Image from "next/image";
import "./page.css";
import Button from "@/components/buttons/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kiko Blog Contact us",
  description: "if you have any problem please contact us",
};

const Contact = () => {
  return (
    <section>
      <h1 className="font-bold text-4xl md:text-5xl text-center capitalize">
        Lets Keep in Touch
      </h1>
      <div className="mt-20 flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <Image
            className="image"
            src="/contact.png"
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div className="w-full md:w-1/2">
          <form className="flex flex-col ">
            <input
              type="text"
              name="name"
              placeholder="name"
              className=" border p-3 outline-none border-gray-400 mb-4 bg-transparent"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className=" border p-3 outline-none border-gray-400 mb-4 bg-transparent"
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="your message"
              className=" border p-3 outline-none border-gray-400 mb-4 bg-transparent"
            ></textarea>
            <Button
              title="Send"
              url="/"
              className="btn-primary max-w-[150px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
