import { useEffect, useState } from "react";
import AddDonationsCard from "../AddDonationsCard/AddDonationsCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("No data found");
    }
  }, []);
  console.log(donation);
  return (
    <div>
      {noFound ? (
        <p className="flex justify-center items-center h-[80vh]">{noFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {isShow
              ? donation.map((donate) => (
                  <AddDonationsCard
                    key={donate.id}
                    donate={donate}
                  ></AddDonationsCard>
                ))
              : donation
                  .slice(0, 4)
                  .map((donate) => (
                    <AddDonationsCard
                      key={donate.id}
                      donate={donate}
                    ></AddDonationsCard>
                  ))}
          </div>
          {donation.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="bg-[#009444] text-white block mx-auto p-3 rounded-lg mt-4"
            >
              {isShow ? "See Less" : "See All"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
