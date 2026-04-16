import Image from "next/image";
import Navbar from "../ui/Navbar";

function Hero() {
  return (
    <section className=" w-full h-screen overflow-hidden flex  items-center justify-center">
      {/* No import needed for public assets. 
         Next.js automatically looks into the 'public' folder.
      */}
      <Image
        src="/image/hero.jpg"
        alt="Luxury Real Estate Hero"
        fill
        priority
        className="object-cover z-0 "
      />

      {/* Your content here */}
      <div className="relative z-10 flex flex-col w-[88%] h-[88%] border-4 border-white rounded-4xl">
        <Navbar />

        <div>
          <h1>
            find Your <br />
            Perfect <span>Space</span>
          </h1>
          <p>
            Discover Handpicked Luxury cabins in breathtaking locations unplug,{" "}
            <br /> Unwind ,And Reconnected With What Matters Most .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
