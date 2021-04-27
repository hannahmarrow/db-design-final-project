-- MySQL dump 10.13  Distrib 8.0.23, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: project
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(45) DEFAULT NULL,
  `created` date NOT NULL,
  `updated` date DEFAULT NULL,
  `rating` int NOT NULL,
  `book_id` int DEFAULT NULL,
  `reviewer_id` int DEFAULT NULL,
  `book_id_id` int DEFAULT NULL,
  `reviewer_id_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `book_id_idx` (`book_id`),
  KEY `reviewer_idx` (`reviewer_id`),
  KEY `FKmie2mss7wx8kcn4yg4vfwp2lb` (`book_id_id`),
  KEY `FKdykng65amx9rc8x9sfyqib0io` (`reviewer_id_id`),
  CONSTRAINT `book` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `FKdykng65amx9rc8x9sfyqib0io` FOREIGN KEY (`reviewer_id_id`) REFERENCES `students` (`id`),
  CONSTRAINT `FKmie2mss7wx8kcn4yg4vfwp2lb` FOREIGN KEY (`book_id_id`) REFERENCES `books` (`id`),
  CONSTRAINT `reviewer` FOREIGN KEY (`reviewer_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (15,'good','2021-02-21','2021-04-23',4,2,1,2,1),(17,'ok!','2021-04-30','2021-04-24',3,3,2,3,3),(19,'great','2021-04-21','2021-04-26',5,NULL,NULL,1,2);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-26 11:37:54
