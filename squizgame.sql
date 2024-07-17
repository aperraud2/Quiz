-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: squiz
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `question_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `correct` blob NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (1,1,'Bubba Gump Shrimp Company','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(2,2,'3','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(3,2,'4','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(4,2,'6','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(5,2,'8','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(6,3,'True','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(7,3,'False','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(8,4,'True','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(9,4,'False','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(10,5,'True','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(11,5,'False','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(12,6,'True','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(13,6,'False','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(14,7,'True','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(15,7,'False','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(16,8,'True','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(17,8,'False','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(18,9,'True','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(19,9,'False','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(20,10,'True','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(21,10,'False','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(22,11,'True','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(23,11,'False','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(24,12,'True','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(25,12,'False','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(26,13,'True','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(27,13,'False','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(28,14,'True','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(29,14,'False','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(30,15,'True','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(31,15,'False','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(32,16,'François Mitterrand','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(33,16,'Valéry Giscard d\'Estaing','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(34,16,'Georges Pompidou','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(35,16,'Jacques Chirac','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(36,17,'Jimmy Carter','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(37,17,'Ronald Reagan','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(38,17,'Gerald Ford','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(39,17,'Lyndon B. Johnson','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(40,18,'United Kingdom','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(41,18,'France','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(42,18,'Netherlands','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(43,18,'United States','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(44,19,'Jessica Alba','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(45,19,'Justin Timberlake','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(46,19,'Pitbull','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(47,19,'Alicia Keys','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(48,20,'Juan Carlos I','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(49,20,'Felipe V','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(50,20,'Alfonso XIII','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(51,20,'Juan IV','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(52,21,'Fog lights','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(53,21,'Seat belt','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(54,21,'Child car seat','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(55,21,'Airbag','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(56,22,'Raging Bull','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(57,22,'Ordinary People','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(58,22,'The Elephant Man','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(59,22,'Coal Miner\'s Daughter','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(60,23,'Karlovy Vary –> Karlovy & Vary','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(61,23,'Frýdek-Místek –> Frýdek & Místek','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(62,23,'Jihlava –> Staré Hory & Helenín','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(63,23,'Velké Meziříčí –> Meziříčí & Karlov','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(64,24,'Jeseník','1','2024-07-17 05:03:56','2024-07-17 05:03:56'),(65,24,'Frýdek-Místek','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(66,24,'Františkovy Lázně','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(67,24,'Klatovy','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(68,25,'Trnava (okres Zlín)','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(69,25,'Košice (okres Kutná Hora)','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(70,25,'Žilina (okres Kladno)','0','2024-07-17 05:03:56','2024-07-17 05:03:56'),(71,25,'Nitra (okres Jablonec nad Nisou)','1','2024-07-17 05:03:56','2024-07-17 05:03:56');
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
INSERT INTO `cache` VALUES ('0aa29d9bd19e607c3bb9fd27ddc933d4','i:1;',1721038930),('0aa29d9bd19e607c3bb9fd27ddc933d4:timer','i:1721038930;',1721038930),('2b1c515f903f213c816f0cd321ca78f5','i:1;',1721199972),('2b1c515f903f213c816f0cd321ca78f5:timer','i:1721199972;',1721199972),('c6be2cf7c13d9a527ee2fe401bbae3c7','i:1;',1721042712),('c6be2cf7c13d9a527ee2fe401bbae3c7:timer','i:1721042712;',1721042712);
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Arts','2024-07-17 05:03:55','2024-07-17 05:03:55'),(2,'History','2024-07-17 05:03:55','2024-07-17 05:03:55'),(3,'Geography','2024-07-17 05:03:55','2024-07-17 05:03:55'),(4,'Science','2024-07-17 05:03:55','2024-07-17 05:03:55'),(5,'Sports','2024-07-17 05:03:55','2024-07-17 05:03:55'),(6,'Movies','2024-07-17 05:03:55','2024-07-17 05:03:55');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_quiz`
--

