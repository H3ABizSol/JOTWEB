import "./Dashboard.css";
import React, { useState } from "react";
import axios from "axios";
import { Modal } from "antd";
import { Dashboardnav } from "../components/Dashboardnav/Dashboardnav";

export const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [formdata, setFormData] = useState({
    title: "",
    desc: "",
    categories: "",
    color: "",
    stock: "",
  });

  const handleClick = () => {};

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datas = new FormData();
    datas.append("img", image);
    datas.append("title", formdata.title);
    datas.append("desc", formdata.desc);
    datas.append("categories", formdata.categories);
    datas.append("color", formdata.color);
    datas.append("stock", formdata.stock);

    const { data } = await axios.post("http://localhost:4000/api/product", {
      datas,
    });
    console.log(data);
  };

  return (
    <section className="dashboard-section">
      <Modal
        title="Form"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        // width={1000}
      >
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="product title"
              onChange={handleChange}
              value={formdata.title}
            />
          </div>
          <div>
            <input
              type="text"
              name="desc"
              placeholder="product descripton"
              onChange={handleChange}
              value={formdata.desc}
            />
          </div>
          <div>
            <input
              type="text"
              name="categories"
              placeholder="product categories"
              onChange={handleChange}
              value={formdata.categories}
            />
          </div>

          <div>
            <input
              type="text"
              name="color"
              placeholder="product color"
              onChange={handleChange}
              value={formdata.color}
            />
          </div>
          <div>
            <input
              type="text"
              name="stock"
              placeholder="product stock"
              onChange={handleChange}
              value={formdata.stock}
            />
          </div>
          <div>
            <input
              type="file"
              name="img"
              placeholder="product image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </Modal>

      <div className="dashboard-wrapper">
        <div className="left-section">
          <Dashboardnav />
        </div>
        <div className="right-section">
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              onClick={() => {
                setOpen(true);
              }}
              style={{
                borderRadius: "4px",
                padding: "0.8rem 2rem",
                border: "none",
                outline: "none",
                textAlign: "end",
                margin: "0.8rem 4rem",
                cursor: "pointer",
              }}
            >
              Create
            </button>
          </div>
          <div className="items-wrapper">
            <div className="items">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
              <div>
                <h2>Product1</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Incidu
                </p>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
          <div style={{ width: "70%", margin: " 2rem auto" }}>
            <p style={{ fontSize: "1.6rem" }}>Page 1 out of 30</p>
          </div>
        </div>
      </div>
    </section>
  );
};
