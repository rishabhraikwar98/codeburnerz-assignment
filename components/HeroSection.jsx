import Navbar from "./Navbar";
import Hero from "./Hero";

const HeroSection = () => {
  return (
    <div
      className="bg-[url('../public/assets/bg_hero.png')] bg-no-repeat h-screen md:bg-size-[65%] bg-size-[550px_1000px]"
      style={{
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};
export default HeroSection;
