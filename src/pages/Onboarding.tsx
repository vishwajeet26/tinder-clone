import React, { SyntheticEvent, useState } from "react";
import Nav from "../components/Nav";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_intrest: "woman",
    email: "",
    url: "",
    about: "",
    matches: [],
  });
  const handleSubmit = () => {
    console.log("submitted");
  };
  const handleChange = (e: any) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData)
  return (
    <>
      <Nav
        minimal={true}
        setIsSignUp={() => {}}
        setShowModal={() => {}}
        showModal={false}
      />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />
            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />

              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender_identity"
                value="man"
                onChange={handleChange}
                checked={formData.gender_identity === "man"}
              />
              <label className="labelStyles" htmlFor="man-gender-identity">
                Man
              </label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_identity === "woman"}
              />
              <label className="labelStyles" htmlFor="woman-gender-identity">
                Woman
              </label>
              <input
                id="more-gender-identity"
                type="radio"
                name="gender_identity"
                value="more"
                onChange={handleChange}
                checked={formData.gender_identity === "more"}
              />
              <label className="labelStyles" htmlFor="more-gender-identity">
                More
              </label>
            </div>
            <label htmlFor="show-gender">Show gender on my profile</label>
            <div className="mulitple-input-container">
              <input
                id="show-gender"
                type="checkbox"
                name="show_gender"
                onChange={handleChange}
                checked={formData.show_gender}
              />
            </div>
            <label>Show me as</label>
            <div
              style={{ marginTop: "10px", marginBottom: "20px" }}
              className="mulitple-input-container"
            >
              <input
                id="man-gender-intrest"
                type="radio"
                name="gender_intrest"
                value="man"
                onChange={handleChange}
                checked={formData.gender_intrest === "man"}
              />
              <label className="labelStyles" htmlFor="man-gender-intrest">
                Man
              </label>
              <input
                id="woman-gender-intrest"
                type="radio"
                name="gender_intrest"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_intrest === "woman"}
              />
              <label className="labelStyles" htmlFor="woman-gender-intrest">
                Woman
              </label>
              <input
                id="everyone-gender-intrest"
                type="radio"
                name="gender_intrest"
                value="everyone"
                onChange={handleChange}
                checked={formData.gender_intrest === "everyone"}
              />
              <label className="labelStyles" htmlFor="everyone-gender-intrest">
                Everone
              </label>
            </div>

            <label htmlFor=""> About me </label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              value={formData.about}
              placeholder="I like long walks..."
              onChange={handleChange}
            />
            <input type="submit" />
          </section>

          <section>
            <label htmlFor="about">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              <img src={formData.url} alt={"Profile pic preview"} />
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
