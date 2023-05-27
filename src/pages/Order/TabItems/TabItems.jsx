import ItemCard from "../../../components/ItemCard/ItemCard";

const TabItems = ({ items }) => {
  return (
    <div className="flex justify-center mt-10 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default TabItems;
