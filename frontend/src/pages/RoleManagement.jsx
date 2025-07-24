import React, { useEffect, useState } from "react";
import styles from "../styles/RoleManagement.module.css";
import profileImg from "../assets/logo.jpg";

export default function RoleManagement() {
  const [activeTab, setActiveTab] = useState("home");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("❌ 获取用户失败:", err));
  }, []);

  return (
    <div className={styles.container}>
      {/* 左侧导航栏 */}
      <aside className={styles.sidebar}>
        <div
          className={`${styles.navItem} ${activeTab === "home" ? styles.active : ""}`}
          onClick={() => setActiveTab("home")}
        >
          <i className={`fas fa-house ${styles.navIcon}`}></i>
          <span>Home</span>
        </div>
        <div
          className={`${styles.navItem} ${activeTab === "users" ? styles.active : ""}`}
          onClick={() => setActiveTab("users")}
        >
          <i className={`fas fa-users ${styles.navIcon}`}></i>
          <span>User List</span>
        </div>
        <div
          className={styles.navItem}
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          <i className={`fas fa-right-from-bracket ${styles.navIcon}`}></i>
          <span>Logout</span>
        </div>
      </aside>

      {/* 右侧主区域 */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div className={styles.header}>Welcome, admin!</div>

        {activeTab === "home" && (
          <section className={styles.home}>
            <img src={profileImg} alt="HomePage" style={{ width: "150px" }} />
            <h1 style={{ fontSize: 32, fontWeight: 700 }}>
              Welcome to your workspace!
            </h1>
            <p style={{ fontSize: 18, color: "#555" }}>
              Manage users efficiently.
            </p>
          </section>
        )}

        {activeTab === "users" && (
          <section className={styles.roleWrapper}>
            <div className={styles.roleHeader}>
              <input
                type="text"
                placeholder="Search by username..."
                className={styles.roleHeaderInput}
              />
              <button className={styles.roleHeaderButton}>＋ Add User</button>
            </div>

            <div className={styles.tableWrapper}>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Email</th>
      <th>Phone</th>
      <th style={{ width: 150 }}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map((u) => (
      <tr key={u.id}>  {/* ✅ key 保留，用于 React 识别 */}
        <td>{u.name}</td>
        <td>{u.role}</td>
        <td>{u.email}</td>
        <td>{u.phone}</td>
        <td>
          <span className={`${styles.actionBtn} ${styles.edit}`}>
            Edit
          </span>
          <span className={`${styles.actionBtn} ${styles.del}`}>
            Delete
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>

</div>

          </section>
        )}
      </main>
    </div>
  );
}
