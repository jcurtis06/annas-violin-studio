import Head from "next/head";
import Image from "next/image";
import Media from "./Media";

export default function Home() {
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
          <h1 className="font-sketch text-6xl text-white">About Me</h1>
        </div>
      </div>
      <div className="md:px-52 px-4 py-10">
        <p className="text-2xl font-sketch salmon-color">Who I Am</p>
        <p className="font-serif pt-5">
          Hello, I&apos;m Anna Curtis and I teach violin lessons in Thornville
          and Zanesville, Ohio. I have played violin for 11 years, participating
          in youth orchestras and quartets, and teaching violin at Seattle Music
          Partners, a program that provides free music lessons for low-income
          families. Now I help coach the Newark Granville Youth Symphony. I also
          play for my church, weddings, and other events. I have completed
          Suzuki Teaching Certification and I primarily teach using the Suzuki
          Method. Both traditional and fiddle lessons are available.
        </p>
        <p className="text-2xl font-sketch pt-5 salmon-color">Lessons</p>
        <p className="font-serif pt-5">
          I teach lessons at an affordable rate, with many different time slots
          available. Lessons can range from 30 minutes to 1 hour, and are
          available on weekdays and weekends.
        </p>
        <p className="text-2xl font-sketch pt-5 salmon-color">Events</p>
        <p className="font-serif pt-5">
          Is your event in need of a violinist? I play for weddings, funerals,
          and more. Pricing is based on the event and the amount of time needed.
          Please contact me for pricing information and availability.
        </p>
      </div>
    </div>
  );
}
