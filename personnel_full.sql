-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: personnel
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` enum('clinician','lab_technician') NOT NULL,
  `description` text,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` bigint DEFAULT NULL,
  `level` int DEFAULT '1',
  `default_permission_set` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'clinician','Dental clinician responsible for patient diagnosis and treatment','2025-07-29 17:51:00',NULL,1,NULL),(2,'lab_technician','Lab technician responsible for dental model processing','2025-07-29 17:51:00',NULL,1,NULL),(3,'clinician','Handles clinical tasks','2025-07-29 17:51:00',NULL,1,NULL),(4,'clinician','Handles clinical tasks','2025-07-29 17:51:00',NULL,1,NULL),(5,'clinician','Handles clinical tasks','2025-07-29 17:51:00',NULL,1,NULL),(6,'clinician','Handles clinical tasks','2025-07-29 17:51:00',NULL,1,NULL),(7,'clinician','Handles clinical tasks','2025-07-29 17:51:00',NULL,1,NULL),(8,'clinician','Handles clinical tasks','2025-07-29 17:51:00',NULL,1,NULL),(9,'clinician','Handles clinical tasks','2025-07-29 17:51:00',NULL,1,NULL),(10,'clinician','Handles clinical tasks','2025-07-29 17:51:00',NULL,1,NULL),(11,'clinician','Handles clinical tasks','2025-07-29 17:51:00',NULL,1,NULL),(12,'clinician','Handles clinical tasks','2025-07-30 12:53:05',NULL,1,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  `assigned_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `assigned_by` bigint DEFAULT NULL,
  `status` enum('active','revoked','pending') DEFAULT 'active',
  `revoked_at` datetime DEFAULT NULL,
  `notes` text,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (3,1,'2025-07-24 11:53:27',NULL,'active',NULL,NULL),(4,2,'2025-07-24 11:53:27',NULL,'active',NULL,NULL),(5,1,'2025-07-24 11:53:27',NULL,'active',NULL,NULL),(6,2,'2025-07-24 11:53:27',NULL,'active',NULL,NULL),(7,1,'2025-07-24 11:53:27',NULL,'active',NULL,NULL),(8,2,'2025-07-24 11:53:27',NULL,'active',NULL,NULL),(9,1,'2025-07-24 11:53:27',NULL,'active',NULL,NULL),(10,2,'2025-07-24 11:53:27',NULL,'active',NULL,NULL),(11,1,'2025-07-24 11:53:55',NULL,'active',NULL,NULL),(12,2,'2025-07-24 11:53:55',NULL,'active',NULL,NULL),(13,1,'2025-07-24 11:53:55',NULL,'active',NULL,NULL),(14,2,'2025-07-24 11:53:55',NULL,'active',NULL,NULL),(15,1,'2025-07-24 11:53:55',NULL,'active',NULL,NULL),(16,2,'2025-07-24 11:53:55',NULL,'active',NULL,NULL),(17,1,'2025-07-24 11:53:55',NULL,'active',NULL,NULL),(18,2,'2025-07-24 11:53:55',NULL,'active',NULL,NULL),(19,1,'2025-07-24 11:53:55',NULL,'active',NULL,NULL),(20,2,'2025-07-24 11:53:55',NULL,'active',NULL,NULL),(21,1,'2025-07-24 11:54:10',NULL,'active',NULL,NULL),(22,2,'2025-07-24 11:54:10',NULL,'active',NULL,NULL),(23,1,'2025-07-24 11:54:10',NULL,'active',NULL,NULL),(24,2,'2025-07-24 11:54:10',NULL,'active',NULL,NULL),(25,1,'2025-07-24 11:54:10',NULL,'active',NULL,NULL),(26,2,'2025-07-24 11:54:10',NULL,'active',NULL,NULL),(27,1,'2025-07-24 11:54:10',NULL,'active',NULL,NULL),(28,2,'2025-07-24 11:54:10',NULL,'active',NULL,NULL),(29,1,'2025-07-24 11:54:10',NULL,'active',NULL,NULL),(30,2,'2025-07-24 11:54:10',NULL,'active',NULL,NULL),(31,1,'2025-07-24 11:54:23',NULL,'active',NULL,NULL),(32,2,'2025-07-24 11:54:23',NULL,'active',NULL,NULL),(33,1,'2025-07-24 11:54:23',NULL,'active',NULL,NULL),(34,2,'2025-07-24 11:54:23',NULL,'active',NULL,NULL),(35,1,'2025-07-24 11:54:23',NULL,'active',NULL,NULL),(36,2,'2025-07-24 11:54:23',NULL,'active',NULL,NULL),(37,1,'2025-07-24 11:54:23',NULL,'active',NULL,NULL),(38,2,'2025-07-24 11:54:23',NULL,'active',NULL,NULL),(39,1,'2025-07-24 11:54:23',NULL,'active',NULL,NULL),(40,2,'2025-07-24 11:54:23',NULL,'active',NULL,NULL),(41,1,'2025-07-24 11:54:55',NULL,'active',NULL,NULL),(42,2,'2025-07-24 11:54:55',NULL,'active',NULL,NULL),(43,1,'2025-07-24 11:54:55',NULL,'active',NULL,NULL),(44,2,'2025-07-24 11:54:55',NULL,'active',NULL,NULL),(45,1,'2025-07-24 11:54:55',NULL,'active',NULL,NULL),(46,2,'2025-07-24 11:54:55',NULL,'active',NULL,NULL),(47,1,'2025-07-24 11:54:55',NULL,'active',NULL,NULL),(48,2,'2025-07-24 11:54:55',NULL,'active',NULL,NULL),(49,1,'2025-07-24 11:54:55',NULL,'active',NULL,NULL),(50,2,'2025-07-24 11:54:55',NULL,'active',NULL,NULL),(51,2,'2025-07-24 11:55:11',NULL,'active',NULL,NULL),(52,1,'2025-07-24 11:55:11',NULL,'active',NULL,NULL),(53,2,'2025-07-24 11:55:11',NULL,'active',NULL,NULL),(54,1,'2025-07-24 11:55:11',NULL,'active',NULL,NULL),(55,2,'2025-07-24 11:55:11',NULL,'active',NULL,NULL),(56,1,'2025-07-24 11:55:11',NULL,'active',NULL,NULL),(57,2,'2025-07-24 11:55:11',NULL,'active',NULL,NULL),(58,1,'2025-07-24 11:55:11',NULL,'active',NULL,NULL),(59,2,'2025-07-24 11:55:11',NULL,'active',NULL,NULL),(60,1,'2025-07-24 11:55:11',NULL,'active',NULL,NULL),(61,2,'2025-07-24 11:55:28',NULL,'active',NULL,NULL),(62,1,'2025-07-24 11:55:28',NULL,'active',NULL,NULL),(63,2,'2025-07-24 11:55:28',NULL,'active',NULL,NULL),(64,1,'2025-07-24 11:55:28',NULL,'active',NULL,NULL),(65,2,'2025-07-24 11:55:28',NULL,'active',NULL,NULL),(66,1,'2025-07-24 11:55:28',NULL,'active',NULL,NULL),(67,2,'2025-07-24 11:55:28',NULL,'active',NULL,NULL),(68,1,'2025-07-24 11:55:28',NULL,'active',NULL,NULL),(69,2,'2025-07-24 11:55:28',NULL,'active',NULL,NULL),(70,1,'2025-07-24 11:55:28',NULL,'active',NULL,NULL),(71,1,'2025-07-24 11:55:39',NULL,'active',NULL,NULL),(72,2,'2025-07-24 11:55:39',NULL,'active',NULL,NULL),(73,1,'2025-07-24 11:55:39',NULL,'active',NULL,NULL),(74,2,'2025-07-24 11:55:39',NULL,'active',NULL,NULL),(75,1,'2025-07-24 11:55:39',NULL,'active',NULL,NULL),(76,2,'2025-07-24 11:55:39',NULL,'active',NULL,NULL),(77,1,'2025-07-24 11:55:39',NULL,'active',NULL,NULL),(78,2,'2025-07-24 11:55:39',NULL,'active',NULL,NULL),(79,1,'2025-07-24 11:55:39',NULL,'active',NULL,NULL),(80,2,'2025-07-24 11:55:39',NULL,'active',NULL,NULL),(81,2,'2025-07-24 11:55:57',NULL,'active',NULL,NULL),(82,1,'2025-07-24 11:55:57',NULL,'active',NULL,NULL),(83,2,'2025-07-24 11:55:57',NULL,'active',NULL,NULL),(84,1,'2025-07-24 11:55:57',NULL,'active',NULL,NULL),(85,2,'2025-07-24 11:55:57',NULL,'active',NULL,NULL),(86,1,'2025-07-24 11:55:57',NULL,'active',NULL,NULL),(87,2,'2025-07-24 11:55:57',NULL,'active',NULL,NULL),(89,2,'2025-07-24 11:55:57',NULL,'active',NULL,NULL),(90,1,'2025-07-24 11:55:57',NULL,'active',NULL,NULL),(1017,1,'2025-07-30 12:53:04',NULL,'active',NULL,NULL);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `location` varchar(50) DEFAULT 'ndcs_main',
  `status` enum('active','inactive','banned') DEFAULT 'active',
  `last_login_at` datetime DEFAULT NULL,
  `login_ip` varchar(45) DEFAULT NULL,
  `profile_img` text,
  `department` varchar(100) DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1618 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'Lim Wei Han','weihan.lim@gmail.com','+65-8123-2223','2025-07-24 11:53:25','ndcs_main','active',NULL,NULL,NULL,NULL,0),(4,'Tan Mei Ling','mei.ling@u.nus.edu','+65-9333-3399','2025-07-24 11:53:25','ndcs_main','active',NULL,NULL,NULL,NULL,0),(5,'Zhang Kai','kai.zhang@ndcs.sg','+65-9222-1888','2025-07-24 11:53:25','ndcs_main','active',NULL,NULL,NULL,NULL,0),(6,'Ng Pei Zhen','pei.zhen.ng@ndcs.sg','+65-9111-4477','2025-07-24 11:53:25','ndcs_main','active',NULL,NULL,NULL,NULL,0),(7,'Liu Fang','fang.liu@u.nus.edu','+65-9011-1122','2025-07-24 11:53:25','ndcs_main','active',NULL,NULL,NULL,NULL,0),(8,'Yeo Jing Yi','jingyi.yeo@ndcs.sg','+65-9543-1255','2025-07-24 11:53:25','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(9,'Wong Li Wei','liwei.wong@ndcs.sg','+65-9654-9876','2025-07-24 11:53:25','ndcs_main','active',NULL,NULL,NULL,NULL,0),(10,'Chen Rui','rui.chen@gmail.com','+65-9876-5432','2025-07-24 11:53:25','ndcs_main','active',NULL,NULL,NULL,NULL,0),(11,'Tan Hui Min','hui.min.tan@ndcs.sg','+65-9112-2345','2025-07-24 11:53:48','ndcs_main','active',NULL,NULL,NULL,NULL,0),(12,'Samuel Lee','samuel.lee@u.nus.edu','+65-9332-1123','2025-07-24 11:53:48','ndcs_main','active',NULL,NULL,NULL,NULL,0),(13,'Melissa Goh','melissa.goh@gmail.com','+65-9650-7788','2025-07-24 11:53:48','ndcs_main','active',NULL,NULL,NULL,NULL,0),(14,'Toh Jie Ling','jie.ling.toh@ndcs.sg','+65-9765-4422','2025-07-24 11:53:48','ndcs_main','active',NULL,NULL,NULL,NULL,0),(15,'Ang Wei Jie','wei.jie.ang@u.nus.edu','+65-9229-5511','2025-07-24 11:53:48','ndcs_main','active',NULL,NULL,NULL,NULL,0),(16,'Khoo Mei Wen','mei.wen.khoo@ndcs.sg','+65-9888-1234','2025-07-24 11:53:48','ndcs_main','active',NULL,NULL,NULL,NULL,0),(17,'Grace Tan','grace.tan@gmail.com','+65-9001-8833','2025-07-24 11:53:48','ndcs_main','active',NULL,NULL,NULL,NULL,0),(18,'Lim Jia Hao','jia.hao.lim@ndcs.sg','+65-9120-3456','2025-07-24 11:53:48','ndcs_main','active',NULL,NULL,NULL,NULL,0),(19,'Ong Yu Xuan','yu.xuan.ong@u.nus.edu','+65-9012-6789','2025-07-24 11:53:48','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(20,'Chia Jun Jie','jun.jie.chia@ndcs.sg','+65-9555-1122','2025-07-24 11:53:48','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(21,'Lim En Qi','en.qi.lim@ndcs.sg','+65-9123-9988','2025-07-24 11:54:05','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(22,'Tan Boon Kiat','boon.kiat.tan@u.nus.edu','+65-9321-5566','2025-07-24 11:54:05','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(23,'Sim Wei Ting','wei.ting.sim@gmail.com','+65-9112-4567','2025-07-24 11:54:05','ndcs_main','active',NULL,NULL,NULL,NULL,0),(24,'Chee Hui Ling','hui.ling.chee@ndcs.sg','+65-9333-2221','2025-07-24 11:54:05','ndcs_main','active',NULL,NULL,NULL,NULL,0),(25,'Ng Jin Kai','jin.kai.ng@ndcs.sg','+65-9222-7774','2025-07-24 11:54:05','ndcs_main','active',NULL,NULL,NULL,NULL,0),(26,'Fong Zhi Xin','zhi.xin.fong@u.nus.edu','+65-9556-3344','2025-07-24 11:54:05','ndcs_main','active',NULL,NULL,NULL,NULL,0),(27,'Leong Mei Yee','mei.yee.leong@gmail.com','+65-9765-9988','2025-07-24 11:54:05','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(28,'Tan Wei Sheng','wei.sheng.tan@ndcs.sg','+65-9888-6677','2025-07-24 11:54:05','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(29,'Soh Yu Ting','yu.ting.soh@u.nus.edu','+65-9011-2233','2025-07-24 11:54:05','ndcs_main','active',NULL,NULL,NULL,NULL,0),(30,'Goh Zheng Kai','zheng.kai.goh@ndcs.sg','+65-9111-9988','2025-07-24 11:54:05','ndcs_main','active',NULL,NULL,NULL,NULL,0),(31,'Low Yi Ning','yi.ning.low@ndcs.sg','+65-9345-2211','2025-07-24 11:54:20','ndcs_main','active',NULL,NULL,NULL,NULL,0),(32,'Tan Zhen Hao','zhen.hao.tan@u.nus.edu','+65-9567-8800','2025-07-24 11:54:20','ndcs_main','active',NULL,NULL,NULL,NULL,0),(33,'Koh Shi Min','shi.min.koh@gmail.com','+65-9456-7890','2025-07-24 11:54:20','ndcs_main','active',NULL,NULL,NULL,NULL,0),(34,'Chia Li Fang','li.fang.chia@ndcs.sg','+65-9765-1112','2025-07-24 11:54:20','ndcs_main','active',NULL,NULL,NULL,NULL,0),(35,'Lim Yong Kiat','yong.kiat.lim@ndcs.sg','+65-9655-0022','2025-07-24 11:54:20','ndcs_main','active',NULL,NULL,NULL,NULL,0),(36,'Tay Wen Jie','wen.jie.tay@u.nus.edu','+65-9123-3030','2025-07-24 11:54:20','ndcs_main','active',NULL,NULL,NULL,NULL,0),(37,'Tan Shu Ting','shu.ting.tan@gmail.com','+65-9234-4040','2025-07-24 11:54:20','ndcs_main','active',NULL,NULL,NULL,NULL,0),(38,'Lai Jing Wen','jing.wen.lai@ndcs.sg','+65-9345-5050','2025-07-24 11:54:20','ndcs_main','active',NULL,NULL,NULL,NULL,0),(39,'Chan Jun Yi','jun.yi.chan@u.nus.edu','+65-9456-6060','2025-07-24 11:54:20','ndcs_main','active',NULL,NULL,NULL,NULL,0),(40,'Toh Xin Hui','xin.hui.toh@ndcs.sg','+65-9567-7070','2025-07-24 11:54:20','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(41,'Arun Raj','arun.raj@ndcs.sg','+65-9123-7878','2025-07-24 11:54:47','ndcs_main','active',NULL,NULL,NULL,NULL,0),(42,'Priya Nair','priya.nair@gmail.com','+65-9234-8765','2025-07-24 11:54:47','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(43,'Muhammad Hafiz','hafiz.muhammad@u.nus.edu','+65-9345-2222','2025-07-24 11:54:47','ndcs_main','active',NULL,NULL,NULL,NULL,0),(44,'Suresh Kumar','suresh.kumar@ndcs.sg','+65-9456-3333','2025-07-24 11:54:47','ndcs_main','active',NULL,NULL,NULL,NULL,0),(45,'Nurul Aini','nurul.aini@u.nus.edu','+65-9567-4444','2025-07-24 11:54:47','ndcs_main','active',NULL,NULL,NULL,NULL,0),(46,'Ahmad Faiz','faiz.ahmad@gmail.com','+65-9678-5555','2025-07-24 11:54:47','ndcs_main','active',NULL,NULL,NULL,NULL,0),(47,'Gurpreet Singh','gurpreet.singh@ndcs.sg','+65-9789-6666','2025-07-24 11:54:47','ndcs_main','active',NULL,NULL,NULL,NULL,0),(48,'Lim Zi Hao','zi.hao.lim@gmail.com','+65-9890-7777','2025-07-24 11:54:47','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(49,'Tan Hui Yi','hui.yi.tan@ndcs.sg','+65-9012-8888','2025-07-24 11:54:47','ndcs_main','active',NULL,NULL,NULL,NULL,0),(50,'Kavita Menon','kavita.menon@u.nus.edu','+65-9123-9999','2025-07-24 11:54:47','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(51,'Ramesh Iyer','ramesh.iyer@gmail.com','+65-9112-1111','2025-07-24 11:55:04','ndcs_main','active',NULL,NULL,NULL,NULL,0),(52,'Deepa Krishnan','deepa.krishnan@u.nus.edu','+65-9223-2222','2025-07-24 11:55:04','ndcs_main','active',NULL,NULL,NULL,NULL,0),(53,'Faridah Binte Ahmad','faridah.ahmad@ndcs.sg','+65-9334-3333','2025-07-24 11:55:04','ndcs_main','active',NULL,NULL,NULL,NULL,0),(54,'Azlan Bin Ramli','azlan.ramli@gmail.com','+65-9445-4444','2025-07-24 11:55:04','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(55,'Lee Huiwen','huiwen.lee@u.nus.edu','+65-9556-5555','2025-07-24 11:55:04','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(56,'Tan Xinyuan','xinyuan.tan@ndcs.sg','+65-9667-6666','2025-07-24 11:55:04','ndcs_main','active',NULL,NULL,NULL,NULL,0),(57,'Aisha Rahman','aisha.rahman@gmail.com','+65-9778-7777','2025-07-24 11:55:04','ndcs_main','active',NULL,NULL,NULL,NULL,0),(58,'Gopal Srinivasan','gopal.srini@ndcs.sg','+65-9889-8888','2025-07-24 11:55:04','ndcs_main','active',NULL,NULL,NULL,NULL,0),(59,'Ng Wei Jie','weijie.ng@u.nus.edu','+65-9990-9999','2025-07-24 11:55:04','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(60,'Ho Xuan Yi','xuan.yi.ho@gmail.com','+65-9001-1234','2025-07-24 11:55:04','ndcs_main','active',NULL,NULL,NULL,NULL,0),(61,'Putri Santoso','putri.santoso@ndcs.sg','+65-9102-4444','2025-07-24 11:55:26','ndcs_main','active',NULL,NULL,NULL,NULL,0),(62,'Nguyen Minh Anh','minh.anh@u.nus.edu','+65-9202-5555','2025-07-24 11:55:26','ndcs_main','active',NULL,NULL,NULL,NULL,0),(63,'Maria Lopez','maria.lopez@gmail.com','+65-9302-6666','2025-07-24 11:55:26','ndcs_main','active',NULL,NULL,NULL,NULL,0),(64,'Wong Yu Heng','yu.heng.wong@ndcs.sg','+65-9402-7777','2025-07-24 11:55:26','ndcs_main','active',NULL,NULL,NULL,NULL,0),(65,'Teo Zhi Jie','zhi.jie.teo@u.nus.edu','+65-9502-8888','2025-07-24 11:55:26','ndcs_main','active',NULL,NULL,NULL,NULL,0),(66,'Nurul Huda','nurul.huda@gmail.com','+65-9602-9999','2025-07-24 11:55:26','ndcs_main','active',NULL,NULL,NULL,NULL,0),(67,'Aung Kyaw','aung.kyaw@ndcs.sg','+65-9702-1111','2025-07-24 11:55:26','ndcs_main','active',NULL,NULL,NULL,NULL,0),(68,'John Tan','john.tan@gmail.com','+65-9802-2222','2025-07-24 11:55:26','ndcs_main','active',NULL,NULL,NULL,NULL,0),(69,'Priscilla Goh','priscilla.goh@u.nus.edu','+65-9902-3333','2025-07-24 11:55:26','ndcs_main','active',NULL,NULL,NULL,NULL,0),(70,'Lim Yew Meng','yew.meng.lim@ndcs.sg','+65-9002-4444','2025-07-24 11:55:26','ndcs_main','active',NULL,NULL,NULL,NULL,0),(71,'Sharifah Aini','sharifah.aini@ndcs.sg','+65-9013-1111','2025-07-24 11:55:36','ndcs_main','active',NULL,NULL,NULL,NULL,0),(72,'Somsak Thongchai','somsak.thongchai@gmail.com','+65-9113-2222','2025-07-24 11:55:36','ndcs_main','active',NULL,NULL,NULL,NULL,0),(73,'Darren Lee','darren.lee@u.nus.edu','+65-9213-3333','2025-07-24 11:55:36','ndcs_main','active',NULL,NULL,NULL,NULL,0),(74,'Nur Syafiqah','syafiqah.nur@ndcs.sg','+65-9313-4444','2025-07-24 11:55:36','ndcs_main','active',NULL,NULL,NULL,NULL,0),(75,'Jake Robinson','jake.robinson@gmail.com','+65-9413-5555','2025-07-24 11:55:36','ndcs_main','active',NULL,NULL,NULL,NULL,0),(76,'Lim Hui Yi','hui.yi.lim@ndcs.sg','+65-9513-6666','2025-07-24 11:55:36','ndcs_main','active',NULL,NULL,NULL,NULL,0),(77,'Amanda Yeo','amanda.yeo@u.nus.edu','+65-9613-7777','2025-07-24 11:55:36','ndcs_main','active',NULL,NULL,NULL,NULL,0),(78,'Mark Tan','mark.tan@gmail.com','+65-9713-8888','2025-07-24 11:55:36','ndcs_main','active',NULL,NULL,NULL,NULL,0),(79,'Ang Li Ting','li.ting.ang@ndcs.sg','+65-9813-9999','2025-07-24 11:55:36','ndcs_main','active',NULL,NULL,NULL,NULL,0),(80,'Jasmine Cheah','jasmine.cheah@u.nus.edu','+65-9913-0000','2025-07-24 11:55:36','ndcs_main','active',NULL,NULL,NULL,NULL,0),(81,'Indah Rahmawati','indah.rahmawati@ndcs.sg','+65-9014-1212','2025-07-24 11:55:54','ndcs_main','active',NULL,NULL,NULL,NULL,0),(82,'Aye Chan Thar','aye.chan@u.nus.edu','+65-9114-2323','2025-07-24 11:55:54','ndcs_main','active',NULL,NULL,NULL,NULL,0),(83,'Jason Smith','jason.smith@gmail.com','+65-9214-3434','2025-07-24 11:55:54','ndcs_main','active',NULL,NULL,NULL,NULL,0),(84,'Ng Wei Lin','wei.lin.ng@ndcs.sg','+65-9314-4545','2025-07-24 11:55:54','ndcs_main','active',NULL,NULL,NULL,NULL,0),(85,'Alicia Tan','alicia.tan@u.nus.edu','+65-9414-5656','2025-07-24 11:55:54','ndcs_main','active',NULL,NULL,NULL,NULL,0),(86,'Henry Wu','henry.wu@gmail.com','+65-9514-6767','2025-07-24 11:55:54','ndcs_hpb','active',NULL,NULL,NULL,NULL,0),(87,'Siti Hajar','siti.hajar@ndcs.sg','+65-9614-7878','2025-07-24 11:55:54','ndcs_main','active',NULL,NULL,NULL,NULL,0),(89,'Sarah Koh','sarah.koh@ndcs.sg','+65-9814-9090','2025-07-24 11:55:54','ndcs_main','active',NULL,NULL,NULL,NULL,0),(90,'James Liew','james.liew@gmail.com','+65-9914-1122','2025-07-24 11:55:54','ndcs_main','active',NULL,NULL,NULL,NULL,0),(1017,'Alice','alice@example.com','12345678','2025-07-30 12:53:04','Clinic A','active',NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-31 11:34:41
