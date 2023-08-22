CREATE DATABASE  IF NOT EXISTS `db_fpt` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_fpt`;
-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: db_fpt
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.23.04.1

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
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin_role` tinyint(1) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'Nguyễn Mạnh Long','nguyenmanhlong@gmail.com','$2b$10$sR4/2Yh5Qa953q4EkJC22.jTVfoSEuXwgiHcoUgL3iZ9W2cOFD.Oa',0);
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `brand_id` int NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(50) NOT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Apple'),(2,'Samsung'),(3,'Xiaomi'),(4,'OnePlus'),(5,'Oppo'),(6,'Vivo'),(7,'Google'),(8,'Sony'),(9,'Realme');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `color_id` int NOT NULL AUTO_INCREMENT,
  `color_name` varchar(50) NOT NULL,
  PRIMARY KEY (`color_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Đen'),(2,'Trắng'),(3,'Bạc'),(4,'Xanh Dương'),(5,'Đỏ'),(6,'Xanh Lá'),(7,'Vàng'),(8,'Hồng'),(9,'Tím');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `detail_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `color_id` int DEFAULT NULL,
  `color_name` varchar(50) DEFAULT NULL,
  `storage_id` int DEFAULT NULL,
  `storage_capacity` int DEFAULT NULL,
  `smartphone_id` int DEFAULT NULL,
  `smartphone_name` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`detail_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (13,15,4,'Xanh Dương',5,512,2,'Samsung Galaxy S23 Ultra 5G','https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-1-2.jpg',2,27990000),(14,15,9,'Tím',4,256,2,'Samsung Galaxy S23 Ultra 5G','https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-1-2.jpg',1,23990000),(15,16,1,'Đen',4,256,3,'Xiaomi Redmi Note 12 Pro 5G','https://cdn.tgdd.vn/Products/Images/42/299734/xiami-redmi-12-pro-xam-1.jpg',1,7200000),(16,17,4,'Xanh Dương',4,256,3,'Xiaomi Redmi Note 12 Pro 5G','https://cdn.tgdd.vn/Products/Images/42/299734/xiami-redmi-12-pro-xam-1.jpg',1,7200000),(17,18,1,'Đen',4,256,3,'Xiaomi Redmi Note 12 Pro 5G','https://cdn.tgdd.vn/Products/Images/42/299734/xiami-redmi-12-pro-xam-1.jpg',4,7200000),(18,18,4,'Xanh Dương',4,256,3,'Xiaomi Redmi Note 12 Pro 5G','https://cdn.tgdd.vn/Products/Images/42/299734/xiami-redmi-12-pro-xam-1.jpg',3,7200000),(19,19,9,'Tím',4,256,1,'iPhone 14 Pro Max','https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-den-1-1.jpg',1,29180000),(20,20,4,'Xanh Dương',4,256,3,'Xiaomi Redmi Note 12 Pro 5G','https://cdn.tgdd.vn/Products/Images/42/299734/xiami-redmi-12-pro-xam-1.jpg',1,7200000);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `shipping_address` text,
  `order_status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (15,5,'2023-08-21 21:56:26',79970000.00,'Thái Bình',3),(16,5,'2023-08-22 08:24:02',7200000.00,'ewqewq',3),(17,5,'2023-08-22 08:31:51',7200000.00,'wqeq',2),(18,5,'2023-08-22 08:42:45',50400000.00,'abc',0),(19,5,'2023-08-22 08:44:34',29180000.00,'Hàn Quốc',0),(20,5,'2023-08-22 08:44:58',7200000.00,'22333',0);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smartphone_images`
--

DROP TABLE IF EXISTS `smartphone_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `smartphone_images` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `smartphone_id` int DEFAULT NULL,
  `color_id` int DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `smartphone_id` (`smartphone_id`),
  KEY `color_id` (`color_id`),
  CONSTRAINT `smartphone_images_ibfk_1` FOREIGN KEY (`smartphone_id`) REFERENCES `smartphones` (`smartphone_id`),
  CONSTRAINT `smartphone_images_ibfk_2` FOREIGN KEY (`color_id`) REFERENCES `colors` (`color_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smartphone_images`
--

LOCK TABLES `smartphone_images` WRITE;
/*!40000 ALTER TABLE `smartphone_images` DISABLE KEYS */;
INSERT INTO `smartphone_images` VALUES (1,1,1,'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-den-1-1.jpg'),(2,1,1,'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-den-2.jpg'),(3,1,9,'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-1.jpg'),(4,1,9,'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-4.jpg'),(5,1,3,'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-bac-1.jpg'),(6,1,3,'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-bac-5.jpg'),(7,1,7,'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-1.jpg'),(8,1,7,'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-4.jpg'),(9,2,1,'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-1-2.jpg'),(10,2,1,'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-4-1.jpg'),(11,2,4,'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-xanh-1.jpg'),(12,2,4,'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-xanh-2.jpg'),(13,2,9,'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s-ultra-tim-1.jpg'),(14,2,9,'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s-ultra-tim-2.jpg'),(15,3,1,'https://cdn.tgdd.vn/Products/Images/42/299734/xiami-redmi-12-pro-xam-1.jpg'),(16,3,1,'https://cdn.tgdd.vn/Products/Images/42/299734/xiami-redmi-12-pro-xam-2.jpg'),(17,3,4,'https://cdn.tgdd.vn/Products/Images/42/299734/xiaomi-redmi-12-xanh-1.jpg'),(18,3,4,'https://cdn.tgdd.vn/Products/Images/42/299734/xiaomi-redmi-12-xanh-2.jpg');
/*!40000 ALTER TABLE `smartphone_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smartphone_options`
--

DROP TABLE IF EXISTS `smartphone_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `smartphone_options` (
  `option_id` int NOT NULL AUTO_INCREMENT,
  `smartphone_id` int DEFAULT NULL,
  `color_id` int DEFAULT NULL,
  `storage_id` int DEFAULT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `price` int NOT NULL,
  PRIMARY KEY (`option_id`),
  KEY `smartphone_id` (`smartphone_id`),
  KEY `color_id` (`color_id`),
  KEY `storage_id` (`storage_id`),
  CONSTRAINT `smartphone_options_ibfk_1` FOREIGN KEY (`smartphone_id`) REFERENCES `smartphones` (`smartphone_id`),
  CONSTRAINT `smartphone_options_ibfk_2` FOREIGN KEY (`color_id`) REFERENCES `colors` (`color_id`),
  CONSTRAINT `smartphone_options_ibfk_3` FOREIGN KEY (`storage_id`) REFERENCES `storage_options` (`storage_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smartphone_options`
--

LOCK TABLES `smartphone_options` WRITE;
/*!40000 ALTER TABLE `smartphone_options` DISABLE KEYS */;
INSERT INTO `smartphone_options` VALUES (1,1,1,3,100,26318000),(2,1,1,4,200,29180000),(3,1,1,5,50,35419000),(4,1,1,6,20,41490000),(5,1,9,3,80,26318000),(6,1,9,4,120,29180000),(7,1,9,5,50,36000000),(8,1,9,6,70,41000000),(9,1,3,3,80,26318000),(10,1,3,4,120,29180000),(11,1,3,5,50,36000000),(12,1,3,6,70,41000000),(13,1,7,3,80,26318000),(14,1,7,4,120,29180000),(15,1,7,5,50,36000000),(16,1,7,6,70,41000000),(17,2,1,4,220,23990000),(18,2,1,5,78,27990000),(19,2,1,6,12,35990000),(20,2,4,4,220,23990000),(21,2,4,5,78,27990000),(22,2,4,6,12,35990000),(23,2,9,4,220,23990000),(24,2,9,5,78,27990000),(25,2,9,6,12,35990000),(26,3,1,3,40,6500000),(27,3,1,4,22,7200000),(28,3,4,3,40,6500000),(29,3,4,4,22,7200000);
/*!40000 ALTER TABLE `smartphone_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smartphones`
--

DROP TABLE IF EXISTS `smartphones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `smartphones` (
  `smartphone_id` int NOT NULL AUTO_INCREMENT,
  `smartphone_name` varchar(255) NOT NULL,
  `release_date` date DEFAULT NULL,
  `description` text,
  `brand_id` int DEFAULT NULL,
  `chipset_info` varchar(255) NOT NULL,
  `main_camera_info` varchar(255) NOT NULL,
  `selfie_camera_info` varchar(255) NOT NULL,
  `screen_info` varchar(255) NOT NULL,
  `battery_info` varchar(255) NOT NULL,
  `charging_info` varchar(255) NOT NULL,
  `sim_info` varchar(255) NOT NULL,
  `ram_info` varchar(255) NOT NULL,
  `os_info` varchar(255) NOT NULL,
  PRIMARY KEY (`smartphone_id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `smartphones_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`brand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smartphones`
--

LOCK TABLES `smartphones` WRITE;
/*!40000 ALTER TABLE `smartphones` DISABLE KEYS */;
INSERT INTO `smartphones` VALUES (1,'iPhone 14 Pro Max','2022-09-07','iPhone 14 Pro Max đem đến những trải nghiệm không thể tìm thấy trên mọi thế hệ iPhone trước đó với màu Tím Deep Purple sang trọng, camera 48MP lần đầu xuất hiện, chip A16 Bionic và màn hình “viên thuốc” Dynamic Island linh hoạt, nịnh mắt.\n\nĐỉnh cao thiết kế sang trọng và bền bỉ\nRất khó để tìm ra chiếc điện thoại nào sang trọng như iPhone 14 Pro Max trên thị trường. Thừa hưởng thiết kế vát phẳng từ thế hệ trước, thủ lĩnh iPhone 14 series khoác lên bộ khung vỏ thép, đầm tay và chắc chắn. Bạn sẽ lập tức bị lôi cuốn bởi vẻ ngoài cao cấp với thân máy bóng bẩy của sản phẩm.\nNhờ kỹ nghệ hoàn thiện xuất sắc, thiết kế iPhone 14 Pro Max đạt chuẩn chống nước IP68 cao nhất có thể trên smartphone. Apple đã phủ lên màn hình thiết bị chất liệu kính Ceramic Shield siêu bền, tối ưu khả năng kháng lực và chống xước cực tốt suốt vòng đời sử dụng.\n\niPhone 14 Pro Max có kiểu dáng tương tự người tiền nhiệm với một vẻ ngoài sang trọng làm từ khung thép không gỉ kết hợp hai mặt cứng cường lực phủ gốm siêu bền. Tuy nhiên do cụm camera được nâng cấp lớn hơn, nên bạn sẽ không thể sử dụng chung ốp lưng với dòng iPhone 13 Pro trước đây. Tất nhiên iPhone 14 Pro và iPhone 14 Pro Max sẽ có khả năng chống nước/chống bụi chuẩn IP68.\nLựa chọn giữa các màu sắc cao cấp\nVới iPhone 14 Pro Max, bạn sẽ có bốn lựa chọn màu sắc sáng giá gồm Tím (Deep Purple), Vàng (Gold), Bạc (Silver) và Đen không gian (Space Black). Riêng phiên bản Tím đã được căn chỉnh với tone màu đậm, rất đẹp, nền nã và phát huy được tinh thần sang trọng vốn có của thiết bị.\n\nBên cạnh những màu quen thuộc, khá bất ngờ khi màu sắc chủ đạo của dòng iPhone 14 Pro Max năm nay sẽ là màu Tím Deep Purple. Với một sản phẩm có thiết kế tinh xảo như iPhone 14 Pro Max thì màu tím sẽ trở nên rất đẹp, bóng bẩy và sang trọng. iPhone 14 Pro Max mang hơi hướng sang trọng, tinh tế với 4 phiên bản màu sắc:\niPhone 14 Pro Max màu tím\nPhiên bản màu tím của iPhone 14 Pro Max khác với màu tím của iPhone 14 và iPhone 14 Plus khi có sắc tím đậm hơn. Kết hợp với khung thép cao cấp, tôn lên nét đẹp cao cấp và sang trọng.\niPhone 14 Pro Max màu đen\niPhone 14 Pro Max cũng có màu đen. Đây là màu phổ biến dành cho tất cả mọi người với sắc màu trung tính, dễ dàng phối với nhiều outfit lẫn phụ kiện. Điểm đặc biệt của màu đen còn là nét đẹp vượt thời gian, vì mọi phiên bản cập nhật màu đều có màu đen. Chính vì thế, màu đen sẽ không bị lỗi thời, dù cho có nhiều phiên bản khác đã ra mắt.\niPhone 14 Pro Max màu bạc\nMàu bạc thanh lịch, rất phù hợp với thiết kế sang trọng mà iPhone 14 Pro Max đang theo đuổi. Đây cũng là màu quốc dân trên thế hệ iPhone cao cấp, khi xuất hiện rất đều đặn qua từng năm. Mặc dù không quá nổi bật nhưng khi cầm iPhone 14 Pro Max màu bạc trên tay, bạn sẽ hiểu được vì sao Apple luôn giữ phiên bản màu này – màu hội tụ đầy yếu tố sang trọng, lịch lãm đặc trưng của dòng iPhone.\niPhone 14 Pro Max màu vàng\nPhiên bản iPhone 14 Pro Max màu vàng gần như được rất nhiều người dùng nữ ưa chuộng. Sắc màu tựa như trang sức lấp lánh, sang chảnh, quý phái nhưng cực kì cao cấp với tổng thể được hoàn thiện từ khung thép và được bảo vệ bởi kính Ceramic Shield.\nMàn hình Dynamic Island lần đầu xuất hiện\nLần đầu tiên sau nhiều năm, Apple đã nói lời “tạm biệt” với phần màn hình “tai thỏ” mặt trước. Bạn sẽ có màn hình không gian hiển thị nhiều hơn khi iPhone 14 Pro Max được thu hẹp phần cảm biến Face ID và camera trước gọn nhất có thể, thành hình dạng như một viên thuốc (hay chữ i).\nApple gọi phần này là Dynamic Island vì nó thực sự thú vị. Nhờ màn hình OLED, Apple đã tùy biến khu vực “viên thuốc” thành các biểu tượng gọi tắt, các thông báo của ứng dụng với hiệu ứng chuyển cảnh mượt mà và liền mạch. Bạn chắc chắn sẽ cảm nhận được sự thú vị của Dynamic Island khi sử dụng iPhone 14 Pro Max trực tiếp.\n\niPhone 14 Pro Max sở hữu màn hình 6.7 inch LTPO hiện đại, có khả năng điều tiết tần số quét tự động từ 1Hz đến 120Hz linh hoạt nhằm tăng độ mượt mà và vẫn tiết kiệm pin. Điểm nhấn trên màn hình là việc chuyển từ phong cách tai thỏ sang dạng “viên thuốc” có phần cắt nhỏ nhắn hơn nhiều.\nĐặc biệt, Apple còn tận dụng không gian này để tạo hiệu ứng biến hóa linh hoạt tùy theo tác vụ bạn trải nghiệm. Với tên gọi Dynamic Island, cấu trúc “viên thuốc” trên màn hình iPhone 14 Pro Max giờ đây trở thành điểm nhấn đáng trải nghiệm nhất.\nTính năng Always On đã sẵn sàng\nTận dụng đặc tính của công nghệ OLED, iPhone 14 Pro Max đem đến chế độ Always On Display, cho phép người dùng xem những thông tin cần thiết như thông báo, thời gian, ngày tháng, thời tiết hay nhiệt độ sau khi màn hình chuyển qua trạng thái nghỉ.\nGiờ đây, người dùng không cần phải chạm vào thiết bị khi màn hình iPhone 14 Pro Max đang tắt mà vẫn có thể nắm được những thông tin cần thiết. Đáng nói hơn, Always On Display sẽ tự tắt khi úp màn hình xuống hoặc đặt máy trong túi quần, túi áo nhằm tiết kiệm pin.\n\nMàn hình bộ đôi iPhone 14 Pro Max cực đỉnh với tấm nền OLED Super Retina XDR, mật độ điểm ảnh 460 ppi hỗ trợ loạt tính năng hàng đầu như HDR, True Tone, Wide Color (P3). Màn hình iPhone 14 Pro có kích thước 6,1 inch độ phân giải 2556 x 1179 pixels, trong khi đó iPhone 14 Pro Max là 6,7 inch độ phân giải 2796 x 1290 pixels. Độ tương phản và độ sáng cũng rất ấn tượng với độ tương phản 2.000.000:1 và độ sáng tối đa lên tới 2000 nits ở điều kiện ngoài trời. Ngoài ra màn hình này cũng hỗ trợ tần số làm mới 120Hz và công nghệ ProMotion, có thể thay đổi tần số từ 1-120 Hz để vừa mượt mà, vừa tiết kiệm pin.\nSuper Retina XDR rực rỡ và mãn nhãn\nDù trong ánh nắng chói chang nhất, màn hình iPhone 14 Pro Max vẫn luôn sắc nét và chân thực. Tấm nền Super Retina XDR với độ sáng 2.000 nits sáng gấp đôi trước đây khiến khả năng hiển thị của sản phẩm vượt trội bất cứ mẫu iPhone nào trong lịch sử.\nApple tập trung rất nhiều vào trải nghiệm nội dung HDR khi đẩy độ sáng tối đa lên mức 1.600 nits – ngang ngửa với màn hình Pro Display XDR chuyên dụng của hãng. Bạn sẽ cảm nhận rõ ràng tính chân thực từ mỗi hình ảnh, thước phim.\n\nCamera 48MP lần đầu góp mặt\niPhone 14 Pro Max được ưu ái trang bị camera chính 48MP hoàn toàn mới, với cảm biến quad-pixel tân tiến. Việc nâng cấp độ phân giải gấp bốn lần iPhone 13 Pro Max và sử dụng cảm biến ảnh lớn hơn 65% giúp hình ảnh trở nên sắc nét chưa từng thấy.\nCảm biến mới sẽ gộp mỗi nhóm bốn pixel thành một pixel lớn, từ đó gia tăng khả năng thu sáng gấp bốn lần và tạo ra những khuôn hình sắc nét vượt xa những chiếc điện thoại camera 12MP thông thường trên thị trường. Nhờ vậy bạn sẽ có ảnh chi tiết hơn tới 4 lần trong khi chỉnh sửa ảnh ProRAW để thoải mái crop ảnh mà không lo giảm chất lượng.\nKích thước cảm biến cũng lớn hơn tới 65% so với iPhone 13 Pro, tăng khả năng chụp ảnh thiếu sáng. Trong điều kiện bình thường, Apple sẽ ghép 4 điểm ảnh làm 1 để bức ảnh cuối cùng vẫn có độ phân giải 12MP nhưng độ sáng và độ chi tiết vượt trội.\n\nCamera Tele cũng được nâng cấp khi có chất lượng quang học gấp đôi thế hệ trước, có thể thu phóng 2x và 3x rõ nét. Camera iPhone 14 Pro tập trung chủ yếu vào chụp ảnh thiếu sáng khi Apple cho biết camera góc siêu rộng Ultra Wide chụp ảnh thiếu sáng tốt hơn 3 lần, 2 camera còn lại tốt hơn gấp đôi so với thế hệ iPhone 13 Pro.\niPhone 14 Pro Max tiếp tục thể hiện sự chuyên nghiệp khi quay video với khả năng quay video 4K HDR 24fps hoặc 30fps chuẩn điện ảnh. Ấn tượng hơn là tính năng quay chuyển động không thua kém gì GoPro.\nVề camera trước TrueDepth, bạn sẽ có tính năng tự động lấy nét và khẩu độ lớn hơn. Những bức ảnh selfie sẽ rõ nét, lấy nét chính xác hơn và chụp thiếu sáng tốt hơn gấp đôi.\nNâng tầm quay chụp lên đẳng cấp chuyên nghiệp\nChưa khi nào trải nghiệm quay chụp trên iPhone chuyên nghiệp đến thế! iPhone 14 Pro Max đem đến rất nhiều tính năng hỗ trợ chuyên sâu cho người dùng. Trải nghiệm chụp ProRAW ở độ phân giải 48MP sẽ giúp bạn tối ưu hóa độ chi tiết của hình ảnh và khả năng can thiệp hậu kỳ linh hoạt hơn nhiều, dễ dàng làm hài lòng những người dùng khó tính nhất.\n\nThu phóng tuyệt hảo nhờ camera tele 2X\nTrên mặt lưng iPhone 14 Pro Max, bạn sẽ tìm thấy một camera tele 2X tiêu cự quy đổi 48mm, đạt khẩu độ F/1.78 và tích hợp kèm cảm biến chống rung OIS thế hệ hai. Sự giúp sức của camera đặc biệt này giúp iPhone 14 Pro Max đem đến các tùy chọn zoom đa dạng như 0.5x, 1x, 2x và 3x.\n\nKhả năng chụp ảnh thiếu sáng cực kỳ xuất sắc\nCả ba camera của iPhone 14 Pro Max đều được tối ưu để nâng cao khả năng chụp ảnh thiếu sáng so với iPhone cũ. Cụ thể, camera Ultra Wide có thể chụp ảnh thiếu sáng tốt hơn gấp ba lần, trong khi camera chính và camera tele chụp thiếu sáng tốt gấp đôi.\nSự giúp sức của con chip A16 Bionic siêu mạnh góp phần nâng cao chất lượng ảnh chụp nhờ thực hiện tới 4 ngàn tỉ tác vụ hậu kỳ trước khi tạo ra bức ảnh thành phẩm cuối cùng – một con số cực kỳ ấn tượng.\n\nChip A16 Bionic với 16 tỷ bóng bán dẫn\nĐứng sau mọi hoạt động của iPhone 14 Pro Max là chip A16 Bionic. Con chip đỉnh cao thế hệ mới tập hợp tới 16 tỷ bóng bán dẫn, bao gồm 6 lõi CPU và 5 lõi GPU giúp sản phẩm xử lý được khối lượng thông tin khổng lồ một cách chuyên nghiệp. Ngoài ra, A16 Bionic giúp thiết bị tiết kiệm pin tối đa, thực hiện các tác vụ đồ họa phức tạp để chạy mượt mọi tựa game.\nCác lõi Neural Engine trên A16 Bionic thực hiện 17 nghìn tỷ phép tính mỗi giây sẽ phân tích từng pixel trong ảnh và tối ưu hóa nhằm cho ra những bức ảnh chất lượng nhất.\n\nPin iPhone 14 Pro Max sẽ khiến bạn kinh ngạc\niPhone 14 Pro Max sẽ đem đến trải nghiệm pin khiến bạn thực sự kinh ngạc. Chỉ với một lần sạc, thủ lĩnh dòng iPhone 14 có thể phát video liên tục trong 29 tiếng không nghỉ. Ngoài ra, công nghệ sạc không dây đã được nâng cấp để rút ngắn thời gian chờ đợi khi kết hợp cùng bộ sạc MagSafe.\n\niPhone 14 Pro Max chính hãng giá bao nhiêu?\nKế thừa loạt sản phẩm iPhone Pro Max đẳng cấp và đắt đỏ nhất của Apple, giá iPhone 14 Pro Max cũng nằm trong phân khúc cao cấp hàng đầu tại Việt Nam. Cụ thể, mức giá iPhone 14 Pro Max dao động trong khoảng từ 26 tới 30 triệu đồng tùy từng thời điểm. Dù vậy, khi sử dụng iPhone 14 Pro Max, bạn sẽ thấy thiết bị hoàn toàn xứng đáng với mức giá cao cấp này.\nChi tiết giá iPhone 14 Pro Max mới nhất 2023 như sau:\n- iPhone 14 Pro Max 128GB giá từ 24,5 triệu đồng.\n- iPhone 14 Pro Max 256GB giá từ 29,2 triệu đồng.\n- iPhone 14 Pro Max 512GB giá từ 35,4 triệu đồng.\n- iPhone 14 Pro Max 1TB giá từ 41,4 triệu đồng.\n* Mức giá trên tùy theo chương trình khuyến mãi theo từng thời điểm tại FPT Shop.\n\nĐánh giá thực tế iPhone 14 Pro Max thời điểm hiện tại\nTrong trường hợp bạn đang cân nhắc có nên mua iPhone 14 Pro Max hay không thì việc tham khảo những đánh giá thực tế là hoàn toàn cần thiết trước khi quyết định đầu tư sắm sửa mẫu smartphone sang trọng hàng đầu thế giới điện thoại này:\nVề thiết kế cao cấp\niPhone 14 Pro Max sở hữu bộ khung vỏ thép cao cấp, có độ bóng cao và đầm tay khi cầm nắm. Toàn bộ thân máy đều được hoàn thiện tỉ mỉ đến từng chi tiết nhỏ. Hệ thống cạnh viền vát phẳng mang tới cảm nhận xịn sò, hai mặt trước/sau được hoàn thiện từ lớp kính nhám mờ chống bám vân tay, hạn chế lưu dấu mồ hôi khi sử dụng thiết bị.\nVề màn hình\nTrải nghiệm hiển thị mà iPhone 14 Pro Max đem lại thuộc top tốt nhất thị trường. Tấm nền Super Retina XDR OLED của sản phẩm rộng tới 6.7 inch và hỗ trợ tần số quét 120Hz nhằm mang lại trải nghiệm vuốt cuộn mượt mà tối đa. Với độ sáng lên tới 2.000 nits, sản phẩm hiển thị rõ nét mọi khuôn hình một cách sắc sảo, rực rỡ, dù ở ngoài trời hay trong nhà.\n\nVề cấu hình\niPhone 14 Pro Max sở hữu thông số cấu hình được Apple đầu tư mạnh mẽ với chip A16 Bionic sản xuất trên tiến trình 6nm, 6GB RAM và các tùy chọn bộ nhớ trong gồm: 128GB, 256GB, 512GB và 1TB.\nVề camera iPhone 14 Pro Max\niPhone 14 Pro Max đánh dấu bước nhảy vọt về năng lực quay chụp khi tăng độ phân giải camera lên mức 48MP - vượt trội hoàn toàn so với thông số 12MP trên các thế hệ cũ. Nhờ đó, sản phẩm diễn đạt được những khuôn hình sắc nét với độ tương phản cân bằng và đề cao tính trung thực. Khả năng xóa phông của iPhone 14 Pro Max rất ấn tượng, đem lại những khuôn hình chân dung có chiều sâu, bối cảnh phía sau được làm mờ chính xác, nhẹ nhàng và tạo hiệu ứng thị giác tốt khi ngắm nhìn.\nVề trải nghiệm pin của iPhone 14 Pro Max\nThời lượng sử dụng giữa mỗi lần sạc của iPhone 14 Pro Max trong thực tế đạt khoảng 8 tiếng liên tục. Viên pin 4.323 mAh được tối ưu tốt bởi chip A15 Bionic và hệ điều hành iOS. Ước tính, thiết bị chỉ tiêu tốn khoảng 10% pin cho một giờ xem YouTube, 10% pin cho một tiếng lướt TikTok, 15% pin nếu bạn chơi Liên Quân Mobile hoặc Liên Minh Tốc Chiến.\n\niPhone 14 Pro Max có mấy màu?\niPhone 14 Pro Max đem đến cho người dùng 4 sự lựa chọn về màu sắc bao gồm: Đen Ánh Thép, Tím Đậm, Bạc và Gold. Toàn bộ các tone màu đều mang hơi hướng trung tính, lịch lãm mà sang trọng. Trải nghiệm thực tế cho thấy màu Tím Đậm của iPhone 14 Pro Max đem lại cảm nhận mới mẻ nhất, thể hiện rõ tinh thần cao cấp mà chiếc điện thoại hướng tới. Trong trường hợp bạn muốn trải nghiệm những tone màu đẹp bất chấp xu hướng, hãy tìm đến những gam màu mang sắc độ trung tính nhiều hơn như Đen, Bạc hoặc Gold.\n\niPhone 14 Pro Max có chống nước không?\nToàn bộ iPhone 14 series nói chung và iPhone 14 Pro Max nói riêng đều có khả năng chống nước đạt chuẩn IP68. Điều này bảo chứng cho việc thiết bị có thể ngâm nước ở độ sâu 1,5 mét suốt 30 phút. Người dùng iPhone 14 Pro Max hoàn toàn có thể an tâm về các sự cố bất chợt liên quan đến nước khi sử dụng sản phẩm này.\nSo sánh iPhone 14 Pro Max với iPhone 13 Pro Max\nApple mang đến cho iPhone 14 Pro Max nhiều nâng cấp thú vị so với iPhone 13 Pro Max. Trong đó, nét khác biệt lớn nhất về ngoại hình nằm ở thiết kế màn hình Dynamic Island với phần khuyết hình viên thuốc biến đổi linh hoạt dựa trên những tác vụ mà người dùng thực hiện.\nViệc cải tiến chip xử lý từ A15 Bionic lên A16 Bionic khiến hiệu năng iPhone 14 Pro Max tăng tiến hơn nhiều. Hệ thống quay chụp trên mặt lưng cũng có sự tăng tiến từ mức 12MP lên 48MP ở camera chính. Ngoài ra, iPhone 14 Pro Max cũng sở hữu tính năng mà bạn không tìm thấy trên iPhone 13 Pro Max như màn hình Always On.\n\nCó nên mua iPhone 14 Pro Max để chơi game?\nCâu trả lời là hoàn toàn có, iPhone 14 Pro Max được giới chuyên môn đánh giá là một trong những lựa chọn tốt nhất dành cho giới game thủ. Với chip A16 Bionic, sản phẩm cho phép bạn thiết lập đồ họa lên mức tối đa ở các tựa game như Liên Quân Mobile, PUBG Mobile, Call of Duty Mobile hay thậm chí là Genshin Impact.\nQuá trình chơi game trên iPhone 14 Pro Max cực kỳ mượt mà, dù là khi bạn vuốt chiêu, tham gia giao tranh tổng phức tạp, nhặt đồ, ngắm bắn, di chuyển, lia map... Tất cả đều được phản hồi nhanh chóng, duy trì chỉ FPS ổn định và không nóng lên nhiều trong suốt quá trình chơi game. Từ trải nghiệm màn hình, hiệu năng hay thời lượng pin, các game thủ chắc chắn sẽ hài lòng về những gì iPhone 14 Pro Max đem lại.\n\nMua iPhone 14 Pro Max giá rẻ nhất ở đâu?\nTự hào là nhà phân phối lớn các sản phẩm Apple chính hãng và uy tín top đầu tại Việt Nam, FPT Shop luôn đưa ra mức giá iPhone 14 Pro Max thuộc hàng rẻ nhất trên cả nước. Hệ thống 800 cửa hàng trải rộng khắp toàn quốc tạo điều kiện để bạn dễ dàng tìm đến, mua sắm và bảo hành thiết bị trong trường hợp cần thiết.\nGiá iPhone 14 Pro Max mà FPT Shop ấn định luôn xứng đáng với giá trị thực tế của sản phẩm. Đặc biệt, hệ thống đảm bảo 100% về nguồn gốc xuất xứ của từng chiếc iPhone được bán ra, đi kèm với chế độ hậu mãi sau bán hàng tận tâm.',1,'Apple A16 Bionic','48.0 MP + 12.0 MP + 12.0 MP','12.0 MP','6.7 inch, Super Retina XDR, 2796 x 1290 Pixels','4323 mAh','20W','1 Nano SIM & 1 eSIMHỗ trợ 5G','6','iOS 16'),(2,'Samsung Galaxy S23 Ultra 5G','2022-02-25','Tự hào là điện thoại Galaxy đầu tiên sở hữu cảm biến tuyệt đỉnh 200MP, Samsung Galaxy S23 Ultra đưa người dùng vào không gian nhiếp ảnh tân tiến vượt trội. Sức mạnh còn bùng nổ với vi xử lý Snapdragon mạnh nhất cho cách mạng hiệu năng gaming đột phá. Tất cả được gói gọn trong thiết kế cao cấp và bền vững cho hiện tại và tương lai.\n\nVẻ đẹp từ sắc màu thiên nhiên tinh tế\nChuẩn nét đẹp được thiết lập mới trên thế hệ Samsung Galaxy S23 Ultra, sắc màu thiên nhiên tinh tế: Xanh Botanic, Tím Lilac, Kem Cotton và Đen Phantom được chế tác bởi công nghệ hàng đầu, thổi hồn vào từng siêu phẩm một cách nhẹ nhàng nhưng vẫn rất đẳng cấp. Từng đường nét không phô trương nhưng vẫn khoe trọn vẻ đẹp thanh lịch và sang trọng cho từng chi tiết. Đồng thời, khung viền kim loại chắc chắn kết hợp thiết kế đối xứng đậm chất Ultra mạnh mẽ, còn là tâm điểm cho đại diện hàng đầu của dòng Galaxy S.\n\nTuyên ngôn sống xanh bền vững\nTrong những năm qua, đội ngũ Samsung luôn cố gắng và nỗ lực giảm thiểu các tác động đến môi trường. Tuyên ngôn sống xanh ngày càng hiện diện nhiều trong các sản phẩm Galaxy S. Samsung Galaxy S23 Ultra là bước cải tiến lớn trong lịch sử thiết kế smartphone – một thiết kế bền vững cho cả hiện tại và tương lai. Samsung đã sử dụng gấp đôi linh kiện tái chế so với bản Galaxy S22 Ultra là 12 linh kiện. Khoác lên điện thoại là lớp kính phủ tái chế, phim phủ PET, khẳng định vẻ đẹp là bản sắc vốn có, nổi bật và khác biệt bởi tuyên ngôn sống xanh thế hệ mới.\n\nTương lai công nghệ hiển thị\nMặt trước của Samsung S23 Ultra là màn hình cong cao cấp, kích thước 6.8 inch trên tấm nền Dynamic AMOLED 2X sắc nét và sống động, đưa người dùng vào không gian giải trí chuẩn tương lai của công nghệ hiển thị. Phần màn hình còn được giảm độ cong, để tăng diện tích bề mặt và độ phẳng, cho trải nghiệm tốt nhất trên từng chi tiết. Cộng hưởng với tần số quét 120Hz cho mọi thao tác chuyển cảnh diễn ra mượt mà. Đồng thời, tần số quét này cũng tối ưu cho từng ứng dụng, tiết kiệm pin hiệu quả.  \n\nSiêu bút S-Pen – ghi chú, phác thảo và hơn thế nữa\nDi sản dòng Galaxy Note – bút S-Pen kết hợp với sự cải tiến mới cho thế hệ S23 Ultra viết tiếp những kỳ tích, ghi lại những dấu ấn mạnh mẽ trong lòng người dùng. Bạn có thể đa nhiệm, tối ưu hiệu suất công việc cùng bút S-Pen với khả năng ghi chú, phác thảo nhanh chóng, tiện lợi mà không cần phải phụ thuộc vào sổ tay. Chỉ cần Samsung S23 Ultra trong tay, mọi thứ đã sẵn sàng để lưu lại những ý tưởng tuyệt vời, khởi tạo nền tảng sáng tạo vững chắc. Đồng thời, sử dụng bút S-Pen còn thú vị hơn với tính năng điều khiển từ xa như chụp hình, mà không cần chạm màn hình.\n\nTrọn bộ 4 camera đột phá, dẫn đầu xu hướng nhiếp ảnh\nHệ thống 4 camera đột phá trên Samsung Galaxy S23 Ultra chính là trọn bộ nhiếp ảnh di động tuyệt đỉnh trên thị trường. Sự góp mặt của những cảm biến vượt trội nhất đã mang đến siêu phẩm chưa từng có trên smartphone Galaxy, cho chất lượng ảnh sắc nét trong mọi điều kiện.\nBộ 4 camera này bao gồm: camera góc rộng 200MP, camera góc siêu rộng 12MP, camera tele 10MP (zoom quang 3x) và camera tele 10MP (zoom quang 10x). Hội tụ tất cả ấn tượng trên một siêu phẩm đẳng cấp, Galaxy S23 Ultra sẽ giúp bạn trở thành “nhiếp ảnh gia” ở mọi khung hình, sẵn sàng kiến tạo những tấm ảnh/video chuyên nghiệp ở bất kỳ đâu.\n\nSmartphone Galaxy đầu tiên có cảm biến siêu phân giải 200MP\nSamsung S23 Ultra đột phá với cảm biến 200MP – thông số camera cao nhất trên smartphone Samsung. Không chỉ vượt trội với điện thoại Samsung, mà đây còn là một trong điện thoại có camera tốt nhất trên thị trường. Camera giúp bạn ghi lại mọi khung hình một cách sắc nét, rực rỡ, độ chính xác vượt trội, bạn có thể thoải mái cắt bất kỳ chi tiết nào, mà chất lượng vẫn đảm bảo. Theo đó, để có được điều này, thiết bị sử dụng công nghệ gộp điểm ảnh, hỗ trợ nhiều cấp độ xử lý chuyên nghiệp cho từng điểm ảnh, đạt được chất lượng hoàn hảo, sẵn sàng thách thức mọi smartphone hiện nay.\n\nCamera Mắt thần bóng đêm – đẳng cấp chụp đêm tốt nhất\nCác thế hệ Galaxy luôn được đánh giá cao về khả năng chụp đêm, nay còn mạnh mẽ và ấn tượng với camera Mắt thần bóng đêm cải tiến trên S23 Ultra. Công nghệ mới cho phép cảm biến điểm ảnh thông minh thích ứng cho từng khung hình, hệ thống ống kính giảm flare sáng hiệu quả với chi tiết sắc nét, thu nhiều sáng trong nhiều điều kiện thách thức, khắc họa trọn nét đẹp trong màn đêm.\nĐồng thời, phần chân dung đêm còn tuyệt vời khi có trường ảnh sâu và rộng hơn, giúp điện thoại ghi lại những tấm ảnh xóa phông chuyên nghiệp, đẹp tự nhiên với chủ thể được nổi bật, giàu chi tiết, đạt cấp độ DSLR.\n\nVideo đêm chuyên nghiệp - mượt mà trong từng thước phim\nKhả năng quay video trên Samsung S23 Ultra sẽ khiến bạn bất ngờ, vì từng thước phim đều được ghi lại một cách sắc nét và rõ ràng, bất chấp mọi điều kiện, dù ngược sáng hay thiếu sáng. Để có được điều này là sự hợp lực chặt chẽ giữa hệ thống camera cao cấp và những cải tiến chống rung hiệu quả. Theo đó, Galaxy S23 Ultra có Công nghệ VDIS ổn định hình ảnh kỹ thuật số, tăng cường khả năng giảm rung và nâng cấp Công nghệ OIS gấp 2 lần biên độ, giảm thiểu mờ nhòe cho mọi chuyển, tăng nhận diện ánh sáng. Video còn đậm màu điện ảnh với chế độ quay video 8k nâng cao 30fps cùng góc quay rộng hơn.\n\nTuyệt tác bầu trời đêm dễ dàng\nSamsung Galaxy S23 Ultra mang tới giải pháp chụp thiên văn tiên tiến, nâng tầm nhiếp ảnh di động lên tầm cao mới. Nơi bạn có thể khám phá và lưu giữ tuyệt tác bầu trời đêm một cách dễ dàng. Chỉ cần sở hữu Galaxy S23 Ultra trên tay, căn góc và ghi lại dải thiên hà sắc nét, bạn sẽ bất ngờ vì chất lượng ảnh mà điện thoại mang tới. Đồng thời, bạn cũng có thể bật chế độ Hyperlapse để quay lại mọi chuyển động, tất cả thước phim trong đêm dài sẽ được thu lại trong vài phút ngắn với chất lượng hoàn hảo.\n\nSáng tạo ảnh nghệ thuật trong tầm tay\nKhai phá sự sáng tạo, dễ dàng sở hữu tấm ảnh nghệ thuật với tính năng Chụp chồng hình trên Samsung S23 Ultra. Theo đó, tính năng cho phép chụp tối đa 9 khung hình liên tiếp và kết hợp lại, tạo ra tác phẩm nghệ thuật ngay trong tầm tay với các lớp ảnh được xếp khéo léo, tinh tế, đầy cá tính. Đồng thời, nếu bạn muốn điều chỉnh thủ công cho từng tấm ảnh, bạn có thể xem trước kết quả ảnh thu được để điều chỉnh.\n\nThế hệ chip mạnh nhất, mang tới những trận game bùng nổ\nHiệu năng đầy uy lực với sức mạnh vượt trội đến từ Snapdragon 8 Gen 2 for Galaxy – bộ xử lý Snapdragon dành riêng cho điện thoại Samsung Galaxy S23 series. So với chip Snapdragon 8 Gen 2 tiêu chuẩn, bản đặc biệt này được tăng cường thêm tốc độ xung nhịp cho CPU đến 3.36Hz (bản tiêu chuẩn 3.2GHz) và GPU đến 719 MHz (thay vì 680MHz). Sự khác biệt này giúp CPU tăng 34%, NPU tăng 49% và đồ họa GPU tăng 41% so với Snapdragon 8 Gen 1. Chính vì vậy, mọi trải nghiệm trên Galaxy S23 Ultra đều mượt mà, xử lý nhanh chóng, dù cho là những tựa game nặng để các trận game thật sự bùng nổ.\n\nViên pin bền bỉ cho cả ngày dài\nTích hợp loạt công nghệ cao cấp nhưng S23 Ultra vẫn rất bền bỉ bởi viên pin 5.000mAh. Viên pin lớn này cho phép điện thoại đồng hành cùng bạn cả ngày, hỗ trợ công việc tối ưu, luôn giữ kết nối mọi lúc, mọi nơi hoặc giải trí nhẹ nhàng. Đồng thời, điện thoại cũng hỗ trợ sạc nhanh tiên tiến đến 45W, giúp lấy lại năng lượng nhanh hơn, tiết kiệm thời gian hiệu quả.\n\nChuyển dữ liệu an toàn và nhanh chóng\nPhần chuyển dữ liệu từ điện thoại khác sang S23 Ultra cũng nhanh chóng. Chỉ cần một lần truyền với kết nối Wi-Fi hoặc đăng nhập tài khoản Samsung là bạn đã hoàn thành cài đặt. Các thao tác rất đơn giản, mà vẫn đảm bảo các thông tin, ứng dụng, ảnh, video, tin nhắn, danh bạ… luôn được giữ trọn vẹn, từ bất kỳ hệ điều hành nào sang điện thoại mới.\n',2,'Snapdragon 8 Gen 2','200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP','12.0 MP','6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels','5000 mAh','15W','1 - 2 Nano SIM hoặc 1 eSIM, 1 Nano SIM','8','Android 13.0'),(3,'Xiaomi Redmi Note 12 Pro 5G','2023-02-21','Xiaomi mang đến một Redmi Note 12 Pro 5G toàn diện, thiết bị được hỗ trợ bởi hệ thống camera, màn hình và pin ưu việt. Những năng lượng tích cực và sống động sẽ đồng hành trong cuộc sống của bạn, cho trải nghiệm các tính năng flagship trong phân khúc cận cao cấp. \n\nCảm biến chụp ảnh chuẩn flagship\nCảm biến IMX766 là lựa chọn của nhiều smartphone hàng đầu và Redmi Note 12 Pro 5G nằm trong số đó dù thuộc phân khúc cận cao cấp. Kích thước cảm biến lớn 1/1,56” cho phép thu được nhiều ánh sáng hơn trong khi chế độ Lấy nét tự động toàn bộ điểm ảnh tiên sẽ được xử lý với tốc độ cao, mang đến hình ảnh chất lượng và rõ nét. \n\nTrang bị chống rung OIS\nRedmi Note 12 Pro 5G được cải thiện đáng kể chất lượng ảnh chụp. Hình ảnh rõ ràng, bất kể ngày hay đêm nhờ vào khả năng chống rung quang học OIS được tích hợp. Điện thoại sẽ giảm thiểu hiệu quả tình trạng rung lắc camera khi chụp và cho phép thu nhiều ánh sáng hơn trước. \n\nThuật toán AI tiên tiến, cải thiện chất lượng hình ảnh\nVới Xiaomi Imaging Engine, chất lượng bức ảnh và tốc độ xử lý khi chụp sẽ được cải thiện đáng kể, quá trình này được xử lý từ thuật toán AI tiên tiến. Bạn sẽ dễ dàng bắt trọn từng khoảnh khắc chân thực và vô giá trong cuộc sống chỉ với điện thoại trên tay. \n\nCung cấp 7 bộ lọc phim đẹp mắt\nRedmi Note 12 Pro 5G sẽ tạo ra một không gian nghệ thuật cho riêng bạn với 7 bộ lọc phim theo khuynh hướng cổ điển, công cụ tính toán ở cấp điểm ảnh và chế độ xem trước trong thời gian thực. Bạn sẽ nâng tầm bức ảnh của mình như một kiệt tác, cổ điển giữa không gian hiện đại. \n\nThiết kế kết hợp giữa sự tối giản và sang trọng\nNhững đường nét tinh tế và toát lên vẻ cao cấp được thể hiện rõ nét ở khung viền kim loại phẳng và mặt lưng kính. Hơn nữa, thân máy có độ mỏng nhẹ đột phá và ấn tượng bậc nhất trong dòng Redmi Note Pro từ trước đến nay khi chỉ dày 7.9mm và nặng 187g. Điện thoại sẽ phù hợp với mọi phong cách khi cung cấp ba tùy chọn màu thu hút bao gồm Xanh Thiên Thanh, Đen Bán Dạ và Trắng Bắc Cực. \n\nMàn hình đẳng cấp, sắc thái sống động\nMàn hình 6.67\" trên tấm nền Flow AMOLED sẽ giúp tăng độ sáng, hiển thị dải màu rộng hơn nhờ gam màu rộng chuẩn DCI-P3 và được nâng cao độ tương phản, dù sử dụng dưới ánh sáng mạnh vẫn luôn rõ nét. Màn hình này kết hợp với tần số quét 120Hz, hỗ trợ Dolby Vision và HDR10+ giúp người dùng thao tác lướt chạm trơn tru và hình ảnh sắc nét bậc nhất. Từ lướt web, xem video đến chơi game, mọi tác vụ đều được thực thi với khả năng chuyển cảnh mượt mà. \n\nTrải nghiệm âm thanh chân thực\nVới sự hậu thuẫn của Dolby Atmos, loa kép được trang bị trên Redmi Note 12 Pro 5G sẽ cho ra chất âm chân thực và trong trẻo, tạo nên một rạp phim thu nhỏ ngay trên tay bạn. Tận hưởng giải trí tuyệt đỉnh giờ đây được thực hiện dễ dàng mọi lúc mọi nơi.\n\nVẫn được đảm bảo cho thời lượng sử dụng lớn\nDù có thân máy mỏng nhẹ nhưng điện thoại vẫn đảm bảo năng lượng cho nhu cầu giải trí của người dùng lên đến 1 ngày. Hơn nữa, bạn cũng chỉ cần 15 phút sạc để tiếp tục sử dụng điện thoại, rút ngắn được thời gian nạp năng lượng mỗi ngày nhờ vào sạc nhanh 67W. \n\nHiệu năng mạnh mẽ đến từ con chip 5G cao cấp \nMang trong mình Dimensity 1080 5G có trên các sản phẩm flagship, điện thoại giúp người dùng dễ dàng tiếp cận hiệu năng cao cấp trong phân khúc 10 triệu đồng. Chipset sử dụng tiến trình 6nm tiên tiến này giúp tăng tốc độ tổng thể và giảm mức điện năng tiêu thụ, mang đến hiệu năng đỉnh cao cho mọi tác vụ dù dựng video hay chơi game đồ họa cao. \n\n5G siêu tốc, đa nhiệm mượt mà\nĐàm thoại và sử dụng mạng di động sẽ không còn gặp bất cứ trở ngại nào khi có 5G bên trong. Tốc độ kết nối nhanh hơn và hỗ trợ nhiều dải tần số sẽ giúp bạn duy trì kết nối với bạn bè khi trò chuyện trực tuyến. Bên cạnh đó, tác vụ đa nhiệm cũng sẽ được xử lý mượt mà với RAM lên đến 8GB.\n',3,'MediaTek Dimensity 1080','50.0 MP + 8.0 MP','16.0 MP','6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels','5000 mAh','120W','2','8','Android 12'),(4,'Phan Long','2023-08-24','ewqewqewq',6,'MediaTek Dimensity 7050 5G','100.0 MP + 2.0 MP','16.0 MP','6.7 inch, OLED, FHD+, 1080 x 2412 Pixels','5000 mAh','Sạc siêu nhanh SuperVOOC 65W','2 Nano SIM','8 GB','1'),(5,'Phan Long','2023-08-24','ewqewqewq',6,'MediaTek Dimensity 7050 5G','100.0 MP + 2.0 MP','16.0 MP','6.7 inch, OLED, FHD+, 1080 x 2412 Pixels','5000 mAh','Sạc siêu nhanh SuperVOOC 65W','2 Nano SIM','8 GB','1');
/*!40000 ALTER TABLE `smartphones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage_options`
--

DROP TABLE IF EXISTS `storage_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storage_options` (
  `storage_id` int NOT NULL AUTO_INCREMENT,
  `storage_capacity` int NOT NULL,
  PRIMARY KEY (`storage_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage_options`
--

LOCK TABLES `storage_options` WRITE;
/*!40000 ALTER TABLE `storage_options` DISABLE KEYS */;
INSERT INTO `storage_options` VALUES (1,32),(2,64),(3,128),(4,256),(5,512),(6,1024);
/*!40000 ALTER TABLE `storage_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `birthday` date NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `is_login` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Nguyen Manh Long','2000-05-20',0,'0398926955','longnm2000@gmail.com','$2b$10$kn29Oor4Ab7fE3ix/dpHQ.2yFx9Lc/blFO06q8jRXGI0D8wQzS1lK',0),(3,'Phan Long','2023-08-30',1,'0366525695','long123@gmail.com','$2b$10$.BSAbYZAecL9YDlnA63JeOKc.Jfj44HOdHcEKzXUnEMEt.dVY7Kxu',1),(5,'Ryu','2023-08-11',0,'0366525695','ryu123@gmail.com','$2b$10$qxhWlTshByMnIGFpy6UIT./EK0HrChIURWhAlXyw17UTxAp3VD88O',0),(6,'Nguyễn Mạnh Long','2000-05-20',0,'0366898654','longkk@gmail.com.vn','$2b$10$mmrrV16KB65rKm5G35GhYO5VecmTCFdVBRM6sakEhASBEADtkxOBW',1),(7,'ewqewq','2023-08-15',0,'2132131231','eqwewqe@mfu.com','$2b$10$2uc3/Yd2yMuk.59/8LLOP.vMQQBmZFrfHwSQRiab2UPJdoFRnS1/C',0);
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

-- Dump completed on 2023-08-22 13:52:33
