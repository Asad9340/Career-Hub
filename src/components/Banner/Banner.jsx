import bannerImg from '../../assets/images/user.png'
function Banner() {
  return (
    <section className="bg-[#7E90FE0D] text-gray-800">
      <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between max-w-5xl">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-none sm:text-6xl">
            On Step <br /> Closer To Your <br />
            <span className="text-violet-400">Dream Job</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded-lg bg-violet-400 hover:bg-violet-500 active:bg-violet-400 text-white"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={bannerImg}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
