const ExtraDetails = ({ data, setData, errors }) => {
  const { description } = data;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div style={{ margin: 40 }}>Room Description</div>

      <input
        type="text"
        value={description}
        placeholder="The room must have air-conditioner..."
        onChange={(e) => handleDataChange(e, "description")}
        style={{ height: 300, width: 500, border: "1px black solid" }}
      ></input>
      {errors.description && (
        <span className="error">{errors.description}</span>
      )}
    </div>
  );
};
export default ExtraDetails;
