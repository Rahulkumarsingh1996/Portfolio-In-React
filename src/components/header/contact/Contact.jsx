import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = ({ blackAndWhite }) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setdesc] = useState("");
  const notify = () => toast.success("Rahul will touch you soon !");
  const textColorStyle = blackAndWhite ? { color: "white" } : null;
  const backgroundButtonColorStyle = blackAndWhite
    ? { backgroundColor: "white", color: "black", borderRadius: "15px" }
    : null;
  const backgroundNameColorStyle = blackAndWhite
    ? { backgroundColor: "black", color: "white", borderRadius: "15px" }
    : null;

  //... Regex signup email validation
  const validateUserEmail = (email) => {
    const emailPattern =
      /^(?!\d+@)\w+([-+.']\w+)*@(?!\d+\.)\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return emailPattern.test(email);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      toast.warn("please enter your name !");
    } else if (email.trim() === "") {
      toast.warn("please enter your email !");
    } else if (!validateUserEmail(email)) {
      toast.warn("Please enter a valid email address.");
    } else {
      emailjs
        .sendForm(
          "service_jrirb6f",
          "template_ymy57me",
          form.current,
          "T878eAAIFA063D1YP"
        )
        .then(
          (result) => {
            console.log("send to the email..", result.text);
            console.log({ name, email, desc });
            setName("");
            setEmail("");
            setdesc("");
            console.log("Form submitted");
            notify();
          },
          (error) => {
            console.log("Email error..", error.text);
          }
        );
    }
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title" style={textColorStyle}>
        Get in touch
      </h2>
      <span className="section__subtitle" style={textColorStyle}>
        Contact Me
      </span>

      <div className="contact__container container grid">
        <div className="contact__contact">
          <h3 className="contact__title" style={textColorStyle}>
            Talk to me
          </h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                singhrahul841412@gmail.com
              </span>

              <a href="https://mail.google.com" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i class="uil uil-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">867-882-7215</span>

              <a
                href="https://web.whatsapp.com/ccd"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__contact">
          <h3 className="contact__title" style={textColorStyle}>
            Write me your project
          </h3>

          <form className="contact__form" onSubmit={handlesubmit} ref={form}>
            <div
              className="contact__form-div"
              style={backgroundButtonColorStyle}
            >
              <label
                className="contact__form-tag"
                style={backgroundNameColorStyle}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div
              className="contact__form-div"
              style={backgroundButtonColorStyle}
            >
              <label
                className="contact__form-tag"
                style={backgroundNameColorStyle}
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div
              className="contact__form-div contact__form-area"
              style={backgroundButtonColorStyle}
            >
              <label
                className="contact__form-tag"
                style={backgroundNameColorStyle}
              >
                Project
              </label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
                onChange={(e) => setdesc(e.target.value)}
                value={desc}
              ></textarea>
            </div>{" "}
            <br />
            <button
              type="submit"
              className="button button--flex"
              style={backgroundButtonColorStyle}
            >
              send message<i class="uil uil-message"></i>
            </button>
          </form>
        </div>
      </div>
      <ToastContainer className="tost-message" />
    </section>
  );
};

export default Contact;