DROP TABLE IF EXISTS `category_quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_quiz` (
  `category_id` bigint(20) unsigned NOT NULL,
  `quiz_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_quiz`
--

LOCK TABLES `category_quiz` WRITE;
/*!40000 ALTER TABLE `category_quiz` DISABLE KEYS */;
INSERT INTO `category_quiz` VALUES (6,1,'2024-07-17 05:03:56','2024-07-17 05:03:56'),(3,2,'2024-07-17 05:03:56','2024-07-17 05:03:56'),(2,3,'2024-07-17 05:03:56','2024-07-17 05:03:56'),(2,4,'2024-07-17 05:03:56','2024-07-17 05:03:56'),(2,5,'2024-07-17 05:03:56','2024-07-17 05:03:56');
/*!40000 ALTER TABLE `category_quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `difficulty`
--

DROP TABLE IF EXISTS `difficulty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `difficulty` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `difficulty`
--

LOCK TABLES `difficulty` WRITE;
/*!40000 ALTER TABLE `difficulty` DISABLE KEYS */;
INSERT INTO `difficulty` VALUES (1,'Very Easy','2024-07-17 05:03:55','2024-07-17 05:03:55'),(2,'Easy','2024-07-17 05:03:55','2024-07-17 05:03:55'),(3,'Medium','2024-07-17 05:03:55','2024-07-17 05:03:55'),(4,'Hard','2024-07-17 05:03:55','2024-07-17 05:03:55'),(5,'Very Hard','2024-07-17 05:03:55','2024-07-17 05:03:55');
/*!40000 ALTER TABLE `difficulty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2024_07_05_123757_add_two_factor_columns_to_users_table',1),(5,'2024_07_09_085742_create_quiz_table',2),(6,'2024_07_09_085857_create_user_quiz_table',2),(7,'2024_07_09_085925_create_user_category_table',2),(8,'2024_07_09_085943_create_categories_table',2),(9,'2024_07_09_090007_create_category_quiz_table',2),(10,'2024_07_09_090050_create_difficulty_table',2),(11,'2024_07_09_090057_create_type_table',2),(12,'2024_07_09_090109_create_questions_table',2),(13,'2024_07_09_090117_create_answers_table',2),(14,'2024_07_09_092102_add_total_time_spent_to_users_table',2),(15,'2024_07_09_133658_add_timestamps_to_user_category_table',3),(16,'2024_07_09_133730_add_timestamps_to_category_quiz_table',3),(17,'2024_07_10_073817_create_personal_access_tokens_table',4),(18,'2024_07_11_075901_change_difficulty_in_quiz_table',5),(19,'2024_07_16_103541_add_image_to_quiz_table',6),(20,'2024_07_16_103954_add_image_to_quiz_table',7);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quiz_id` bigint(20) unsigned NOT NULL,
  `type` bigint(20) unsigned NOT NULL,
  `question` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,1,2,'In Forrest Gump, what is the name of Forrest Gump and Lt. Dan fishing company?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(2,1,1,'How many rules are there in the \"Fight Club\" from the eponymous movie?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(3,2,1,'The Death Valley, in the United States, is located in California.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(4,2,1,'Edinburgh is further west than Cardiff.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(5,2,1,'The northernmost point of Brazil is closer to ALL other countries in America than the southernmost point of Brazil.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(6,2,1,'The westernmost point of the contiguous USA is further north than the easternmost point.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(7,2,1,'Greece is entirely south of Canada.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(8,2,1,'Croatia shares a border with Italy.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(9,2,1,'Croatia shares a border with Montenegro.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(10,2,1,'Berlin is west of Prague.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(11,2,1,'Tunis is further north than South Korea.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(12,2,1,'Norway is further north, south, east, and west than Finland.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(13,2,1,'Without using any bridges, it is possible to walk from Denmark to Sweden.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(14,2,1,'Baku is below sea level.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(15,2,1,'Chongqing, the most populous city proper in the world, would be in the top 20 most populated countries if it were one.','2024-07-17 05:03:56','2024-07-17 05:03:56'),(16,4,1,'In France, the first round of the presidential election took place on April 26, 1981. Among all the candidates, 3 have been or will one day be elected French president.\n            Among these four Presidents of the French Republic, which one was not a candidate in 1981?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(17,4,1,'Who became the 40th President of the United States of America in 1981?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(18,4,1,'Belize and Antigua and Barbuda gained independence on September 21 and November 1, respectively.\n            But from which country?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(19,4,1,'Which of these celebrities born in 1981 is not from the US?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(20,4,1,'On February 23, there was an attempted military coup in Spain led by Colonel Antonio Tejero, who, along with his coup plotters, stormed the Spanish parliament and took the deputies hostage, all filmed by Spanish television.\n            The King of Spain, as head of the armed forces, personally intervenes by calling the garrison captains not to take part in the coup and plays a major role in the failure of the putsch.\n            But who is the King of Spain?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(21,4,1,'Which road safety device was marketed for the first time in Europe in 1981?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(22,4,1,'Which film won the Oscar for Best Picture that year?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(23,5,1,'Which Czech city was created by the German occupying forces on January 1, 1943, by merging two pre-existing towns?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(24,5,1,'Which of these cities was called Frývaldov until 1948?','2024-07-17 05:03:56','2024-07-17 05:03:56'),(25,5,1,'Which of these Czech cities does not exist?','2024-07-17 05:03:56','2024-07-17 05:03:56');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quiz` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `difficulty_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `attempts` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES (1,2,'Movies Quiz','Quiz about movies',NULL,'2024-07-17 05:03:55','2024-07-17 05:03:55','/images/moviequiz.jpg'),(2,3,'Geography - True or False','Test your knowledge of world geography with this true or false quiz ',NULL,'2024-07-17 05:03:55','2024-07-17 05:03:55','/images/quiz_geographytrueorfalse.png'),(3,2,'History Quiz','Quiz about history',NULL,'2024-07-17 05:03:55','2024-07-17 05:03:55','/images/historyquiz.jpg'),(4,4,'1981','How well do you know the events that took place in 1981?',NULL,'2024-07-17 05:03:55','2024-07-17 05:03:55','/images/1981quiz.JPG'),(5,4,'Česko','How well do you the Czech Republic?',NULL,'2024-07-17 05:03:56','2024-07-17 05:03:56','/images/quizczechia.JPG');
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('OPhM4n0xKuUhhJ2ayQTx9drQBnaPgaaSoVNtaUfO',NULL,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0','YTozOntzOjY6Il90b2tlbiI7czo0MDoic204NDZVR3BWNGU3eXpwRXhPTjNvNndGM1ZDemZ2dmgybEJpd21GYiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly93d3cuc3F1aXpnYW1lLnRlc3QvYXBpL3VzZXIiO319',1721207086);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'Multiple choice','2024-07-17 05:03:55','2024-07-17 05:03:55'),(2,'Open','2024-07-17 05:03:55','2024-07-17 05:03:55');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_category`
--

DROP TABLE IF EXISTS `user_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_category` (
  `user_id` bigint(20) unsigned NOT NULL,
  `quiz_id` bigint(20) unsigned NOT NULL,
  `quiz_count` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_category`
--

LOCK TABLES `user_category` WRITE;
/*!40000 ALTER TABLE `user_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_quiz`
--

DROP TABLE IF EXISTS `user_quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_quiz` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `quiz_id` bigint(20) unsigned NOT NULL,
  `score` int(11) DEFAULT NULL,
  `time_spent` time NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_quiz`
--

LOCK TABLES `user_quiz` WRITE;
/*!40000 ALTER TABLE `user_quiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `total_time_spent` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'antoine','antoine@test.cz',NULL,'$2y$12$K88SIWKq2Iz4d23Vi/SUou7nOVkFVpif2KM97ICcaj1wGQ.rlF5We',NULL,NULL,NULL,NULL,'2024-07-15 06:02:49','2024-07-15 06:02:49',NULL),(3,'antoine2','antoine2@test.cz',NULL,'$2y$12$1EzADG1fXCQmaXSMm95K8uQshgWSl3vlcxWY56mH6yComJnHOKfa2',NULL,NULL,NULL,NULL,'2024-07-15 06:32:30','2024-07-15 06:32:30',NULL),(4,'qwertz','qwertz@test.cz',NULL,'$2y$12$F8r.WNvgn07RNfvz9HKcR.ZP5oU14XYucziz0mT5X7wyb9lRLGL0q',NULL,NULL,NULL,NULL,'2024-07-15 06:59:15','2024-07-15 06:59:15',NULL),(5,'antoinetest','antoinetest@test.fr',NULL,'$2y$12$BDS3H5.iBeNnhJ7HsaMzEeBjh2X7OmZAAm9Xfhi5x1o0KuszNyqZO',NULL,NULL,NULL,NULL,'2024-07-15 08:15:15','2024-07-15 08:15:15',NULL),(6,'antoine4','antoine4@test.cz',NULL,'$2y$12$f.bVm97SlxsDoZjXLzi6vuw/baUF.O0HZetbvDYXIJVwxQCNn/x9u',NULL,NULL,NULL,NULL,'2024-07-15 09:12:40','2024-07-15 09:12:40',NULL),(7,'chameaudesiles','chameaudesiles@test.cz',NULL,'$2y$12$5CAnnklyKNfvFNuWmAjcnON/FZRLadEnVIwDGPSKFuCzcaFLYUDxq',NULL,NULL,NULL,NULL,'2024-07-15 10:04:13','2024-07-15 10:04:13',NULL),(8,'antoine','antoine@test.fr',NULL,'$2y$12$i2Ja1tFzh7OAn0xJK3bO9ObivXdVSbnqDcmE23t420wl9/kZpRLPK',NULL,NULL,NULL,NULL,'2024-07-15 10:14:09','2024-07-15 10:14:09',NULL);
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

-- Dump completed on 2024-07-17 11:22:14
