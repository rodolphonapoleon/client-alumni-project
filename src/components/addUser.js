import { faker } from "@faker-js/faker";
import axios from "axios";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import FormUser from "./formuser";

function AddUser() {
  const [userAdd, setUserAdd] = useState({});
  const handleClick = async () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const date = faker.date.past(
      50,
      new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)")
    );

    // random data
    const name = faker.name.findName(firstName, lastName);
    const email = faker.internet.email(firstName, lastName);
    const username = faker.internet.userName(firstName, lastName);
    const password = faker.internet.password();
    const phone = faker.phone.phoneNumber();
    const streetaddress = faker.address.streetAddress();
    const state = faker.address.stateAbbr();
    const citystatezip =
      faker.address.city() + ", " + state + " " + faker.address.zipCode();

    const latitude = faker.address.latitude();
    const longitude = faker.address.longitude();
    const avatar = faker.image.avatar();
    const dob =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    // user object
    const user = {
      name,
      dob,
      email,
      username,
      password,
      phone,
      streetaddress,
      state,
      citystatezip,
      latitude,
      longitude,
      avatar,
    };
    await axios.post("http://3.83.121.236:9000/addUser", user);
    setUserAdd(user);
  };
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <button
            className="btn btn-dark fw-bold border-primary border-1 rounded-3 py-2"
            onClick={() => handleClick()}
          >
            Register Student Using Faker
          </button>
        </div>
        <div className="mb-5 mt-1">
          Student Added: <span className="fw-bold">{userAdd.name}</span>
        </div>
        <div className="fs-3 fw-blod mt-3">Student Information</div>
        <div className="mb-3 text-danger">
          *This form isn't working yet, it'll be ready very soon*
        </div>
        <FormUser />
      </div>
    </>
  );
}

export default AddUser;
