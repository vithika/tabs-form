const Account = ({ data, setData, errors }) => {
  const { name, age, email, country } = data;

  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div style={{ margin: 40 }}>
      Please share your account details:
      <div>
        <div style={{ marginTop: 50, marginLeft: 100, display: "flex" }}>
          <label style={{ marginRight: 50 }}> Your Name </label>
          <label style={{ marginLeft: 150 }}> Your Age </label>
        </div>
        <div style={{ marginTop: 5, marginLeft: 100, display: "flex" }}>
          <input
            style={{ marginRight: 5, height: 30, width: 200 }}
            type="text"
            value={name}
            onChange={(e) => handleDataChange(e, "name")}
          ></input>
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            style={{ marginLeft: 50, height: 30, width: 200 }}
            type="number"
            value={age}
            onChange={(e) => handleDataChange(e, "age")}
          ></input>{" "}
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
      </div>
      <div style={{ marginTop: 50, marginLeft: 100, display: "flex" }}>
        <label style={{ marginRight: 50 }}> Your Email </label>
        <label style={{ marginLeft: 150 }}> Your Country </label>
      </div>
      <div style={{ marginTop: 5, marginLeft: 100, display: "flex" }}>
        <input
          style={{ marginRight: 50, height: 30, width: 200 }}
          type="text"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        ></input>{" "}
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          style={{ marginLeft: 5, height: 30, width: 200 }}
          type="text"
          value={country}
          onChange={(e) => handleDataChange(e, "country")}
        ></input>{" "}
        {errors.country && <span className="error">{errors.country}</span>}
      </div>
    </div>
  );
};
export default Account;
