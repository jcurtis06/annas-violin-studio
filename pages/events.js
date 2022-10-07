import Head from "next/head";
import Image from "next/image";
import Media from "./Media";

export default function Events() {
  return (
    <div>
      <div className="relative w-screen h-64 shadow-md">
        <div className="-z-10 brightness-75">
          <Image
            priority
            src={"/events-bg.jpg"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="hero image example"
          />
        </div>
        <div className="relative flex flex-col items-center h-full justify-center">
          <h1 className="font-sketch text-6xl text-white">Events</h1>
        </div>
      </div>
      <div className="md:px-52 px-4 py-10 grid md:grid-cols-2">
        <div>
          <p className="text-2xl font-serif salmon-color">
            Is Your Big Day Approaching?
          </p>
          <p className="font-serif pt-5">
            Hello, I’m John Doe and I teach violin lessons in 123 and 123, 123.
            I have played violin for 11 years, participating in youth orchestras
            and quartets, and teaching violin at Seattle Music Partners, a
            program that provides free music lessons for low-income families. I
            also play for my church, weddings, and other events. I have
            completed Suzuki Teaching Certification and I primarily teach using
            the Suzuki Method.
          </p>
        </div>
        <div className="border-black grid md:grid-cols-2 font-serif">
          <div className="px-8 bg-gray-200">
            <p className="text-2xl text-center font-serif uppercase">Solo</p>
            <ul className="list-disc">
              <li>One violinist</li>
              <li>Best for small events (20 guests or fewer)</li>
            </ul>
            <p className="text-center text-xl pt-3">Starts at $275</p>
          </div>
          <div className="px-8 bg-gray-300">
            <p className="text-2xl text-center font-serif">DUO</p>
            <ul className="list-disc">
              <li>Violin and cello/piano</li>
              <li>Small or large events (up to 125 guests)</li>
            </ul>
            <p className="text-center text-xl pt-3">Starts at $500</p>
          </div>
        </div>
      </div>
    </div>
  );
}
