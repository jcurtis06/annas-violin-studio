import Head from "next/head";
import Image from "next/image";
import Media from "./Media";

export default function Contact() {
  return (
    <div>
      <div className="relative w-screen h-64 shadow-md">
        <div className="-z-10 brightness-75">
          <Image
            priority
            src={"/home-bg.jpg"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="hero image example"
          />
        </div>
        <div className="relative flex flex-col items-center h-full justify-center">
          <h1 className="font-sketch text-6xl text-white">Contact Me</h1>
        </div>
      </div>
      <div className="md:px-52 px-4 py-10"></div>
    </div>
  );
}
