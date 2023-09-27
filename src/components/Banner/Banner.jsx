import { useState } from "react";

const Banner = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = () => {
    const filtered = items.filter((item) =>
      item.Category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div
      className="hero min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(https://i.ibb.co/1Q47Nf0/donation.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-90 bg-white"></div>
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#0B0B0B]">
            I Grow By Helping People In Need
          </h1>
          <div className="mt-8 md:mt-10 lg:mt-12">
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Search here...."
                className="w-80 p-3 rounded-l-lg border-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button
                className="p-3 text-white bg-[#FF444A] rounded-r-lg"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 md:mt-8 lg:mt-12">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white p-4 m-4 rounded shadow">
            <img src={item.Picture} alt={item.Title} className="w-32 h-32" />
            <h2 className="text-lg font-semibold">{item.Title}</h2>
            <p className="text-sm text-gray-500">{item.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;