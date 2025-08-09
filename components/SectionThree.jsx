import Image from "next/image";
import plus  from "../public/assets/plus.png"; 
const questions = [
  {
    content:"How can I contact Inkyy Team?"
  },
   {
    content:"What services do you offer?"
  },
   {
    content:"Do you provide website maintenance services?"
  },
  {
    content:"How long does it take to design and develop a website?"
  },
  {
    content:"Do you require a deposit for projects?"
  }
]

const SectionThree = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:h-[600px] mt-10">
      <div className="flex justify-center items-center bg-[url('../public/assets/section3.png')] bg-no-repeat 
    md:bg-[position:top_20%]
    bg-[position:left]
    md:bg-[length:450px]
    bg-[length:100px]">
        <div className="flex flex-col md:items-left items-center md:space-y-4 space-y-0 md:-ml-40">
          <h1 className="md:text-5xl text-4xl font-bold text-[#252432]">Frequently</h1>
          <h1 className="md:text-5xl text-4xl font-bold text-[#252432]">Asked</h1>
          <h1 className="md:text-5xl text-4xl font-bold text-[#252432]">Questions</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4 md:mr-20 mx-5">
        {questions.map((question, index) => (
          <div key={index} className="flex items-center justify-between px-6 py-5 bg-white shadow-md rounded-lg hover:bg-gray-100 transition duration-300">
            <p className="font-bold text-[#252432]">{question.content}</p> 
            <Image src={plus} alt="plus icon" className="w-5 h-5" />
          </div>  
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
