// src/pages/RoleManagement.jsx
import React, { useState } from "react";

export default function RoleManagement() {
  /* ---------- 左侧标签切换 ---------- */
  const [activeTab, setActiveTab] = useState("roles"); // 'roles' | 'home'

  /* ---------- 临时静态数据（到时换成后端返回） ---------- */
  const staticRoles = [
    { id: 1, name: "Admin", description: "Full system access" },
    { id: 2, name: "Doctor", description: "Manage cases & annotations" },
    {
      id: 3,
      name: "Technician",
      description: "Upload STL and generate reports",
    },
  ];

  return (
    <>
      {/* ================ 内联 CSS ================ */}
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif;}
        html,body{width:100vw;height:100vh;background:#e3f2fd;overflow:hidden;}

        /* ---- 整体 ---- */
        .container{display:flex;width:100vw;height:100vh;background:#fff;overflow:hidden;}

        /* ---- 侧边栏 ---- */
        .sidebar{width:165px;background:#f5f8fe;border-right:1px solid #e0e0e0;
                 padding:20px 10px;display:flex;flex-direction:column;gap:25px;}
        .nav-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;
                  cursor:pointer;color:#1b1b1b;font-size:14px;}
        .nav-item:hover{background:#e3f2fd;}
        .nav-item.active{background:#e3f2fd;color:#1565c0;font-weight:600;}
        .nav-icon{font-size:16px;}

        /* ---- 顶部欢迎条 ---- */
        .header{height:48px;border-bottom:1px solid #eee;display:flex;
                justify-content:flex-end;align-items:center;padding:0 24px;font-size:14px;font-weight:600;}

        /* ---- Home 视图 ---- */
        .home{flex:1;display:flex;flex-direction:column;
              align-items:center;justify-content:center;gap:20px;}
        .home img{max-width:300px;width:45%;min-width:200px;}

        /* ---- Role List 视图 ---- */
        .role-wrapper{flex:1;padding:20px;background:#e3f2fd;display:flex;flex-direction:column;overflow:hidden;}
        .role-header{display:flex;gap:8px;padding-bottom:10px;}
        .role-header input[type=text]{flex:1;max-width:260px;padding:8px 10px;
                                      border:1px solid #ccc;border-radius:5px;font-size:14px;}
        .role-header button{padding:8px 15px;border:none;border-radius:5px;
                            background:#88abda;color:#fff;cursor:pointer;}
        .role-header button:hover{opacity:.8;background:#90caf9!important;}

        .table-wrapper{border:4px solid #88abda;background:#fff;flex:1;overflow-y:auto;}
        table{width:100%;border-collapse:collapse;table-layout:fixed;}
        th,td{padding:10px;text-align:left;border-bottom:1px solid #ddd;font-size:14px;word-break:break-all;}
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

      {/* ================ 页面结构 ================ */}
      <div className="container">
        {/* 侧边栏 */}
        <aside className="sidebar">
          <div
            className={`nav-item ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            <span className="nav-icon">🏠</span>
            <span>Home</span>
          </div>
          <div
            className={`nav-item ${activeTab === "roles" ? "active" : ""}`}
            onClick={() => setActiveTab("roles")}
          >
            <span className="nav-icon">📁</span>
            <span>Role List</span>
          </div>

          <div
            className="nav-item"
            onClick={() => {
              localStorage.clear(); // 或 localStorage.removeItem("loggedInUser");
              window.location.href = "/"; // 假设登录页是 /
            }}
          >
            <span className="nav-icon">⏻</span>
            <span>Logout</span>
          </div>
        </aside>

        {/* 右侧主区域 */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* 顶部欢迎条 */}
          <div className="header">Welcome, admin!</div>

          {/* -------- Home -------- */}
          {activeTab === "home" && (
            <section className="home">
              <img src="https://i.imgur.com/EradGNc.png" alt="Mascot" />
              <h1 style={{ fontSize: 32, fontWeight: 700 }}>
                Welcome to your workspace!
              </h1>
              <p style={{ fontSize: 18, color: "#555" }}>
                Manage roles efficiently and effectively.
              </p>
            </section>
          )}

          {/* -------- Role List -------- */}
          {activeTab === "roles" && (
            <section className="role-wrapper">
              {/* 顶部搜索 / 新增按钮，仅示范布局 */}
              <div className="role-header">
                <input type="text" placeholder="Search by role name..." />
                <button>＋ Add Role</button>
              </div>

              {/* 表格 */}
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: 60 }}>ID</th>
                      <th style={{ width: "25%" }}>Role Name</th>
                      <th>Description</th>
                      <th style={{ width: 150 }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staticRoles.map((r) => (
                      <tr key={r.id}>
                        <td>{r.id}</td>
                        <td>{r.name}</td>
                        <td>{r.description}</td>
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
