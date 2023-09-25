import Card from "../Card/Card";


const DonationCard = ({donationCard}) => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-3">
      {
        donationCard?.map(cards=><Card key={cards.id} cards={cards}></Card>)
      }
    </div>
  );
};

export default DonationCard;