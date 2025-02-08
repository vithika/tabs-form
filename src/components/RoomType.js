const RoomType = ({ data, setData }) => {
  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      roomType: e.target.name,
    }));
  };
  const { roomType } = data;
  return (
    <div style={{ margin: 40 }}>
      What type of room do you want?
      <div style={{ margin: 30, display: "flex" }}>
        <label>
          <input
            type="radio"
            name="Single"
            checked={roomType == "Single"}
            onChange={handleDataChange}
          ></input>{" "}
          Single room
        </label>
      </div>
      <div style={{ margin: 30, display: "flex" }}>
        <label>
          <input
            type="radio"
            name="Family"
            checked={roomType === "Family"}
            onChange={handleDataChange}
          ></input>{" "}
          Family room
        </label>
      </div>
      <div style={{ margin: 30, display: "flex" }}>
        <label>
          <input
            type="radio"
            name="Business"
            checked={roomType === "Business"}
            onChange={handleDataChange}
          ></input>{" "}
          Business room
        </label>
      </div>
    </div>
  );
};
export default RoomType;
