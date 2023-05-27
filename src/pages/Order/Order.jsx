import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BackgroundCover from "../Shared/BackgroundCover/BackgroundCover";
import banner from "../../assets/menu-banner.jpg";
import bg from "../../assets/menu-bg.png";
import useMenu from "../../hooks/useMenu";
import TabItems from "./TabItems/TabItems";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drink");

  return (
    <div>
      <BackgroundCover
        img={banner}
        title={"OUR FOOD"}
        subTitle={"WOULD YOU LIKE TO TRY A DISH?"}
      ></BackgroundCover>

      <div
        className="hero bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>

        <div className="mt-14">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className="text-center"
          >
            <TabList>
              <Tab>SALADS</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUPS</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
            </TabList>

            <TabPanel>
              <TabItems items={salads}></TabItems>
            </TabPanel>

            <TabPanel>
              <TabItems items={pizza}></TabItems>
            </TabPanel>

            <TabPanel>
              <TabItems items={soups}></TabItems>
            </TabPanel>

            <TabPanel>
              <TabItems items={desserts}></TabItems>
            </TabPanel>

            <TabPanel>
              <TabItems items={drinks}></TabItems>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Order;
