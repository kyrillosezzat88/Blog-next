import Link from "next/link";
import "./page.css";
const Portfolio = () => {
  return (
    <section>
      <h1 className=" text-4xl md:text-8xl font-bold mb-3">Our Works</h1>
      <p className="font-bold text-2xl">Choose a gallary</p>
      <div className="flex flex-wrap gap-10 mt-8">
        <Link href="/portfolio/illustrations" className="item">
          <span className="text-white absolute bottom-3 left-3 font-bold">
            Illustrations
          </span>
        </Link>
        <Link href="/portfolio/websites" className="item">
          <span className="text-white absolute bottom-3 left-3 font-bold">
            Websites
          </span>
        </Link>
        <Link href="/portfolio/applications" className="item">
          <span className="text-white absolute bottom-3 left-3 font-bold">
            Application
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
