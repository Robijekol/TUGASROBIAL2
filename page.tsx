import Image from "next/image";

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col items-center justify-between bg-gray-200">
      <header className="flex w-full items-center justify-between bg-white px-8 py-4 pl-20">
        <Image
          src="/logo1.svg"
          alt="Next.js Logo" className="h-10 w-auto cursor-pointer"
          width={180}
          height={37}
          priority
        />

        <nav className="flex gap-6 text-gray-400 pr-50 text[15px]">
          <a href="/" className="hover:text-black">Sewa Lapangan</a>
          <a href="/about" className="hover:text-black">Main Bareng</a>
          <a href="/contact" className="hover:text-black">Partner With Us</a>
          <a href="/contact" className="hover:text-black">Blog</a>
        </nav>

        <div className="flex gap-10 items-center pr-20">
          <Image 
          src="/keranjang.jpeg" 
          alt="Keranjang" className="h-6 w-6 cursor-pointer" 
          width={250} 
          height={300} />

        <nav className="flex items-center gap-6 text-gray-400">
          <a href="/login" className="hover:text-black">Masuk</a>
          <a href="/register" className="hover:text-black bg-red-800 px-4 py-2 rounded-md">Daftar</a>
        </nav>

        <Image 
          src="/globe.svg" 
          alt="World" className="h-6 w-6 cursor-pointer" 
          width={250} 
          height={300} />

          
        </div>
       

      </header>
       
       <div className="flex flex-col items-center justify-center w-full h-full">
        <Image
          src="/logoayoindonesia.jpg"
          alt="background"
          className="w-full h-auto block"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  )
}