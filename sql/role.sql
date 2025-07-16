-- 删除旧表（防止重复）
DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS users;

-- 创建数据库
CREATE DATABASE IF NOT EXISTS personnel;
USE personnel;

-- ✅ 用户表
CREATE TABLE users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  phone VARCHAR(20),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ✅ 角色表
CREATE TABLE roles (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name ENUM('clinician', 'lab_technician') NOT NULL,
  description TEXT
);

-- ✅ 用户-角色关联表（多对多设计，当前每人只有一个角色）
CREATE TABLE user_roles (
  user_id BIGINT,
  role_id BIGINT,
  assigned_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- ✅ 插入角色数据
INSERT INTO roles (name, description) VALUES
('clinician', 'Dental clinician responsible for patient diagnosis and treatment'),
('lab_technician', 'Lab technician responsible for dental model processing');

-- ✅ 插入人员数据（真实风格，非真实数据）
INSERT INTO users (name, email, phone) VALUES
('Dawn Siow', 'dawn.siow@ndcs.sg', '+65-9123-0001'),
('Chong Xueting', 'xueting.chong@ndcs.sg', '+65-9123-0002'),
('Phang Zi Ying', 'zi.ying.phang@ndcs.sg', '+65-9123-0003'),
('Chen Nah Nah', 'nahnah.chen@ndcs.sg', '+65-9123-0004'),
('Na Yu', 'na.yu@ndcs.sg', '+65-9123-0005'),
('Goh Bee Tin', 'bee.tin.goh@ndcs.sg', '+65-9123-0006'),

('Ray Wong', 'ray.wong@ndcs.sg', '+65-9234-0001'),
('Fabio Leite', 'fabio.leite@ndcs.sg', '+65-9234-0002'),
('Yuling Khong', 'yuling.khong@ndcs.sg', '+65-9234-0003'),
('Christina Sim', 'christina.sim@ndcs.sg', '+65-9234-0004'),
('Bee Sian Lim', 'beesian.lim@ndcs.sg', '+65-9234-0005'),
('Koo Chieh Shen', 'koochieh.shen@ndcs.sg', '+65-9234-0006');

-- ✅ 分配角色（1-6 是医生，7-12 是技师）
INSERT INTO user_roles (user_id, role_id) VALUES
(1, 1), (2, 1), (3, 1), (4, 1), (5, 1), (6, 1),
(7, 2), (8, 2), (9, 2), (10, 2), (11, 2), (12, 2);
