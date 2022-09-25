import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <nav className="w-full shadow-md">
        <div className="text-center">
          <h1 className="text-6xl pt-10 text-shadow salmon-color font-sketch">
            Annas Violin Studio
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="p-5">
            <Link href="/">
              <a>
                <p className="font-bodoni uppercase link hover:text-black text-gray-500">
                  About
                </p>
              </a>
            </Link>
          </div>
          <div className="p-5">
            <Link href="/">
              <a>
                <p className="font-bodoni uppercase link hover:text-black text-gray-500">
                  Events
                </p>
              </a>
            </Link>
          </div>
          <div className="p-5">
            <Link href="/Media">
              <a>
                <p className="font-bodoni uppercase link hover:text-black text-gray-500">
                  Media
                </p>
              </a>
            </Link>
          </div>
          <div className="p-5">
            <Link href="/booking">
              <a>
                <p className="font-bodoni uppercase link hover:text-black text-gray-500">
                  Lessons
                </p>
              </a>
            </Link>
          </div>
          <div className="py-5 pl-5">
            <Link href="https://www.instagram.com">
              <a>
                <Image src={"/instagram.png"} width={"32"} height={"32"} />
              </a>
            </Link>
          </div>
          <div className="py-5 px-2">
            <Link href="https://www.instagram.com">
              <a>
                <Image src={"/youtube.png"} width={"32"} height={"32"} />
              </a>
            </Link>
          </div>
          <div className="py-5 px-2">
            <Link href="https://www.instagram.com">
              <a>
                <Image src={"/tik-tok.png"} width={"32"} height={"32"} />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
