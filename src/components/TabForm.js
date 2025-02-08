import { useState } from "react";
import Account from "./Account";
import RoomType from "./RoomType";
import ExtraDetails from "./ExtraDetails";
const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setError] = useState({});
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    country: "",
    roomType: "Single",
    description: "",
  });

  const Tabs = [
    {
      name: "Account",
      component: Account,
      validate: () => {
        const err = {};
        if (!data.name || data.name < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email < 2) {
          err.email = "Email is not valid";
        }
        if (!data.country) {
          err.email = "Country is not valid";
        }
        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },

    {
      name: "RoomType",
      component: RoomType,
      validate: () => {
        return true;
      },
    },
    {
      name: "Extra Details",
      component: ExtraDetails,
      validate: () => {
        return true;
      },
    },
  ];
  const handlePrevClick = () => {
    {
      if (Tabs[activeTab].validate()) {
        setActiveTab((prev) => prev - 1);
      }
    }
  };
  const handleNextClick = () => {
    if (Tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handleSubmit = () => {
    console.log(data);
  };
  const ActiveFormComponent = Tabs[activeTab].component;
  return (
    <div>
      <div className="heading">
        {Tabs.map((t, index) => (
          <div
            className={"tabs-heading " + (activeTab == index ? "active" : "")}
            key={index}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div>
        <ActiveFormComponent data={data} setData={setData} errors={errors} />
      </div>
      <div className="btns">
        {activeTab > 0 && (
          <button
            style={{ height: 40, width: 80, marginRight: 220, marginTop: 100 }}
            onClick={handlePrevClick}
          >
            PREV
          </button>
        )}
        {activeTab < Tabs.length - 1 && (
          <button
            style={{ height: 40, width: 80, marginLeft: 40, marginTop: 100 }}
            onClick={handleNextClick}
          >
            NEXT
          </button>
        )}
        {activeTab === Tabs.length - 1 && (
          <button
            style={{ height: 40, width: 80, marginLeft: 20, marginTop: 100 }}
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        )}
      </div>
    </div>
  );
};
export default TabForm;
