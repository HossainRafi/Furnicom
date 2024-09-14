import bannerImg from "../../assets/banner.png";

export const Hero = () => {
  return (
    <section
      className={`relative h-screen bg-cover bg-center text-white  `}
      style={{ backgroundImage: `url(${bannerImg})` }}
    ></section>
  );
};
