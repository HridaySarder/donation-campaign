import swal from "sweetalert";

const DonationCards = ({ donation }) => {
  const {
    id,
    Picture,
    Title,
    Category,
    category_bg,
    card_bg,
    text_bg,
    Description,
    Price,
  } = donation;

  const handleAddToDonations = () => {
    const addDonationsArray = [];
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (!donationItems) {
      addDonationsArray.push(donation);
      localStorage.setItem("donations", JSON.stringify(addDonationsArray));

      swal("Good job!", "Successfully added Donation", "success");
    } else {
      const isExits = donationItems.find((donation) => donation.id === id);
      if (!isExits) {
        addDonationsArray.push(...donationItems, donation);
        localStorage.setItem("donations", JSON.stringify(addDonationsArray));
        swal("Good job!", "Successfully added Donation", "success");
      } else {
        swal("Sorry", "Already Donated", "error");
      }
    }
  };

  return (
    <div>
      <div>
        <img
          className="w-full rounded-lg h-[600px]"
          src={Picture}
          alt="ui/ux review check"
        />
      </div>

      <div className="mt-[-100px] pl-6 py-4">
        <button
          onClick={handleAddToDonations}
          className="p-5 text-white rounded-lg opacity-90"
          style={{ backgroundColor: text_bg }}
        >
          Donate {Price}
        </button>
      </div>

      <h4 className=" text-5xl font-bold mt-10">{Title}</h4>
      <p className="mt-3">{Description}</p>
    </div>
  );
};

export default DonationCards;
