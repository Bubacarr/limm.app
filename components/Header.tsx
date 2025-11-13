
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
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
        
                    <button className="border border-white p-2 rounded-lg text-white">EN</button>
                </nav>
            </div>
        </div>
    )
}

export default Header