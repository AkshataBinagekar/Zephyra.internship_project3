import React from "react";
import Navbar from "../component/Navbar";
import Navbar2 from "../component/Navbar2";
import "./Home.css";

function Home() {
  const filterOptions = [
    "Sort by",
    "Brand",
    "New in",
    "Size",
    "Prize",
    "Colour",
    "Material",
    "Length",
    "Pattern",
  ];
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="filters-container">
        <div className="filter-options">
          {filterOptions.map((option, index) => (
            <div key={index} className="filter-item">
              <select>
                <option value="">{option}</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          ))}
        </div>
      </div>


      <section className="cards">
        <div className="card_container">
          <div className="card"></div>
          <p>Scarf</p>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-regular fa-star"  style={{color: "#f4f363",}}></i>
         <p>Rs.1000</p>
        
        </div>

        <div className="card_container">
          <div className="card"></div>
          <p>Shirt</p>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <p>Rs.1000</p>
        </div>

        <div className="card_container">
          <div className="card"></div>
          <p>Trousers</p>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-regular fa-star"  style={{color: "#f4f363",}}></i>
          <p>Rs.1000</p>
        </div>

        <div className="card_container">
          <div className="card"></div>
          <p>Shirt</p>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <p>Rs.1000</p>
        </div>
      </section>

      <br></br>
      <br></br>
    

      <section className="cards">
        <div className="card_container">
          <div className="card"></div>
          <p>Scarf</p>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-regular fa-star"  style={{color: "#f4f363",}}></i>
          <p>Rs.1000</p>
        </div>

        <div className="card_container">
          <div className="card"></div>
          <p>Shirt</p>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <p>Rs.1000</p>
        </div>

        <div className="card_container">
          <div className="card"></div>
          <p>Trousers</p>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-regular fa-star"  style={{color: "#f4f363",}}></i>
          <p>Rs.1000</p>
        </div>

        <div className="card_container">
          <div className="card"></div>
          <p>Shirt</p>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <i class="fa-solid fa-star" style={{color: "#f4f363",}}></i>
          <p>Rs.1000</p>
        </div>
       
      </section>
      <br></br>
      <br></br>
    </div>
  );
}

export default Home;
