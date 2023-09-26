const Banner = () => {
  return (

    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/1Q47Nf0/donation.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60 bg-white"></div>
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold text-[#0B0B0B]">
            I Grow By Helping People In Need
          </h1>
          <div className="mt-10">
            <input
              type="text"
              placeholder="Search here...."
              className="p-3 w-80 rounded-l-lg  border-none"
            />

            <button className="p-3 text-white bg-[#FF444A] rounded-r-lg">
             Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
