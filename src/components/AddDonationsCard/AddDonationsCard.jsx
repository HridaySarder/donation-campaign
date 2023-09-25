const AddDonationsCard = ({ donate }) => {
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
  } = donate;
  return (
    <div
      className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      style={{ backgroundColor: card_bg, color: text_bg }}
    >
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img src={Picture} alt="image" className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <button className="bg-[#79C23F26] p-2 rounded-lg">{Category}</button>
        <p className="font-semibold text-black">{Title}</p>

        <p className="font-semibold">{Price}</p>
        <button
          className="p-2 rounded-lg text-white font-semibold"
          style={{ backgroundColor: text_bg }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AddDonationsCard;
