import banner from "../banner-site-2560.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-100 position-relative">
      <img src={banner} className="img-fluid"></img>
      <div
        style={{ width: "100%", margin: "auto" }}
        className="position-absolute top-75
           start-50 translate-middle-x text-end container"
      >
        <Link
          to="/addUser/"
          className="btn btn-dark btn-lg fs-4 fw-bold border-primary border-1 rounded-pill py-2 px-4"
        >
          Register Today
        </Link>
      </div>
    </div>
  );
}

export default Home;
