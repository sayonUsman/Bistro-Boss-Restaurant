const ItemCard = ({ item }) => {
  return (
    <div className="card rounded-md card-compact w-72 sm:w-96 bg-transparent shadow-lg shadow-black">
      <figure>
        <img src={item.image} alt={item.name} className="w-full h-72" />
      </figure>

      <p className="absolute right-3 top-3 rounded pl-3 pr-3 bg-black bg-opacity-60 text-white">
        ${item.price}
      </p>

      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p className="text-left">{item.descriptions.slice(0, 125) + "..."}</p>

        <div className="card-actions justify-end">
          <button className="btn">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
