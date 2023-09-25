

const Card = ({cards}) => {
  const {id,Picture,Title,Category,category_bg,card_bg,text_bg,Description,Price} = cards
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl"
    style={{backgroundColor:card_bg,color:text_bg}}
    >
  <figure><img className="w-full" src={Picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"><button className="bg-[#79C23F26] p-2 rounded-lg">{Category}</button></h2>
    <p className="font-semibold">{Title}</p>
    
  </div>
</div>
  );
};

export default Card;