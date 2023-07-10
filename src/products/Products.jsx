import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";

export const Products = () => {
  const [products, setAllProducts] = useState();
  const getAllProducts = async () => {
    const { data } = await axios.get("http://localhost:4000/api/product");
    setAllProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div className="product-wrapper">
        <div className="filter-section">
          <div className="filter">
            <h2 style={{ fontSize: "2rem", textAlign: "center" }}>Filter</h2>
          </div>
        </div>
        <div className="products-section">
          {products &&
            products.map((product) => {
              return (
                <div className="products-items">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </figure>
                  <h2>{product.title}</h2>
                  <p>Rs {product.price}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <p>Color</p>
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: product.color,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          {/* <div className="products-items">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </figure>
            <h2>RS 1000</h2>
            <p>Free Delivery</p>
          </div>
          <div className="products-items">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </figure>
            <h2>RS 1000</h2>
            <p>Free Delivery</p>
          </div>
          <div className="products-items">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </figure>
            <h2>RS 1000</h2>
            <p>Free Delivery</p>
          </div>
          <div className="products-items">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </figure>
            <h2>RS 1000</h2>
            <p>Free Delivery</p>
          </div>
          <div className="products-items">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </figure>
            <h2>RS 1000</h2>
            <p>Free Delivery</p>
          </div>
          <div className="products-items">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </figure>
            <h2>RS 1000</h2>
            <p>Free Delivery</p>
          </div>
          <div className="products-items">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </figure>
            <h2>RS 1000</h2>
            <p>Free Delivery</p>
          </div>
          <div className="products-items">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </figure>
            <h2>RS 1000</h2>
            <p>Free Delivery</p>
          </div> */}
        </div>
      </div>
    </>
  );
};
