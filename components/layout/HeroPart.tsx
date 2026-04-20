import Image from "next/image";
const HeroPart = () => {
  return (
    <section
      className="hero-section relative h-[100vh] min-h-[700px] max-h-[900px] w-full flex justify-center items-center"
    >
      {/* RADIAL GRADIENT */}
      <div
        className="absolute inset-0 pointer-events-none z-[2] "
        style={{
          background: `radial-gradient(
            225.8% 51.27% at 50% 50%,
            rgba(239, 68, 68, 0.08) 0%,
            rgba(239, 68, 68, 0) 70%
          )`,
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative flex flex-col items-center justify-center text-center ">
        <span className="hero-title block text-[64px] md:text-[193px] font-light leading-[1.1] tracking-[0] animate-fade-in-up font-mencken-regular">
          We Operate
        </span>

        <span className="text-[160px] text-[#C01823] leading-[100%] tracking-[0px] mt-[12px] sm:mt-[60px] font-mencken-extrabold w-[90%]">
          <Image
            src={'/asset/logo/networks.svg'}
            alt="Networks"
            width={500}
            height={500}
            className="networks-img h-[100%] w-[100%] object-contain"
          />
        </span>
      </div>

    </section>
  );
};

export default HeroPart;