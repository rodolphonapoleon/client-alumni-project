import { Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function AllUsers() {
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState("");
  const [queryState, setQueryState] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);

  const handleClickAllUsers = () => {
    const fetchData = async () => {
      const result = await axios("http://3.83.121.236:9000/allUsers");
      setResponse(result.data);
    };
    fetchData();
    setDisplayAll(true);
    setQueryState(false);
  };

  const handleClickUsersByState = () => {
    const fetchData = async () => {
      const result = await axios(`http://3.83.121.236:9000/allUsers/${query}`);

      setResponse(result.data);
    };
    fetchData();
    setQueryState(true);
    setDisplayAll(false);
  };

  return (
    <>
      <div className="container" style={{ maxWidth: "50rem" }}>
        <div className="mx-auto mt-5">
          <div className="my-4 ms-2">
            <button
              className="btn btn-dark fw-bold border-primary border-1 rounded-3 py-2"
              onClick={() => handleClickAllUsers()}
            >
              Show All students
            </button>
          </div>
          <Form
            onSubmit={(event) => {
              handleClickUsersByState();

              event.preventDefault();
            }}
          >
            <Form.Label className="fw-bold ms-2">
              Show Students by State
            </Form.Label>
            <Row className="gx-0 ms-2">
              <Col md={6}>
                <Form.Select
                  // style={{ width: "10rem" }}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setQueryState(false);
                  }}
                  className="mt-2"
                >
                  <option value="" className="text-muted">
                    Choose a State
                  </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IO">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Button
                  variant="dark"
                  type="submit"
                  className="searchbutton border-primary border-1 rounded-3 mt-2"
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
          {displayAll ? (
            <div className="my-3 fs-3 ms-4 fw-bold">
              All Students - {response.length}
            </div>
          ) : (
            ""
          )}
          {queryState ? (
            <div className="my-3 fs-3 ms-4 fw-bold">
              Student(s) / {query} - {response.length}
            </div>
          ) : (
            ""
          )}
        </div>

        {/* <ul> */}
        {displayAll || queryState
          ? response.map((user) => (
              <div
                className="container mt-4"
                key={user.id}
                style={{ maxWidth: "50rem" }}
              >
                <div className="container card border-white shadow rounded">
                  <div className="row gx-0">
                    <div className="col-2 align-self-center py-3 text-center">
                      <img
                        className="img-fluid rounded-circle"
                        src={user.avatar}
                      />
                    </div>
                    <div className="col-10 align-self-center content">
                      <div className="title my-1 ms-2">{user.name}</div>
                      <table className="table table-borderless info">
                        <tbody>
                          <tr>
                            <td className="fw-bold">Email:</td>
                            <td className="text-danger long-email">
                              {user.email}
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold">DOB:</td>
                            <td>{user.dob}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Address:</td>
                            <td>
                              {user.streetaddress}
                              <br />
                              {user.citystatezip}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ""}
        {/* </ul> */}
      </div>
    </>
  );
}

export default AllUsers;
