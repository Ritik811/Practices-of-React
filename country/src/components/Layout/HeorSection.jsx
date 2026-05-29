import { FaLongArrowAltRight } from "react-icons/fa";
export const HeroSection = () => {
  return (
    <>
      <main className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">
              Explore The World, One Country at a Time
            </h1>
            <p className="paragraph">
              Discover The history culture and bea uty of every nation Sort.
              Search and filter through conuntries to find the details you need.
            </p>
            <button className="btn btn-darken btn-inline bt-white-box">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </div>
          <div className="hero-image">
            <img
              src="/images/world.png"
              className="banner-image"
              alt="world beauty"
            />
          </div>
        </div>
      </main>
    </>
  );
};
