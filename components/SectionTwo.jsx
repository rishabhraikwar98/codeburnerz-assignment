import Image from "next/image";
import arrowleft from "../public/assets/arrowleft.png";
import arrowright from "../public/assets/arrowright.png";
import img1 from "../public/assets/img1.png";
import img2 from "../public/assets/img2.png";
import img3 from "../public/assets/img3.png";
import ratings from "../public/assets/ratings.png";
import star from "../public/assets/star.png";
const SectionTwo = () => {
  return (
    <section className="bg-[url('../public/assets/section2.png')] bg-no-repeat md:px-20 px-5 mix-blend-color-burn
    md:bg-[position:top_20%]
    bg-[position:top]
    md:bg-[length:800px]
    bg-[length:500px]
    ">
      <div className="md:relative">
        <Image
          src={arrowleft}
          alt="arrow"
          className="w-16 rounded-full bg-white shadow-lg p-5 absolute top-25 left-40"
        />
        <div>
          <h1 className="text-3xl md:text-5xl text-center font-bold text-[#252432] md:pt-20 pt-10 md:mt-20 mt-10">
            Check our Work
          </h1>
          <p className="mt-10 text-center text-[#8987A1] font-inter">
            Take a look at some of our recent projects to see how we've helped
            businesses like yours succeed online.
          </p>
        </div>
        <Image
          src={arrowright}
          alt="arrow"
          className="w-16 rounded-full bg-white shadow-lg p-5 absolute top-25 right-40"
        />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-5 mt-10">
          <div className="p-5 rounded-lg shadow-lg bg-white">
            <Image
              src={img1}
              alt="project 1"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-3 p-5 rounded-lg shadow-lg bg-white">
            <Image
              src={img2}
              alt="project 2"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="p-5 rounded-lg shadow-lg bg-white">
            <Image
              src={img3}
              alt="project 3"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex items-center justify-center p-5 bg-white rounded-2xl shadow-md space-x-3 md:space-x-5">
          <Image alt="ratings" src={ratings} className="h-auto" />
          <div className="flex flex-col justify-center">
            <p className="text-[#8987A1] md:text-base text-sm font-inter text-center">
              <b className="text-[#252432]">5.0</b> Based on <b className="text-[#252432]">145</b> Reviews
            </p>
            <div className="flex space-x-1 md:mt-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src={star}
                  alt="star"
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
