import Image from "next/image";
import { InlineWidget } from "react-calendly";

export default function Booking() {
  return (
    <>
      <div className="relative w-screen h-64 shadow-md mb-20">
        <div className="-z-10 brightness-75 absolute inset-0">
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
          <h1 className="font-sketch text-6xl text-white">Lessons</h1>
        </div>
      </div>
      <InlineWidget
        url="https://calendly.com/contactacurtis/30min"
        pageSettings={{ hideGdprBanner: true }}
      ></InlineWidget>
    </>
  );
}
