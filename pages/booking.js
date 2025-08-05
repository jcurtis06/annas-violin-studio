import Image from "next/image";
import { InlineWidget } from "react-calendly";

export default function Booking() {
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
          <h1 className="font-sketch text-6xl text-white">Lessons</h1>
        </div>
      </div>

      <div className="md:px-52 px-4 pt-10 mb-10">
        <p className="text-2xl font-sketch salmon-color">Violin Lessons</p>
        <p className="italic font-serif">Starting at $20-30/half hour</p>
        <p className="font-serif pt-5">
          I&amp;m a violinist based in Columbus, Ohio, with experience teaching
          students of all ages and levels of playing. I have a home studio in
          Columbus, and I also teach at Guitar Guys in Heath and CA House Music
          in Zanesville one evening each week.
          <br />
          <br />
          As a Certified Suzuki Teacher, I often implement the core elements of
          the Suzuki method into my lessons, such as repetition, listening to
          recordings, memorization, and ear training.
          <br />
          <br />
          In addition, my training as a Certified Occupational Therapy Assistant
          (COTA) allows me to tailor violin lessons to the needs of
          neurodivergent or disabled individuals. As a COTA, I have a special
          skill set of adapting tasks to meet a “just right challenge,”
          providing clear goals that will push students to progress while not
          discouraging them. At the same time, I understand the crucial stage
          that the environment sets for students to excel, whether that means
          providing sensory breaks, teaching in a wheelchair accessible space,
          or using visual aids to make the learning process easier.
          <br />
          <br />
          Ever since I started playing the violin at age 7, I grew up taking a
          strong pride in knowing how to play the violin. Learning the
          instrument built my self-esteem and also gave me a social outlet to
          play music with others in orchestra and quartets. I hope to share my
          knowledge of the violin as a way to develop creativity and confidence
          in young musicians in a supportive musical community.
        </p>
      </div>
    </div>
  );
}
