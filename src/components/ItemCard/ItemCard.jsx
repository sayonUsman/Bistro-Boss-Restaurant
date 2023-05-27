const ItemCard = ({ item }) => {
  return (
    <div className="card rounded-md card-compact w-72 sm:w-96 bg-transparent shadow-lg shadow-black">
      <figure>
        <img src={item.image} alt={item.name} className="w-full h-72" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p className="text-left">{item.descriptions.slice(0, 125) + "..."}</p>

        <div className="card-actions justify-end">
          <button className="btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
