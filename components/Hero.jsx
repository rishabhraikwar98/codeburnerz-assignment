import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center space-y-10 md:my-28 my-20">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="md:text-6xl text-4xl font-bold text-center font-raleway text-[#252432] md:leading-20">
          Sleek UI Dark Theme <br /> for Creative <br /> Webflow Studios
        </h1>
      </div>
      <Link href="#section4" className="text-white bg-[#252432] md:px-10 px-6 md:py-3 py-2 font-bold rounded-md cursor-pointer">
        Get in Touch
      </Link>
    </section>
  );
};

export default Hero;