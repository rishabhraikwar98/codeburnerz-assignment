import Image from "next/image";
import icon1 from "../public/assets/icon1.png";
import icon2 from "../public/assets/icon2.png";
import icon3 from "../public/assets/icon3.png";
import icon4 from "../public/assets/icon4.png";
import icon5 from "../public/assets/icon5.png";
import icon6 from "../public/assets/icon6.png";
import icon7 from "../public/assets/icon7.png";
import groupimage from "../public/assets/groupimage.png";


const SectionOne = () => {
  return (
    <section>
      {" "}
      <div className="md:mt-2 -mt-32 md:pl-20">
        <h1 className="md:text-5xl text-3xl text-center md:text-left font-bold text-[#252432]">
          What We Do
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:mt-20 mt-10 md:px-20 px-5">
        <div className="col flex flex-col justify-between items-center">
          <div className="flex md:flex-row flex-col items-center space-x-10">
            <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col space-y-4">
              <Image
                src={icon1}
                alt="Icon 1"
                className="w-12 p-2 bg-[#F5F8FF] rounded-xl"
              />
              <h3 className="text-2xl font-inter font-semibold text-[#252432]">
                Web Design
              </h3>
              <p className="text-[#8987A1] font-inter">
                From concept to launch, we create stunning, user-centric
                websites that elevate your brand and engage your audience.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col space-y-4">
              <Image
                src={icon2}
                alt="Icon 2"
                className="w-12 p-2 bg-[#F5F8FF] rounded-xl"
              />
              <h3 className="text-2xl font-inter font-semibold text-[#252432]">
                UI/UX Design
              </h3>
              <p className="text-[#8987A1] font-inter">
                From concept to launch, we create stunning, user-centric
                websites that elevate your brand and engage your audience.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-10 flex md:flex-row flex-col justify-between items-center">
            <div className="flex flex-col space-y-4">
              <Image
                src={icon5}
                alt="Icon 5"
                className="w-12 p-3.5 bg-[#F5F8FF] rounded-xl"
              />
              <h3 className="text-2xl font-inter font-semibold text-[#252432]">
                Webflow
              </h3>
              <p className="text-[#8987A1] font-inter">
                From concept to launch, we create stunning, user-centric
                websites that elevate your brand and engage your audience.
              </p>
            </div>
            <div className="flex mt-5 md:mt-0 justify-center items-center bg-[#5B54FF] rounded-sm p-16">
              <Image src={icon7} alt="Icon 7" className="w-28" />
            </div>
          </div>
        </div>
        <div className="col flex md:flex-row flex-col space-x-10 justify-between">
          <div className="flex flex-col space-y-4">
            <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col space-y-4">
              <Image
                src={icon3}
                alt="Icon 3"
                className="w-12 p-2 bg-[#F5F8FF] rounded-xl"
              />
              <h3 className="text-2xl font-inter font-semibold text-[#252432]">
                Responsive Design
              </h3>
              <p className="text-[#8987A1] font-inter">
                From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col space-y-4">
              <Image
                src={icon6}
                alt="Icon 6"
                className="w-12 p-2 bg-[#F5F8FF] rounded-xl"
              />
              <h3 className="text-2xl font-inter font-semibold text-[#252432]">
                Custom Development
              </h3>
              <p className="text-[#8987A1] font-inter">
                From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 justify-between flex flex-col items-center">
             <div className="flex flex-col space-y-4">
              <Image
                src={icon4}
                alt="Icon 4"
                className="w-12 p-2 bg-[#F5F8FF] rounded-xl"
              />
              <h3 className="text-2xl font-inter font-semibold text-[#252432]">
                E-commerce Solutions
              </h3>
              <p className="text-[#8987A1] font-inter">
                From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </p>
            </div>
            <div>
              <Image
                src={groupimage}
                alt="Group Image"
                className="w-72 h-72 object-cover rounded-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
