import bg from "../../assets/bg.png";
import logo from "../../assets/logo.png";

const MenuCard = ({ items }) => {
  return (
    <div
      className="hero bg-fixed rounded-lg"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="mt-7 mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex justify-center items-center lg:ml-9 xl:ml-10"
            >
              <figure className="flex justify-center">
                <img
                  src={logo}
                  alt="logo"
                  className="sm:mb-4 md:mb-14 lg:mb-0 2xl:mb-8 ml-10 md:ml-16 lg:ml-0"
                />
              </figure>

              <div className="card-body md:ml-5 lg:ml-0">
                <h2 className="card-title">{item.name}</h2>
                <p className="text-left">
                  {item.descriptions.slice(0, 125) + "..."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
