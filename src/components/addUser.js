import { faker } from "@faker-js/faker";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddUser() {
  const [userAdd, setUserAdd] = useState({});
  const handleClick = () => {
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
    axios.post("http://3.83.121.236:9000/addUser", user);
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
        <form class="row g-3">
          <div class="col-md-4">
            <label for="validationDefault01" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault01"
              value=""
              required
            />
          </div>
          <div class="col-md-4">
            <label for="validationDefault02" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault02"
              value=""
              required
            />
          </div>
          <div class="col-md-4">
            <label for="validationDefaultUsername" class="form-label">
              Username
            </label>
            <div class="input-group">
              <span class="input-group-text" id="inputGroupPrepend2">
                @
              </span>
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
          <div class="col-md-5">
            <label for="validationDefault03" class="form-label">
              Street
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault03"
              required
            />
          </div>
          <div class="col-md-3">
            <label for="validationDefault03" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault03"
              required
            />
          </div>
          <div class="col-md-2">
            <label for="validationDefault04" class="form-label">
              State
            </label>
            <select class="form-select" id="validationDefault04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="validationDefault05" class="form-label">
              Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault05"
              required
            />
          </div>
          <div class="col-md-3">
            <label for="validationDefault03" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault03"
              required
            />
          </div>
          <div class="col-md-3">
            <label for="validationDefault03" class="form-label">
              Date of Birth
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault03"
              required
            />
          </div>
          <div class="col-md-3">
            <label for="validationDefault05" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault05"
              required
            />
          </div>
          <div class="col-md-3">
            <label for="validationDefault05" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault05"
              required
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div class="col-12">
            <button
              class="btn btn-dark border-primary border-1 rounded-3"
              type="submit"
            >
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;
