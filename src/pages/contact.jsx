import { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSuccess(true);

      console.log(formData);

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });

      setTimeout(() => setSuccess(false), 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Reach Out To Me</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span>{errors.phone}</span>}
            </div>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span>{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>

          {success && <p className="success-msg">Message Sent Successfully 🚀</p>}

        </form>
      </div>

<br>
</br>
      <div className="social-links">

  <h3>Connect With Me In</h3>

  <a
    href="https://www.linkedin.com/in/varsha-kodati"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/varshakodati"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
  >
    GitHub
  </a>
</div>

    </section>
  );
};

export default Contact;
