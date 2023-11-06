import Image from "next/image";
const Footer = () => {
  return (
    <div className="py-6 flex justify-between items-center">
      <div>©2023 Kyrillos Ezzat. All rights reserved.</div>
      <div className="flex justify-center items-center gap-5">
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="social Facebook Account"
        />
        <Image src="/2.png" width={15} height={15} alt="social" />
        <Image src="/3.png" width={15} height={15} alt="social" />
        <Image src="/4.png" width={15} height={15} alt="social" />
      </div>
    </div>
  );
};

export default Footer;
