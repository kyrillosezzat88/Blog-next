import Button from "@/components/buttons/Button";
import "./page.css";
import Image from "next/image";
import Hero from "public/hero.png";
export default function Home() {
  return (
    <main className="home flex flex-wrap md:flex-nowrap justify-between items-center">
      <div className="w-full md:w-1/2">
        <h1 className="home-title">Better design for your digital products.</h1>
        <p className="home-desc">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>

        <Button
          url="/"
          className="btn btn-primary mt-8 capitalize max-w-[200px] py-3 rounded-full"
          title="See Our Works"
        />
      </div>
      <div className="w-full md:w-1/2">
        <Image src={Hero} alt="" className="home-img" />
      </div>
    </main>
  );
}
