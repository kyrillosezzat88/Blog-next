import Button from "@/components/buttons/Button";
import "./page.css";
import Image from "next/image";
const About = () => {
  return (
    <section className="about">
      <div className="imgContainer">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
        />
        <div className="imgText">
          <h1 className="text-2xl font-bold">Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="about-content my-10 flex flex-wrap md:flex-nowrap gap-14">
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-3xl mb-6">Who Are We?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae.{" "}
            <br /> <br /> A suscipit eos. Animi quibusdam cum omnis officiis
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-3xl mb-6">What We Do?</h1>
          <p className=" text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button
            url="/contact"
            title="Contact"
            className="btn btn-primary max-w-[200px] mt-6 rounded-full py-2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
