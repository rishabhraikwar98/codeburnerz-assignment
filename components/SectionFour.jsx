"use client";
import Image from "next/image";
import logo from "../public/assets/Logo.png";
import social1 from "../public/assets/social1.png";
import social2 from "../public/assets/social2.png";
import social3 from "../public/assets/social3.png";
import social4 from "../public/assets/social4.png";
import heart from "../public/assets/heart.png";
import Link from "next/link";
import { saveCustomer } from "@/actions/customer";
import { useActionState } from "react";

const Links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "How it Works", link: "/how-it-works" },
  { name: "Services", link: "/services" },
];

const SectionFour = () => {
  const [state, formAction, isPending] = useActionState(saveCustomer, {
    success: false,
    message: null,
  });
  return (
    <section
      id="section4"
      className="flex flex-col items-center md:mt-5 mt-16 bg-[url('../public/assets/bg1.png'),_url('../public/assets/bg2.png'),_url('../public/assets/bg3.png')]
    md:bg-[position:left_30%,_right_-5%,_center]
    bg-[position:left_50%,_right_50%,_center]
    md:bg-[length:500px,_250px,_cover]
    bg-[length:200px,_80px,_cover]
    bg-no-repeat"
    >
      <form action={formAction} className="md:w-xl w-sm">
        <h2 className="md:text-5xl text-3xl font-bold text-center text-[#252432] md:mb-16 mb-5">
          Let’s Get in Touch
        </h2>
        <div className="flex flex-col md:space-y-4 space-y-2">
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-1 font-inter font-bold"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@email.com"
              className="w-full border-[#D6DDED] border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm mb-1 font-inter font-bold"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="full name"
              className="w-full border-[#D6DDED] border  rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm mb-1 font-inter font-bold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="write your message...."
              className="w-full border border-[#D6DDED]  rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            className="w-full bg-[#4E47FF] cursor-pointer text-white font-bold text-xl p-2 rounded-md hover:bg-[#4E47FF]/90"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Get in Touch"}
          </button>
          {state.message && (
            <div
              className={`p-4 rounded-md ${
                state.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <p>{state.message}</p>
            </div>
          )}
        </div>
      </form>
      <div className="bg-white rounded-2xl mt-20 shadow-2xl p-10 mx-5 md:mx-0 md:my-20 my-10">
        <div className="flex md:flex-row flex-col space-y-8 md:space-y-0 justify-between items-center">
          <div className="md:w-1/3 space-y-12">
            <Image alt="logo" src={logo} className="h-10" />
            <p className="text-[#8987A1]">
              Ready to elevate your online presence? Contact us today to discuss
              your project and discover how we can bring your vision to life.
            </p>
          </div>
          <div className="md:space-x-8 space-x-3">
            {Links.map((item, index) => {
              return (
                <Link
                  className="text-[#8987A1] cursor-pointer"
                  key={index}
                  href={item.link}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between align-center md:my-10 my-4">
          <div className="flex justify-center items-center md:space-x-3 space-x-1">
            <Image src={heart} alt="heart" className="md:h-5 h-4 md:w-5 w-4" />
            <p className="font-inter text-[#8987A1] md:text-base text-sm text-center">
              Made with love powered by inkyy.com
            </p>
          </div>
          <div className="flex space-x-10">
            <Image alt="social1" src={social1} className="w-12" />
            <Image alt="social2" src={social2} className="w-12" />
            <Image alt="social3" src={social3} className="w-12" />
            <Image alt="social4" src={social4} className="w-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
