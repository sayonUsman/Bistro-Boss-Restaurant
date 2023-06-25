import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const useSelectedOrders = () => {
  const { loggedInUser } = useContext(AuthContext);
  const userDetails = loggedInUser();
  const email = userDetails[1];

  const { data, refetch } = useQuery({
    queryKey: ["selected-orders", email],

    queryFn: async () => {
      const res = await fetch(
        `https://bistro-boss-restaurant-two.vercel.app/selected-orders?email=${email}`
      );
      return res.json();
    },
  });
  return [data, refetch];
};

export default useSelectedOrders;
