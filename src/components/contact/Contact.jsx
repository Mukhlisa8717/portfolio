import React, { useState } from "react";
import "./Contact.css";

const BOT_TOKEN = "6984601542:AAHCF1HdL0BTa71xaByGNiITcVnhiFoCY_k";
const CHAT_ID = "-4276448242";

let initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  let [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Contact %0A";
    text += `Name: <b>${data.name}</b> %0A`;
    text += `Email: <b>${data.email}</b> %0A%0A`;
    text += `Message: <b>${data.message}</b>`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact__title">
          <span className="contact__title-main">Contact</span>
          <span className="contact__title-sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div className="contact__form-container">
          <form action="#" onSubmit={handleSubmit}>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">
                Name
              </label>
              <input
                value={data.name}
                onChange={(e) =>
                  setData((p) => ({ ...p, name: e.target.value }))
                }
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                value={data.email}
                onChange={(e) =>
                  setData((p) => ({ ...p, email: e.target.value }))
                }
                required
                placeholder="Enter Your Email"
                type="email"
                className="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">
                Message
              </label>
              <textarea
                value={data.message}
                onChange={(e) =>
                  setData((p) => ({ ...p, message: e.target.value }))
                }
                required
                cols={30}
                rows={10}
                name="message"
                id="message"
                className="contact__form-input"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button type="submit" className="contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
