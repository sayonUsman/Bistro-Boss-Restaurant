import { IconContext } from "react-icons";
import { GiWallet } from "react-icons/Gi";
import { AiFillShopping, AiFillStar } from "react-icons/Ai";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";

const Dashboard = () => {
  const { loggedInUser } = useContext(AuthContext);
  const userDetails = loggedInUser();

  return (
    <div className="mt-20 md:mt-4 mb-7">
      <p className="text-4xl xl:text-5xl text-center font-bold">
        Hi, Welcome Back!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-20">
        <div className="w-96 lg:w-72 xl:w-96 h-48 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-md text-white mx-auto">
          <div className="flex justify-center items-center h-full">
            <IconContext.Provider value={{ size: "72px" }}>
              <GiWallet></GiWallet>
            </IconContext.Provider>
            <span className="text-5xl  font-bold">0.00</span>
          </div>
        </div>

        <div className="w-96 lg:w-72 xl:w-96 h-48 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-md text-white mx-auto">
          <div className="flex justify-center items-center h-full">
            <IconContext.Provider value={{ size: "72px" }}>
              <AiFillShopping></AiFillShopping>
            </IconContext.Provider>
            <span className="text-5xl  font-bold">00</span>
          </div>
        </div>

        <div className="w-96 lg:w-72 xl:w-96 h-48 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-md text-white mx-auto">
          <div className="flex justify-center items-center h-full">
            <IconContext.Provider value={{ size: "72px" }}>
              <AiFillStar></AiFillStar>
            </IconContext.Provider>
            <span className="text-5xl font-bold">00</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-20">
        <div className="w-96 h-96 2xl:w-[585px] 2xl:h-[425px] bg-[#FFEDD5] rounded-md mx-auto">
          <div className="flex justify-center items-center h-full">
            <div>
              <img
                src={
                  userDetails[2]
                    ? userDetails[2]
                    : "https://img.freepik.com/free-vector/hand-drawn-coconut-illustration_23-2148160083.jpg?w=826&t=st=1685442440~exp=1685443040~hmac=f375ed00db010995d113408e9a3f685e87616a91ce07cf3ed521b21ba1a13b2a"
                }
                className="flex mx-auto rounded-full w-48 h-48 2xl:w-64 2xl:h-64"
              />

              <p className="text-center font-bold text-3xl 2xl:text-5xl mt-7">
                {userDetails[0] ? userDetails[0] : userDetails[1]}
              </p>
            </div>
          </div>
        </div>

        <div className="w-96 h-96 2xl:w-[585px] 2xl:h-[425px] bg-[#FEF9C3] rounded-md text-center mx-auto mt-5 xl:mt-0">
          <div className="flex justify-center items-center h-full">
            <div>
              <p className="text-3xl 2xl:text-5xl font-bold">Your Activities</p>

              <ul className="text-xl 2xl:text-2xl font-semibold mt-5">
                <li>
                  Orders: <span>00</span>
                </li>

                <li>
                  Booking: <span>00</span>
                </li>

                <li>
                  Reservation: <span>00</span>
                </li>

                <li>
                  Payments: <span>0.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
