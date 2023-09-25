import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";


const Home = () => {
  const donationCard = useLoaderData()
  return (
    <div>
     <Banner></Banner>
     <DonationCard donationCard={donationCard}></DonationCard>
    </div>
  );
};

export default Home;