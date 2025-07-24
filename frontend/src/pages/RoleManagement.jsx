import React, { useEffect, useState } from "react";

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
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif;}
        html,body{width:100vw;height:100vh;background:#e3f2fd;overflow:hidden;}
        .container{display:flex;width:100vw;height:100vh;background:#fff;overflow:hidden;}
        .sidebar{width:165px;background:#f5f8fe;border-right:1px solid #e0e0e0;padding:20px 10px;display:flex;flex-direction:column;gap:25px;}
        .nav-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;cursor:pointer;color:#1b1b1b;font-size:14px;}
        .nav-item:hover{background:#e3f2fd;}
        .nav-item.active{background:#e3f2fd;color:#1565c0;font-weight:600;}
        .nav-icon{font-size:16px;}
        .header{height:48px;border-bottom:1px solid #eee;display:flex;justify-content:flex-end;align-items:center;padding:0 24px;font-size:14px;font-weight:600;}
        .home{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;}
        .home img{max-width:300px;width:45%;min-width:200px;}
        .role-wrapper{flex:1;padding:20px;background:#e3f2fd;display:flex;flex-direction:column;overflow:hidden;}
        .role-header{display:flex;gap:8px;padding-bottom:10px;}
        .role-header input[type=text]{flex:1;max-width:260px;padding:8px 10px;border:1px solid #ccc;border-radius:5px;font-size:14px;}
        .role-header button{padding:8px 15px;border:none;border-radius:5px;background:#88abda;color:#fff;cursor:pointer;}
        .role-header button:hover{opacity:.8;background:#90caf9!important;}
        .table-wrapper{border:4px solid #88abda;background:#fff;flex:1;overflow-y:auto;}
        table{width:100%;border-collapse:collapse;table-layout:fixed;}
        th,td{padding:10px;text-align:left;border-bottom:1px solid #ddd;font-size:14px;word-break:break-word;}
        thead{background:rgba(211,211,211,1);}
        thead th{border-right:2.5px solid #555;}
        thead th:last-child,tbody td:last-child{border-right:none;}
        tbody{background:#f5f5f5;}
        tbody tr:hover{background:rgba(21,101,192,.15);cursor:pointer;}
        .action-btn{padding:4px 10px;border-radius:4px;font-size:12px;color:#fff;margin-right:6px;cursor:pointer;}
        .edit{background:#42a5f5;}
        .del{background:#ef5350;}
        .edit:hover{background:#64b5f6;}
        .del:hover{background:#f0625d;}
      `}</style>

      <div className="container">
        {/* 左侧导航栏 */}
        <aside className="sidebar">
  <div className={`nav-item ${activeTab === "home" ? "active" : ""}`} onClick={() => setActiveTab("home")}>
    <i className="fas fa-house nav-icon"></i>
    <span>Home</span>
  </div>
  <div className={`nav-item ${activeTab === "users" ? "active" : ""}`} onClick={() => setActiveTab("users")}>
    <i className="fas fa-users nav-icon"></i>
    <span>User List</span>
  </div>
  <div className="nav-item" onClick={() => {
    localStorage.clear();
    window.location.href = "/";
  }}>
    <i className="fas fa-right-from-bracket nav-icon"></i>
    <span>Logout</span>
  </div>
</aside>


        {/* 右侧主区域 */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div className="header">Welcome, admin!</div>

          {activeTab === "home" && (
            <section className="home">
              <img src="https://i.imgur.com/3yAfYbU.png" alt="Mascot" />
              <h1 style={{ fontSize: 32, fontWeight: 700 }}>
                Welcome to your workspace!
              </h1>
              <p style={{ fontSize: 18, color: "#555" }}>
                Manage users efficiently.
              </p>
            </section>
          )}

          {activeTab === "users" && (
            <section className="role-wrapper">
              <div className="role-header">
                <input type="text" placeholder="Search by username..." />
                <button>＋ Add User</button>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: 60 }}>ID</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th style={{ width: 150 }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                        <td>{u.role}</td>
                        <td>
                          <span className="action-btn edit">Edit</span>
                          <span className="action-btn del">Delete</span>
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
    </>
  );
}
