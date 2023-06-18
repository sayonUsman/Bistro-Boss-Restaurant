import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { user, loggedInUser } = useContext(AuthContext);
  const userDetails = loggedInUser();
  const navigate = useNavigate();

  const manageOrders = (itemId) => {
    if (user) {
      const orders = {
        customerName: userDetails[0],
        customerEmail: userDetails[1],
        itemId: itemId,
        itemName: item.name,
        price: item.price,
      };

      fetch("http://localhost:5000/selected-orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orders),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Oops!",
        text: "To ensure the orders please login or sign up.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

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
          <button className="btn" onClick={() => manageOrders(item._id)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
