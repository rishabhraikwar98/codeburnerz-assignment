import Image from "next/image"
import logo from '../public/assets/logo.png';
import Link from "next/link";
const Links = [
  { name: "Home", link: "/" },  
  { name: "About", link: "/about" },
  { name: "How it Works", link: "/how-it-works" },
  { name: "Services", link: "/services" },    
]

const Navbar = () => {
  return (
    <nav className="bg-transparent my-4 flex md:flex-row flex-col md:space-y-0 space-y-8 items-center justify-between md:px-16 px-10 py-2">
        <Image src={logo} className="w-[120px] md:w-[170px]"  alt="Logo"/>
        <div className="flex justify-between space-x-12 bg-white md:px-12 px-8 md:py-5 py-1 rounded-2xl shadow-sm md:shadow-lg">
            {Links.map((link, index) => (
                <Link key={index} href={link.link} className="text-[#8987A1] hover:text-[#252432]">
                {link.name}
                </Link>
            ))}
        </div>
        <div className="flex items-center space-x-10 md:space-x-4">
            <button>
            <Link href="/login" className="text-[#8987A1] hover:text-[#252432] md:text-base text-sm">
                Sign In
            </Link>
            </button>
            <button>
            <Link href="/signup" className="text-white md:px-10 px-8 md:py-3.5 py-2 rounded-xl bg-[#4E47FF] md:text-base text-sm">
                Sign Up
            </Link>
            </button>
        </div>
    </nav>
  )
}

export default Navbar