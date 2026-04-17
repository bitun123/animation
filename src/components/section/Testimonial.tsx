import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { div } from "framer-motion/client";

function Testimonial() {
  const cards = [
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/image/hero3.png",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/image/hero2.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/image/hero5.png",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/image/hero1.png",
    },
  ];

  return (
    <div className="w-full bg-[#F3F3F3] p-2 flex  flex-col  gap-2">
      <div className="flex flex-col text-black   lg:items-center ">
        <p className="uppercase text-[1.2rem] font-semibold text-gray-600">
          testimonials
        </p>
        <h1 className="text-[2.5rem] font-bold ">Invest is our priority</h1>
      </div>
      <AnimatedTestimonials testimonials={cards} />
    </div>
  );
}

export default Testimonial;
