const Banner = () => {
  return (
    <div data-aos="fade-up">
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/25ykHqj/bannerBG.jpg)",
          backgroundSize: "cover",
        }}>
        <div className="bg-white/60 dark:bg-gray-900/60">
          <div className="md:w-10/12 px-2 md:px-0 mx-auto min-h-[93vh] flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1" data-aos="zoom-out">
              <h1 className="text-6xl font-bold text-center drop-shadow-text my-4">
                <span className="text-text dark:text-white">Unleash the Power of</span> <br />{" "}
                <span className="text-primary">Titans in Tech.</span>
              </h1>
              <p className="font-medium text-center drop-shadow-sm text-text dark:text-white max-w-3xl mx-auto">
                Tech Titan embodies limitless innovation, unlocking the full
                potential of technology. Join us to experience the unparalleled
                power and possibilities that tech titans bring to the world of
                electronics
              </p>
            </div>
            <div data-aos="zoom-in" className="" style={{backgroundImage: 'url(https://i.ibb.co/c6gtjRs/magicpattern-blob-1697582987246.png)', backgroundSize: 'cover'}}>
              <img
                data-aos="zoom-out"
                src="https://i.ibb.co/0Jb9vYm/banner-IMG.png"
                className="w-10/12"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
