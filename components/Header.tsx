
import Image from "next/image";


const Header = () => {

    return (
        <div className="bg-[#001738] flex w-full justify-between h-[60px] rounded-2xl p-3 max-w-5xl m-auto mt-6 relative z-50">
            {/* //Logo */}
            <Image
                className=""
                src="/logo.svg"
                alt="Next.js logo"
                width={75}
                height={15}
                priority
                />
        
            {/* //Menu */}
            <div className="flex gap-5">
                <nav className="flex gap-5 items-center">
                    <ul className="flex gap-5 text-white text-md">
                        <li>
                            <a href="/#pricing" className="hover:text-blue-300 transition-colors">Pricing</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-blue-300 transition-colors">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-blue-300 transition-colors">Contact</a>
                        </li>
                    </ul>
        
                    <button className="border border-white p-2 rounded-lg text-white hover:bg-white hover:text-[#001738] transition-all">EN</button>
                </nav>
            </div>
        </div>
    )
}

export default Header