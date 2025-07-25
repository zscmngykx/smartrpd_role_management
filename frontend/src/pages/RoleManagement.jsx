import React, { useEffect, useState } from "react";
import styles from "../styles/RoleManagement.module.css";
import profileImg from "../assets/logo.jpg";
import AddUserModal from "../components/AddUserModal";

export default function RoleManagement() {
  const [activeTab, setActiveTab] = useState("home");
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [showModal, setShowModal] = useState(false); // 控制弹窗

  const fetchUsers = () => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("❌ 获取用户失败:", err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = (newUser) => {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
      .then((res) => {
        if (res.ok) {
          alert("The user has been successfully added!");
          setShowModal(false);
          fetchUsers();
        } else {
          alert("❌ 添加失败");
        }
      })
      .catch((err) => {
        console.error("❌ 添加用户出错:", err);
        alert("❌ 添加失败");
      });
  };

  const filteredUsers = users.filter((user) => {
    const matchName = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchRole = roleFilter === "" || user.role === roleFilter;
    return matchName && matchRole;
  });

  return (
    <div className={styles.container}>
      {/* 左侧导航栏 */}
      <aside className={styles.sidebar}>
        <div
          className={`${styles.navItem} ${
            activeTab === "home" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("home")}
        >
          <i className={`fas fa-house ${styles.navIcon}`}></i>
          <span>Home</span>
        </div>
        <div
          className={`${styles.navItem} ${
            activeTab === "users" ? styles.active : ""
          }`}
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <select
                className={styles.roleHeaderSelect}
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="">All Roles</option>
                <option value="clinician">Clinician</option>
                <option value="lab_technician">Lab Technician</option>
              </select>

              <button
                className={styles.roleHeaderButton}
                onClick={() => setShowModal(true)}
              >
                ＋ Add User
              </button>
            </div>

            <div className={styles.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th style={{ width: 150 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((u) => (
                    <tr key={u.id}>
                      <td>{u.name}</td>
                      <td>{u.role}</td>
                      <td>{u.location || "-"}</td>
                      <td>{u.email}</td>
                      <td>{u.phone}</td>
                      <td className={styles.actionCell}>
                        <div className={styles.iconGroup}>
                          <i className={`fas fa-pen ${styles.iconEdit}`}></i>
                          <i
                            className={`fas fa-trash ${styles.iconDelete}`}
                          ></i>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {showModal && (
          <AddUserModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
    </div>
  );
}
