import { title } from "process";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export async function ScrollSection() {
  const item = [
    {
      src: "/image/hero1.png",
      alt: "Luxury Real Estate Hero",
      title: "Luxury Real Estate Hero"
    },
    {
      src: "/image/hero2.png",
      alt: "Luxury Real Estate Hero",
      title: "Luxury Real Estate Hero"
    },
    {
      src: "/image/hero3.png",
      alt: "Luxury Real Estate Hero",
      title: "Luxury Real Estate Hero"
    },
    {
      src: "/image/hero4.png",
      alt: "Luxury Real Estate Hero",
      title: "Luxury Real Estate Hero"
    },
    {
      src: "/image/hero5.png",
      alt: "Luxury Real Estate Hero",
      title: "Luxury Real Estate Hero"
    },
  ];
  return (
    <div className="w-full min-h-screen bg-gray-300 flex flex-col items-center gap-8 py-16">
     <div className="flex flex-col gap-1 text-center">
       <h1 className="text-3xl text-black font-bold uppercase">
        gallery 
      </h1>
      <p className="text-[1.5rem] text-black font-semibold text-center">
        Most Investment Properties
      </p>
     </div>
      <InfiniteMovingCards items={item} direction="left" speed="fast" />
    </div>
  );
}
