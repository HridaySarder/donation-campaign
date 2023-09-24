const Banner = () => {
  return (
    // <div>
    //   <h2 className="text-5xl text-center font-bold">I Grow By Helping People In Need</h2>
    // </div>
    <div
      className="hero min-h-screen bg-[#FFFFFFF2] mt-3"
      style={{ backgroundImage: "url(https://i.ibb.co/1b9FwTm/banner.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <h2 className="mb-5 text-5xl font-bold">
          I Grow By Helping People In Need
        </h2>
      </div>
      <div className="mt-20">
        <input
          className="p-2 rounded-l-lg"
          type="text"
          placeholder="Search here"
        />
        <button className="bg-[#FF444A] text-white p-2 rounded-r-lg">
          Search
        </button>
      </div>
    </div>
    
  );
};

export default Banner;
