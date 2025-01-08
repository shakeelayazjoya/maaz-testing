import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";

const ContactUsModal = ({ isOpen, onClose, top = "260px" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDesc] = useState("");
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState("");

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone = "Contact Number is required";
    if (!description) newErrors.description = "Description is required";
    return newErrors;
  };

  const onSubmit = async () => {
    const formData = { name, email, phone, description };
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/contact", // Changed route to POST
          formData
        );
        if (response.status === 200) {
          setNotification("Form submitted successfully! Check your email.");
          setErrors({});
          setName("");
          setEmail("");
          setPhone("");
          setDesc("");

          // Hide the notification after 2 seconds and close the modal
          setTimeout(() => {
            setNotification("");
            onClose(); // Close the modal after 2 seconds
          }, 2000);
        }
      } catch (error) {
        console.error(error);
        setNotification("Failed to send the form. Please try again.");
      }
    } else {
      setErrors(formErrors);
      setNotification("");
    }
  };

  const inputStyle = {
    padding: "8px",
    color: "black",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const labelStyle = { color: "white" };

  const formGroupStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ top: top }}>
      <div
        className="modal-content sm:h-auto h-[500px] sm:overflow-hidden overflow-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: "40px" }}
      >
        <h2 style={{ color: "white", marginBottom: "20px" }}>{"Contact Us"}</h2>
        {notification && (
          <div style={{ color: "green", marginBottom: "20px" }}>
            {notification}
          </div>
        )}
        <form style={{ marginBottom: "20px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{ display: "flex", gap: "20px" }}
              className="flex md:flex-row flex-col"
            >
              <div style={formGroupStyle}>
                <label style={labelStyle}>Name</label>
                <input
                  placeholder={errors.name || "Enter Name"}
                  value={name}
                  style={{
                    ...inputStyle,
                    borderColor: errors.name ? "red" : "initial",
                    color: errors.name ? "red" : "black",
                  }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Email</label>
                <input
                  placeholder={errors.email || "Enter Email"}
                  type="email"
                  value={email}
                  style={{
                    ...inputStyle,
                    borderColor: errors.email ? "red" : "initial",
                    color: errors.email ? "red" : "black",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Contact Number</label>
                <input
                  placeholder={errors.phone || "Enter Contact Number"}
                  value={phone}
                  style={{
                    ...inputStyle,
                    borderColor: errors.phone ? "red" : "initial",
                    color: errors.phone ? "red" : "black",
                  }}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Description</label>
                <textarea
                  placeholder={errors.description || "Enter Description"}
                  value={description}
                  style={{
                    ...inputStyle,
                    height: "100px",
                    borderColor: errors.description ? "red" : "initial",
                    color: errors.description ? "red" : "black",
                  }}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="flex pt-5" style={{ gap: "20px" }}>
          <Button
            className="lg:flex cursor-pointer"
            onClick={onSubmit}
            linkButton
          >
            Submit
          </Button>
          <Button
            className="lg:flex cursor-pointer"
            onClick={onClose}
            linkButton
            white
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
