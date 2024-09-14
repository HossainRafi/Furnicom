import bannerImg from "../../assets/banner.png";

export const Hero = () => {
  return (
    <section
      className={`relative h-screen bg-cover bg-center text-white  `}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="relative md:pt-48 pt-28 px-4 text-center md:w-1/2 mx-auto space-y-8">
        <h1 className="text-4xl lg:text-5xl lg:leading-tight leading-snug font-medium">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-xl lg:w-1/2 mx-auto ">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
      </div>
    </section>
  );
};
