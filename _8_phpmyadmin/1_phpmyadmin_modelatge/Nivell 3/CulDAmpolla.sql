-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 02, 2021 at 12:44 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CulDAmpolla`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id_client` int(11) NOT NULL,
  `nom_client` varchar(50) NOT NULL,
  `adreça_client` text NOT NULL,
  `telf_client` varchar(30) NOT NULL,
  `email_client` varchar(30) NOT NULL,
  `data_registre` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `empleats`
--

CREATE TABLE `empleats` (
  `id_empleat` int(11) NOT NULL,
  `nom_empleat` varchar(50) NOT NULL,
  `ulleres_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `marca`
--

CREATE TABLE `marca` (
  `id_marca` int(11) NOT NULL,
  `nom_marca` varchar(50) NOT NULL,
  `prov_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Proveidor`
--

CREATE TABLE `Proveidor` (
  `id_prov` int(11) NOT NULL,
  `nom_prov` varchar(50) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `adreça_prov` text NOT NULL,
  `telf_prov` varchar(30) NOT NULL,
  `fax_prov` varchar(30) NOT NULL,
  `NIF_prov` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Recomanacions`
--

CREATE TABLE `Recomanacions` (
  `antic_client_id` int(11) DEFAULT NULL,
  `nou_client_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Ulleres`
--

CREATE TABLE `Ulleres` (
  `id_ulleres` int(11) NOT NULL,
  `prov_id` int(11) NOT NULL,
  `empleat_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `marca_ulleres` varchar(50) NOT NULL,
  `grad_vidre_dret` float NOT NULL,
  `grad_vidre_esquerre` float NOT NULL,
  `muntura` varchar(50) NOT NULL,
  `color_muntura` varchar(50) NOT NULL,
  `color_vidre_dret` varchar(50) NOT NULL,
  `color_vidre_esquerre` varchar(50) NOT NULL,
  `preu` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_client`);

--
-- Indexes for table `empleats`
--
ALTER TABLE `empleats`
  ADD PRIMARY KEY (`id_empleat`),
  ADD KEY `ulleres_id` (`ulleres_id`);

--
-- Indexes for table `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id_marca`),
  ADD KEY `prov_id` (`prov_id`),
  ADD KEY `nom_marca` (`nom_marca`);

--
-- Indexes for table `Proveidor`
--
ALTER TABLE `Proveidor`
  ADD PRIMARY KEY (`id_prov`),
  ADD KEY `marca` (`marca`);

--
-- Indexes for table `Recomanacions`
--
ALTER TABLE `Recomanacions`
  ADD KEY `antic_client_id` (`antic_client_id`),
  ADD KEY `nou_client_id` (`nou_client_id`);

--
-- Indexes for table `Ulleres`
--
ALTER TABLE `Ulleres`
  ADD PRIMARY KEY (`id_ulleres`),
  ADD UNIQUE KEY `marca_ulleres` (`marca_ulleres`),
  ADD KEY `prov_id` (`prov_id`),
  ADD KEY `empleat_id` (`empleat_id`),
  ADD KEY `client_id` (`client_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `empleats`
--
ALTER TABLE `empleats`
  MODIFY `id_empleat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `marca`
--
ALTER TABLE `marca`
  MODIFY `id_marca` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Proveidor`
--
ALTER TABLE `Proveidor`
  MODIFY `id_prov` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Ulleres`
--
ALTER TABLE `Ulleres`
  MODIFY `id_ulleres` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `marca`
--
ALTER TABLE `marca`
  ADD CONSTRAINT `marca_ibfk_1` FOREIGN KEY (`nom_marca`) REFERENCES `Ulleres` (`marca_ulleres`);

--
-- Constraints for table `Proveidor`
--
ALTER TABLE `Proveidor`
  ADD CONSTRAINT `Proveidor_ibfk_2` FOREIGN KEY (`id_prov`) REFERENCES `marca` (`prov_id`);

--
-- Constraints for table `Recomanacions`
--
ALTER TABLE `Recomanacions`
  ADD CONSTRAINT `Recomanacions_ibfk_1` FOREIGN KEY (`antic_client_id`) REFERENCES `clients` (`id_client`),
  ADD CONSTRAINT `Recomanacions_ibfk_2` FOREIGN KEY (`nou_client_id`) REFERENCES `clients` (`id_client`);

--
-- Constraints for table `Ulleres`
--
ALTER TABLE `Ulleres`
  ADD CONSTRAINT `Ulleres_ibfk_1` FOREIGN KEY (`prov_id`) REFERENCES `Proveidor` (`id_prov`),
  ADD CONSTRAINT `Ulleres_ibfk_2` FOREIGN KEY (`empleat_id`) REFERENCES `empleats` (`id_empleat`),
  ADD CONSTRAINT `Ulleres_ibfk_3` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id_client`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
