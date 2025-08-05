import Head from "next/head";
import Image from "next/image";
import Media from "./Media";

export default function Home() {
  return (
    <div>
      <div className="relative w-screen h-64 shadow-md">
        <div className="-z-10 brightness-75 absolute inset-0">
          <Image
            priority
            src="/home-bg.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="hero image example"
          />
        </div>
        <div className="relative flex flex-col items-center h-full justify-center">
          <h1 className="font-sketch text-6xl text-white">Services</h1>
        </div>
      </div>

      <div className="md:px-52 px-4 pt-10">
        <p className="text-2xl font-sketch salmon-color">Violin Lessons</p>
        <p className="italic font-serif">Starting at $20-30/half hour</p>
        <p className="font-serif pt-5">
          I provide one-on-one violin lessons to students with an emphasis on
          the Suzuki Method, which encourages memorization, learning by ear,
          repetition, and more. My home studio is based in Columbus, but I also
          drive to Heath and Zanesville to teach during the week as well.
        </p>
      </div>
      <div className="md:px-52 px-4 py-8">
        <p className="text-2xl font-sketch salmon-color">Weddings and Events</p>
        <p className="italic font-serif">Starting at $275</p>
        <p className="font-serif pt-5">
          Live wedding music with the ability to choose custom music for your
          special day. Solo violinist starting at $275 or violin & cello duo
          starting at $500 in Columbus area with ability to travel further
          distances for additional fee.
        </p>
      </div>
      <div className="md:px-52 px-4 py-2">
        <p className="text-2xl font-sketch salmon-color">Recording Services</p>
        <p className="italic font-serif">Price varies</p>
        <p className="font-serif pt-5">
          Need a violin track or cello track in the background of your music
          production or creative project? I can provide a professional track of
          background strings tailored to your individual needs for a richer,
          fuller musical experience in your recording.
        </p>
      </div>
    </div>
  );
}
