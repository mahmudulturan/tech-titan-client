import PropTypes from "prop-types";
const Slider = ({ slide }) => {
  const { image, offer, slogan } = slide;
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
        <div className=" bg-white/60 dark:bg-gray-900/60">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-3xl md:text-5xl font-bold text-text dark:text-white text-center drop-shadow-text my-4">
              {slogan}
            </h1>
            <h1 className="text-lg md:text-3xl font-bold text-text dark:text-white text-center drop-shadow-text my-4">
              {offer}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default Slider;
