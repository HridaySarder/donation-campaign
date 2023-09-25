import { useEffect, useState } from "react";
import AddDonationsCard from "../AddDonationsCard/AddDonationsCard";


const Donation = () => {
  const [donation,setDonation] = useState([])
  const [noFound,setNoFound] = useState("")
  useEffect(() => 
  {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if(donationItems){
      setDonation(donationItems)
    }
    else{
      setNoFound('No data found')
    }
   
  }
  ,[])
  console.log(donation);
  return <div>{noFound ? <p className="flex justify-center items-center h-[80vh]">{noFound}</p>:
    <div>
<div className="grid grid-cols-2 gap-5">
  {
    donation.map(donate=><AddDonationsCard key={donate.id} donate={donate}></AddDonationsCard>)
  }
</div>

    </div>
    }
    </div>
};

export default Donation;