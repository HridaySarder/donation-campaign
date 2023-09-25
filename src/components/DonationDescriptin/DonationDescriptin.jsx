import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCards from "../DonationCards/DonationCards";


const DonationDescriptin = () => {

  const [donation,setDonation] = useState({})
  const {id} = useParams()
  
  const donations = useLoaderData()
 
  useEffect(() => 
  {
    const findDonation = donations?.find((donation) => donation.id === id)
    setDonation(findDonation)
    
  }
  ,[id,donations])
  console.log(donation);
  
  return (
   <DonationCards donation={donation}></DonationCards>
  );
};

export default DonationDescriptin;