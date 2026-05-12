import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__heroText">
          <h1>Everything you need,<br />delivered fast.</h1>
          <p>Shop thousands of products with free delivery on eligible orders.</p>
          <button>Shop now</button>
        </div>
      </div>

      <div className="home__container">
        <h2 className="home__sectionTitle">Featured Products</h2>
        <div className="home__grid">
          <Product id="12321341" title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag" price={11.96} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" />
          <Product id="49538094" title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)" price={239.0} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg" />
          <Product id="4903850" title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback" price={199.99} rating={3} image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" />
          <Product id="23445930" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} rating={5} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
          <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
          <Product id="90829332" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide" price={1094.98} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;