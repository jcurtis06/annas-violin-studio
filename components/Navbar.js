import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import useWindowDimensions from "./getWindowDimensions";

export default function Navbar() {
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (width > 768) {
      setOpen(true);
    }
  }, []);

  function handleClick() {
    if (width < 768) {
      setOpen(!open);
    }
    //setOpen(!open);
  }

  return (
    <>
      <nav className="w-full shadow-md flex flex-col">
        <div className="md:text-center md:ml-0 md:block ml-5 flex">
          <h1 className="md:text-6xl text-2xl md:pt-10 pt-7 text-shadow salmon-color font-serif">
            Anna&apos;s Violin Studio
          </h1>
          <div className="md:hidden ml-auto p-5">
            <button onClick={handleClick}>
              <svg viewBox="0 0 100 80" width="30" height="40">
                <rect width="100" height="10" rx="8"></rect>
                <rect y="30" width="100" height="10" rx="8"></rect>
                <rect y="60" width="100" height="10" rx="8"></rect>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            open
              ? "flex md:flex-row flex-col justify-center"
              : "hidden md:flex-row flex-col justify-center"
          }
        >
          <div className="p-5">
            <Link href="/">
              <a onClick={handleClick}>
                <p className="font-serif uppercase link hover:text-black text-gray-500">
                  About
                </p>
              </a>
            </Link>
          </div>
          <div className="p-5">
            <Link href="/events">
              <a onClick={handleClick}>
                <p className="font-serif uppercase link hover:text-black text-gray-500">
                  Weddings
                </p>
              </a>
            </Link>
          </div>
          <div className="p-5">
            <Link href="/Media">
              <a onClick={handleClick}>
                <p className="font-serif uppercase link hover:text-black text-gray-500">
                  Listen
                </p>
              </a>
            </Link>
          </div>
          <div className="p-5">
            <Link href="/booking">
              <a onClick={handleClick}>
                <p className="font-serif uppercase link hover:text-black text-gray-500">
                  Lessons
                </p>
              </a>
            </Link>
          </div>
          <div className="p-5">
            <Link href="/contact">
              <a onClick={handleClick}>
                <p className="font-serif uppercase link hover:text-black text-gray-500">
                  Contact
                </p>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
