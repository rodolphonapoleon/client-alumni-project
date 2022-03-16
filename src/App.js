import NavBar from "./navbar.js";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home.js";
import AddUser from "./components/addUser.js";
import AllUsers from "./components/allUsers.js";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            backgroundColor: "#F0F8F5",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <NavBar />
          <div className="row bg-light">
            <div
              className="col"
              style={{
                width: "100%",
                height: "4px",
              }}
            ></div>
          </div>
          <div className="container-fluid" style={{ padding: "0px", flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addUser/" element={<AddUser />} />
              <Route path="/allUsers/" element={<AllUsers />} />
            </Routes>
          </div>
          <div className="row bg-dark mt-4">
            <div
              className="col"
              style={{
                width: "100%",
                height: "6px",
              }}
            ></div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
