import Head from "next/head";
import Image from "next/image";
import Media from "./Media";

export default function Events() {
  return (
    <div>
      <div className="relative w-screen h-64 shadow-md">
        <div className="-z-10 brightness-75 absolute inset-0">
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
          <h1 className="font-sketch text-6xl text-white">Weddings</h1>
        </div>
      </div>
      <div className="md:px-52 px-4 py-10 grid md:grid-cols-2">
        <div>
          <p className="text-2xl font-serif salmon-color">
            Is Your Big Day Approaching?
          </p>
          <p className="font-serif pt-5">
            My sister Julia and I (Anna) love to play music together and have
            performed for many events, so we decided to start a business playing
            music for weddings and other events! In order to secure your date,
            we ask for a 30% deposit upon booking. After we send you a quote and
            contract, we will arrange payment online or by check that is due the
            week before the event. Typically we play for 1 hour, while guests
            are arriving, during the ceremony, and a prelude after the guests
            leave. We will travel up to 1 hour free of charge.
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
