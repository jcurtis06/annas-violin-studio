import Head from "next/head";
import Image from "next/image";
import Media from "./Media";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eoxnddz90obgs3z.m.pipedream.net", data)
      .then((res) => {
        setSuccessMessage("Success!");
      })
      .catch(() => {
        setSuccessMessage("Something went wrong.");
      });
  }

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
      <div className="md:px-52 px-4 py-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="font-serif" for="first">
            First Name
          </label>
          <input
            {...register("first")}
            className="bg-slate-200 rounded"
            type="text"
            id="first"
            name="first"
            placeholder="First name (required)"
            required
          />
          <label className="font-serif" for="last">
            Last name:
          </label>
          <input
            {...register("last")}
            className="bg-slate-200 rounded"
            type="text"
            id="last"
            name="last"
            placeholder="Last name"
          />
          <label className="font-serif" for="email">
            Email:
          </label>
          <input
            {...register("email")}
            className="bg-slate-200 rounded"
            type="email"
            id="email"
            name="email"
            placeholder="Email (required)"
          />
          <label className="font-serif" for="message">
            Message:
          </label>
          <textarea
            {...register("message")}
            className="bg-slate-200 rounded"
            type="text"
            id="message"
            name="message"
            placeholder="Message (required)"
            required
          ></textarea>
          <button
            className="bg-gray-200 mt-5 rounded hover:bg-gray-300 transition-colors"
            type="submit"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-green-500">{successMessage}</p>
      </div>
    </div>
  );
}
