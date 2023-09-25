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
  return (
    <div className="overflow-hidden"> 
      <div>
        <img className="w-full" src={Picture} alt="ui/ux review check" />
      </div>
      
       <div className="mt-[-80px] ml-6">
       <button className="p-5 text-white rounded-lg " style={{backgroundColor:text_bg}}>Donate {Price}</button>
       </div>
      
      
        <h4 className=" text-5xl font-bold mt-10">
          {Title}
        </h4>
        <p className="mt-3">
          {Description}
        </p>
     
    </div>
  );
};

export default DonationCards;
