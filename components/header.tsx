import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full h-full pt-6 flex justify-center items-end bg-[#FF6B6B] pointer-events-none select-none">
                <Image src='/logo-white.svg' alt='Gritifi logo' className="object-cover pointer-events-none w-[20em]" width={300} height={100} />
        </div>
    )
}