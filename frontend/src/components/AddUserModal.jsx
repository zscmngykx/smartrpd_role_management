import React, { useState } from 'react';
import styles from '../styles/RoleManagement.module.css';

export default function AddUserModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.role || !formData.location) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Add New User</h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
  name="phone"
  placeholder="Phone (e.g. +65-9876-5432)"
  value={formData.phone}
  onChange={(e) => {
    let val = e.target.value;

    // 去掉非数字
    const digits = val.replace(/\D/g, "");

    // 确保以 +65 开头
    const local = digits.startsWith("65") ? digits.slice(2) : digits;

    // 限制最大 8 位数字
    const limited = local.slice(0, 8);

    // 插入中间的 -
    const formatted = `+65-${limited.slice(0, 4)}${limited.length > 4 ? "-" + limited.slice(4) : ""}`;

    setFormData({ ...formData, phone: formatted });
  }}
/>

        <select name="role" onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="clinician">Clinician</option>
          <option value="lab_technician">Lab Technician</option>
        </select>
        <select name="location" onChange={handleChange}>
          <option value="">Select Location</option>
          <option value="ndcs_main">ndcs_main</option>
          <option value="ndcs_hpb">ndcs_hpb</option>
        </select>
        <div className={styles.modalButtons}>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
