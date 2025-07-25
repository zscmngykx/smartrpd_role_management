import React, { useState, useEffect } from "react";
import styles from "../styles/RoleManagement.module.css";

export default function EditUserModal({ onClose, onSubmit, user }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    location: ""
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        role: user.role || "",
        location: user.location || ""
      });
    }
  }, [user]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePhoneChange = (e) => {
    let val = e.target.value;
    const digits = val.replace(/\D/g, "");
    const local = digits.startsWith("65") ? digits.slice(2) : digits;
    const limited = local.slice(0, 8);
    const formatted = `+65-${limited.slice(0, 4)}${
      limited.length > 4 ? "-" + limited.slice(4) : ""
    }`;
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.role || !formData.location) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit({ ...formData, id: user.id });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Edit User</h2>

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone (e.g. +65-9876-5432)"
          value={formData.phone}
          onChange={handlePhoneChange}
        />

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="clinician">Clinician</option>
          <option value="lab_technician">Lab Technician</option>
        </select>

        <select name="location" value={formData.location} onChange={handleChange}>
          <option value="">Select Location</option>
          <option value="ndcs_main">ndcs_main</option>
          <option value="ndcs_hpb">ndcs_hpb</option>
        </select>

        <div className={styles.modalButtons}>
          <button onClick={handleSubmit}>Save Changes</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
