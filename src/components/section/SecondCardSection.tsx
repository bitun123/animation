import Image from "next/image";

function SecondCardSection() {
  return (
    <div className="bg-[#F3F3F3] w-full flex flex-col gap-4 p-2 lg:flex-row lg:items-center lg:justify-center  py-16">
      <div className="w-full relative lg:w-[40%] ">
        <div className="absolute left-2 top-2 flex flex-col gap-4 text-left">
          <p className="text-gray-800 text-[0.4rem]">ABOUT US</p>
          <h1 className="text-black text-[2rem] font-bold leading-6  lg:text-[3rem] lg:leading-14 lg:tracking-1 ">
            Your Partner In <br />
            property Investment
          </h1>
          <p className="text-gray-500 text-sm font-semibold leading-5 lg:text-base lg:leading-6">
            We are dedicated to providing our clients with exceptional <br />
            service and expert guidance throughout the entire real estate
            <br /> Whether you are a first-time investor or a seasoned pro.
          </p>
        </div>
        <Image
          src="/image/whiteSky.png"
          alt="Luxury Real Estate Hero"
          width={500}
          height={300}
          className="object-cover rounded-2xl shadow-lg lg:w-full lg:h-[30rem]"
        />
        <Image
        src="/svg/cardRotate.svg"
          alt="Card Rotate"
          width={100}
          height={100}
          className="absolute bottom-4 right-4"
        />

      </div>
      <div className="flex flex-col gap-3  w-full items-center justify-between lg:w-[40%] ">
        <div className="w-full ">
          <Image
            src="/image/cardSection3.png"
            alt="card"
            width={500}
            height={300}
            className="object-cover rounded-2xl shadow-lg w-full lg:h-[17.5rem]"
          />
        </div>
        <div className="flex gap-2 w-full items-center justify-between bg-[#A680EB] p-3 rounded-2xl">
          <div>
            <Image
              src="/image/cardSection2.png"
              alt="card"
              width={170}
              height={80}
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <Image
              src="/image/cardSection1.png"
              alt="card"
              width={170}
              height={80}
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondCardSection;
