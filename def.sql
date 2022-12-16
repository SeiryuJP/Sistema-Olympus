-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2022 a las 17:37:30
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `def`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atributes`
--

CREATE TABLE `atributes` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `atributes`
--

INSERT INTO `atributes` (`ID`, `name`, `created_at`, `updated_at`) VALUES
(1, 'sabiduria', '2022-11-29 19:40:01', '2022-11-29 19:40:01'),
(2, 'nobleza', '2022-11-29 19:40:52', '2022-11-29 19:40:52'),
(3, 'virtud', '2022-11-29 19:41:09', '2022-11-29 19:41:09'),
(4, 'maldad', '2022-11-29 19:41:19', '2022-11-29 19:41:19'),
(5, 'audacia', '2022-11-29 19:41:29', '2022-11-29 19:41:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atributes_users`
--

CREATE TABLE `atributes_users` (
  `atributeID` bigint(20) UNSIGNED NOT NULL,
  `userID` bigint(20) UNSIGNED NOT NULL,
  `value` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `atributes_users`
--

INSERT INTO `atributes_users` (`atributeID`, `userID`, `value`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2022-11-29 18:45:08', '2022-11-29 18:45:08'),
(2, 1, 1, '2022-11-29 18:45:08', '2022-11-29 18:45:08'),
(3, 1, 1, '2022-11-29 18:45:08', '2022-11-29 18:45:08'),
(4, 1, 1, '2022-11-29 18:45:08', '2022-11-29 18:45:08'),
(5, 1, 1, '2022-11-29 18:45:08', '2022-11-29 18:45:08'),
(1, 2, 3, '2022-11-29 18:45:19', '2022-11-29 18:45:19'),
(2, 2, 4, '2022-11-29 18:45:19', '2022-11-29 18:45:19'),
(3, 2, 2, '2022-11-29 18:45:19', '2022-11-29 18:45:19'),
(4, 2, 5, '2022-11-29 18:45:19', '2022-11-29 18:45:19'),
(5, 2, 3, '2022-11-29 18:45:19', '2022-11-29 18:45:19'),
(1, 3, 4, '2022-11-29 18:45:28', '2022-11-29 18:45:28'),
(2, 3, 2, '2022-11-29 18:45:28', '2022-11-29 18:45:28'),
(3, 3, 4, '2022-11-29 18:45:28', '2022-11-29 18:45:28'),
(4, 3, 3, '2022-11-29 18:45:28', '2022-11-29 18:45:28'),
(5, 3, 1, '2022-11-29 18:45:28', '2022-11-29 18:45:28'),
(1, 38, 2, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(2, 38, 4, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(3, 38, 2, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(4, 38, 2, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(5, 38, 5, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(1, 39, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(2, 39, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(3, 39, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(4, 39, 1, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(5, 39, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(1, 40, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(2, 40, 1, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(3, 40, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(4, 40, 5, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(5, 40, 2, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(1, 41, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(2, 41, 4, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(3, 41, 1, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(4, 41, 2, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(5, 41, 2, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(1, 42, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(2, 42, 4, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(3, 42, 4, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(4, 42, 5, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(5, 42, 5, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(1, 43, 5, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(2, 43, 1, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(3, 43, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(4, 43, 5, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(5, 43, 2, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(1, 44, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(2, 44, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(3, 44, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(4, 44, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(5, 44, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(1, 45, 2, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(2, 45, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(3, 45, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(4, 45, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(5, 45, 2, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(1, 46, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(2, 46, 5, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(3, 46, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(4, 46, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(5, 46, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(1, 47, 5, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(2, 47, 1, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(3, 47, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(4, 47, 2, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(5, 47, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(1, 48, 2, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(2, 48, 1, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(3, 48, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(4, 48, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(5, 48, 5, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(1, 49, 1, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(2, 49, 1, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(3, 49, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(4, 49, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(5, 49, 5, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(1, 50, 5, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(2, 50, 2, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(3, 50, 4, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(4, 50, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(5, 50, 2, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(1, 51, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(2, 51, 5, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(3, 51, 1, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(4, 51, 5, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(5, 51, 1, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(1, 52, 2, '2022-12-15 09:53:13', '2022-12-15 09:53:13'),
(2, 52, 4, '2022-12-15 09:53:13', '2022-12-15 09:53:13'),
(3, 52, 5, '2022-12-15 09:53:13', '2022-12-15 09:53:13'),
(4, 52, 2, '2022-12-15 09:53:13', '2022-12-15 09:53:13'),
(5, 52, 3, '2022-12-15 09:53:13', '2022-12-15 09:53:13'),
(1, 53, 2, '2022-12-15 09:57:58', '2022-12-15 09:57:58'),
(2, 53, 1, '2022-12-15 09:57:58', '2022-12-15 09:57:58'),
(3, 53, 1, '2022-12-15 09:57:58', '2022-12-15 09:57:58'),
(4, 53, 2, '2022-12-15 09:57:58', '2022-12-15 09:57:58'),
(5, 53, 1, '2022-12-15 09:57:58', '2022-12-15 09:57:58'),
(1, 54, 3, '2022-12-15 10:17:52', '2022-12-15 10:17:52'),
(2, 54, 5, '2022-12-15 10:17:52', '2022-12-15 10:17:52'),
(3, 54, 5, '2022-12-15 10:17:52', '2022-12-15 10:17:52'),
(4, 54, 4, '2022-12-15 10:17:52', '2022-12-15 10:17:52'),
(5, 54, 2, '2022-12-15 10:17:52', '2022-12-15 10:17:52'),
(1, 55, 3, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(2, 55, 4, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(3, 55, 5, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(4, 55, 4, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(5, 55, 1, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(1, 56, 5, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(2, 56, 5, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(3, 56, 1, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(4, 56, 5, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(5, 56, 3, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(1, 57, 2, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(2, 57, 4, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(3, 57, 3, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(4, 57, 4, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(5, 57, 5, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(1, 58, 4, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(2, 58, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(3, 58, 4, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(4, 58, 4, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(5, 58, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(1, 59, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(2, 59, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(3, 59, 4, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(4, 59, 4, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(5, 59, 5, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(1, 60, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(2, 60, 5, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(3, 60, 1, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(4, 60, 5, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(5, 60, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(1, 61, 4, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(2, 61, 4, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(3, 61, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(4, 61, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(5, 61, 1, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(1, 62, 5, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(2, 62, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(3, 62, 4, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(4, 62, 4, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(5, 62, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(1, 63, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(2, 63, 5, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(3, 63, 1, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(4, 63, 5, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(5, 63, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(1, 64, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(2, 64, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(3, 64, 5, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(4, 64, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(5, 64, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(1, 65, 2, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(2, 65, 4, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(3, 65, 4, '2022-12-15 10:20:15', '2022-12-15 10:20:15'),
(4, 65, 1, '2022-12-15 10:20:15', '2022-12-15 10:20:15'),
(5, 65, 5, '2022-12-15 10:20:15', '2022-12-15 10:20:15'),
(1, 66, 3, '2022-12-15 10:20:15', '2022-12-15 10:20:15'),
(2, 66, 4, '2022-12-15 10:20:15', '2022-12-15 10:20:15'),
(3, 66, 2, '2022-12-15 10:20:15', '2022-12-15 10:20:15'),
(4, 66, 3, '2022-12-15 10:20:15', '2022-12-15 10:20:15'),
(5, 66, 2, '2022-12-15 10:20:15', '2022-12-15 10:20:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eleccion`
--

CREATE TABLE `eleccion` (
  `idprueba` bigint(20) UNSIGNED NOT NULL,
  `correcta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `incorrecta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `habilidad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `eleccion`
--

INSERT INTO `eleccion` (`idprueba`, `correcta`, `incorrecta`, `habilidad`) VALUES
(3, 'rojo', 'azul', 'sabiduria'),
(100, 'si', 'no', 'audacia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `human_data`
--

CREATE TABLE `human_data` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `fate` int(11) NOT NULL,
  `protection` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `human_data`
--

INSERT INTO `human_data` (`ID`, `fate`, `protection`, `created_at`, `updated_at`) VALUES
(38, 0, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(39, 0, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(40, 0, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(41, 0, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(42, 0, 3, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(43, 0, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(44, 0, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(45, 0, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(46, 0, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(47, 0, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(48, 0, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(49, 0, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(50, 0, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(51, 0, 3, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(52, 0, 3, '2022-12-15 09:53:13', '2022-12-15 09:53:13'),
(53, 0, 3, '2022-12-15 09:57:58', '2022-12-15 09:57:58'),
(54, 0, 3, '2022-12-15 10:17:52', '2022-12-15 10:17:52'),
(55, 0, 3, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(56, 0, 3, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(57, 0, 3, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(58, 0, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(59, 0, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(60, 0, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(61, 0, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(62, 0, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(63, 0, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(64, 0, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(65, 0, 3, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(66, 0, 3, '2022-12-15 10:20:15', '2022-12-15 10:20:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_11_21_170542_create_human_data_table', 1),
(6, '2022_11_23_125416_create_atributes_table', 1),
(7, '2022_11_23_125709_create_atributes_users_table', 1),
(8, '2022_11_26_163344_create_prueba_table', 2),
(9, '2022_11_28_213657_create_resplibre_table', 3),
(10, '2022_11_28_185356_create_puntual_table', 4),
(11, '2022_11_26_160810_create_eleccion_table', 5),
(12, '2022_11_28_155056_create_valoracion_table', 6),
(13, '2022_12_13_202006_create_usuarios_asignados_table', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` int(36) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE `prueba` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `destino` int(11) NOT NULL,
  `iddios` int(11) NOT NULL,
  `tipo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pregunta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `prueba`
--

INSERT INTO `prueba` (`id`, `destino`, `iddios`, `tipo`, `pregunta`, `created_at`, `updated_at`) VALUES
(1, 10, 1, 'Puntual', 'Hidra de Lerna', '2022-12-05 23:54:56', '2022-12-05 23:54:56'),
(2, 40, 1, 'Respuesta Libre', '¿Cómo murió Heracles?', '2022-12-05 23:56:51', '2022-12-05 23:56:51'),
(3, 50, 1, 'Eleccion', '¿color favorito?', '2022-12-05 23:57:39', '2022-12-05 23:57:39'),
(97, 78, 1, 'Valoracion', '¿color favorito?', '2022-12-11 12:51:44', '2022-12-11 12:51:44'),
(98, 85, 1, 'Valoracion', '¿hola?', '2022-12-11 12:53:55', '2022-12-11 12:53:55'),
(99, 8, 1, 'Valoracion', '¿hola?', '2022-12-11 12:57:23', '2022-12-11 12:57:23'),
(100, 14, 1, 'Eleccion', 'qwertyuiop', '2022-12-11 12:58:55', '2022-12-11 12:58:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntual`
--

CREATE TABLE `puntual` (
  `idprueba` bigint(20) UNSIGNED NOT NULL,
  `habilidad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `porcentaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `puntual`
--

INSERT INTO `puntual` (`idprueba`, `habilidad`, `porcentaje`) VALUES
(1, 'audacia', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resplibre`
--

CREATE TABLE `resplibre` (
  `idprueba` bigint(20) UNSIGNED NOT NULL,
  `palabrasclaves` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `porcentaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `resplibre`
--

INSERT INTO `resplibre` (`idprueba`, `palabrasclaves`, `porcentaje`) VALUES
(2, 'llamas#fuego#arder#hera', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `role`, `avatar`, `created_at`, `updated_at`) VALUES
(1, 'zeus', 'zeus@dios.com', '2022-12-05 10:04:13', '$2y$10$X5lcsM8rMTbe3doO5UAZXOWE2my/xWJGz24iFQVDszxoCRHl1hJBS', NULL, 'god', NULL, '2022-11-29 18:45:06', '2022-12-12 07:35:20'),
(2, 'poseidon', 'poseidon@dios.com', '2022-12-14 23:00:00', '$2y$10$9GweyxbsloxZaJp15.qREubCHUnheJE1hWmiGioBq7fmrdzLQvpSq', NULL, 'god', NULL, '2022-11-29 18:45:18', '2022-11-29 18:45:18'),
(3, 'hades', 'hades@dios.com', '2022-12-15 10:52:14', '$2y$10$2.UDSN4sihcY6GiGkXFfSuZtYj6LcUd1dqvnVvjNtcuq78.TfX0Qu', NULL, 'god', NULL, '2022-11-29 18:45:27', '2022-11-29 18:45:27'),
(38, 'Ryann Ledner', 'pmayer@example.org', NULL, '$2y$10$YBexk618T4j3VQgfwkRr2ex7NwH8bvCQAvz1wa4vO.DdqXsml5wsG', NULL, 'human', NULL, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(39, 'Miss Pearlie Wintheiser DDS', 'alanis48@example.com', NULL, '$2y$10$jjMJ2hbmI/7kSS7/UTMqQu9BHVNnr7HZEkyoCPfA2GUiLoy/AzzQe', NULL, 'human', NULL, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(40, 'Emiliano Schowalter V', 'crist.brennan@example.org', NULL, '$2y$10$hAumG82hZS8QbCx9Y2kNg.9plhI1BruK3xLnQeSRPzwcqoH6dmG0u', NULL, 'human', NULL, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(41, 'Jerel Fay', 'kennedi.keeling@example.net', NULL, '$2y$10$oELAZU.n5Ffdam5lXxxntOHrSmpZQQ4cyfKnSv7TcgCyuOQWOxUvC', NULL, 'human', NULL, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(42, 'Jasmin Bernier', 'tharber@example.net', NULL, '$2y$10$5H6CGfVHvy8I/4NmKYAhZ.BjqM2FnYcj8gLtyimYg8b.7xwDRmLRK', NULL, 'human', NULL, '2022-12-15 09:53:11', '2022-12-15 09:53:11'),
(43, 'Americo Sauer II', 'laurine81@example.org', NULL, '$2y$10$8kxT9agKA7xoE4QbS7T7dORTBNqM239F4xeYogY7pFa25BILkJbcK', NULL, 'human', NULL, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(44, 'Melyssa Kuphal', 'jacobi.toney@example.net', NULL, '$2y$10$Mrp/01Sx.InMX.MoTq2R9.GPHh32mMLWb0zuuyLYAf/1UWRu1Jdpe', NULL, 'human', NULL, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(45, 'Corbin Auer', 'qrenner@example.net', NULL, '$2y$10$urubqk6VTFSGkCIPhRweW.vv6yL0qviUG.c2KC9hpglFyowQbqkVC', NULL, 'human', NULL, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(46, 'Mr. Ernest Frami IV', 'qokuneva@example.com', NULL, '$2y$10$1r8iW8LfUEmj0zjQBYC.COMsYi3wVyEquCszmoJvvdhdmLCb0UGNO', NULL, 'human', NULL, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(47, 'Herbert Collier', 'sally28@example.com', NULL, '$2y$10$/SEN.bKXub08v9u06Qn7teScu/60Dyn.Ehx5UpcMOmYOYL2LEVyr6', NULL, 'human', NULL, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(48, 'Madie Denesik', 'ward.laron@example.org', NULL, '$2y$10$VTKgTE2rhBE9zWmbXEh2teUjALDkz4Q5L4Bez6UdUGrW4IaX2.Fda', NULL, 'human', NULL, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(49, 'Prof. Lesly Langworth', 'mosciski.norene@example.com', NULL, '$2y$10$D2rvF2c8HqDRMrZ6c2eMmeDyySWYyzn7GJGZ1rqmvrTRR3LLWIxUm', NULL, 'human', NULL, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(50, 'Clementina Kassulke', 'kcassin@example.org', NULL, '$2y$10$Fv4oSPQ89nl0vUkj35rNpOLdPzvr.qsRd4kv3PTsGRyZz5WqTdPVe', NULL, 'human', NULL, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(51, 'Kaia Thiel V', 'jessie.hermann@example.org', NULL, '$2y$10$bgWCWJRE0gjVuRZTvl/r1O3YSP4MlBKo1.7hipqrwCYc6oUVyLNtC', NULL, 'human', NULL, '2022-12-15 09:53:12', '2022-12-15 09:53:12'),
(52, 'Vladimir Tromp', 'pollich.grayce@example.com', NULL, '$2y$10$LtHU223s/Pr2ktlhY6gwc.7IBpEw8.v3AFH3TxtS7qqrO08dTlYca', NULL, 'human', NULL, '2022-12-15 09:53:13', '2022-12-15 09:53:13'),
(53, 'seiryuprueba', 'seiryubtc@gmail.com', '2022-12-15 09:59:04', '$2y$10$kKdv5VqYmx8U6LjcOVrfWOCxIuN56WXqk64qBW7m3nhnZ3Wqfg05K', NULL, 'human', NULL, '2022-12-15 09:57:55', '2022-12-15 09:59:04'),
(54, 'elhumano', 'seiryujp7@gmail.com', '2022-12-15 10:18:06', '$2y$10$NfdTVAULdZhcOymzlk4EHuJn0dPUg3bF5DnxP45RBQPQ1KqzCO5lC', NULL, 'human', NULL, '2022-12-15 10:17:51', '2022-12-15 10:19:00'),
(55, 'Clay Koss', 'kuhlman.tatyana@example.org', NULL, '$2y$10$sVbXxwYh7yAwohapb9vEKu995DoXIMRPVTAvpGvTOoANXZI1boMkW', NULL, 'human', NULL, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(56, 'Kristy Daugherty', 'vena16@example.net', NULL, '$2y$10$NfefAnaQElJgBAxGST5UhuDpylV3WIKTadghu5rUQpdnd9BHD2g.C', NULL, 'human', NULL, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(57, 'Prof. Annamae Kuphal', 'columbus.jacobi@example.net', NULL, '$2y$10$7wPe4MdaZcchWz03htE9nue8kZsel0YSG6mA0CD45sp2EttSSbw4C', NULL, 'human', NULL, '2022-12-15 10:20:13', '2022-12-15 10:20:13'),
(58, 'Kathlyn Casper IV', 'murray.marianne@example.net', NULL, '$2y$10$9WJDr0NUYiGCwqv2a5xmkuQS.gNWrYmDvrKV.GWT9o7bc0prOSp8u', NULL, 'human', NULL, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(59, 'Dr. Sharon Beier II', 'ismael.lubowitz@example.com', NULL, '$2y$10$u8Z5.lHjybhPSezeD1KjN.eTv37bXE/KqtjuGWF05lH7o5xIBwrmK', NULL, 'human', NULL, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(60, 'Myrl Torphy', 'ferry.cydney@example.net', NULL, '$2y$10$oi.b/iekSFPlAHUjNpuMNOAHdgrUVKh2lFe8ACFrHWA93nLW2BzQ6', NULL, 'human', NULL, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(61, 'Henriette Lubowitz', 'boehm.malcolm@example.net', NULL, '$2y$10$1IAWBQj.kQXdxmnBsMImD.EdN5gKsNnqqcMxrQsh5Dd.9Zc7UAMti', NULL, 'human', NULL, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(62, 'Amber Langworth', 'shaun77@example.org', NULL, '$2y$10$sagF0uvXoDBlxFqNnYunY.ZgTrBChanemjIXyCRJ6JeiE4j0LzlRO', NULL, 'human', NULL, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(63, 'Alexis Bailey', 'steuber.tyshawn@example.org', NULL, '$2y$10$nE7muIRJWPv7/HnviglBcOzcRD8SWP9lfZ/1FYXRTbsXpDS/CiBna', NULL, 'human', NULL, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(64, 'Joany Feest V', 'jacobi.florence@example.org', NULL, '$2y$10$yI1I2G50wxpqpO/OL4DnEOG1kSnxHe9da6zgMt9imKfEbq.vmxei.', NULL, 'human', NULL, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(65, 'Dr. Jorge Zemlak', 'sylvan.schumm@example.org', NULL, '$2y$10$Ys88gqXB5XDisLt77PfT.OXeJjZ2nCwOtjBFleC2xrlD4V7RJmQc.', NULL, 'human', NULL, '2022-12-15 10:20:14', '2022-12-15 10:20:14'),
(66, 'Prof. Alexandra Franecki MD', 'nkling@example.com', NULL, '$2y$10$QJXEhvztfJf.Vf3djaCcB.pNheIJXQso4w3dfrTG5iwH3q.5hsBHG', NULL, 'human', NULL, '2022-12-15 10:20:15', '2022-12-15 10:20:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_asignados`
--

CREATE TABLE `usuarios_asignados` (
  `idprueba` bigint(20) UNSIGNED NOT NULL,
  `idusuario` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios_asignados`
--

INSERT INTO `usuarios_asignados` (`idprueba`, `idusuario`) VALUES
(97, 46);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracion`
--

CREATE TABLE `valoracion` (
  `idprueba` bigint(20) UNSIGNED NOT NULL,
  `habilidad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `valoracion`
--

INSERT INTO `valoracion` (`idprueba`, `habilidad`) VALUES
(97, 'virtud'),
(98, 'nobleza'),
(99, 'sabiduria');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `atributes`
--
ALTER TABLE `atributes`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `atributes_name_unique` (`name`);

--
-- Indices de la tabla `atributes_users`
--
ALTER TABLE `atributes_users`
  ADD KEY `atributes_users_atributeid_foreign` (`atributeID`),
  ADD KEY `atributes_users_userid_foreign` (`userID`);

--
-- Indices de la tabla `eleccion`
--
ALTER TABLE `eleccion`
  ADD KEY `eleccion_idprueba_foreign` (`idprueba`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `human_data`
--
ALTER TABLE `human_data`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `human_data_protection_foreign` (`protection`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `prueba`
--
ALTER TABLE `prueba`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `puntual`
--
ALTER TABLE `puntual`
  ADD KEY `puntual_idprueba_foreign` (`idprueba`);

--
-- Indices de la tabla `resplibre`
--
ALTER TABLE `resplibre`
  ADD KEY `resplibre_idprueba_foreign` (`idprueba`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indices de la tabla `usuarios_asignados`
--
ALTER TABLE `usuarios_asignados`
  ADD PRIMARY KEY (`idprueba`,`idusuario`),
  ADD KEY `usuarios_asignados_idusuario_foreign` (`idusuario`);

--
-- Indices de la tabla `valoracion`
--
ALTER TABLE `valoracion`
  ADD KEY `valoracion_idprueba_foreign` (`idprueba`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `atributes`
--
ALTER TABLE `atributes`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `human_data`
--
ALTER TABLE `human_data`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT de la tabla `prueba`
--
ALTER TABLE `prueba`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `atributes_users`
--
ALTER TABLE `atributes_users`
  ADD CONSTRAINT `atributes_users_atributeid_foreign` FOREIGN KEY (`atributeID`) REFERENCES `atributes` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `atributes_users_userid_foreign` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `eleccion`
--
ALTER TABLE `eleccion`
  ADD CONSTRAINT `eleccion_idprueba_foreign` FOREIGN KEY (`idprueba`) REFERENCES `prueba` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `human_data`
--
ALTER TABLE `human_data`
  ADD CONSTRAINT `human_data_id_foreign` FOREIGN KEY (`ID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `human_data_protection_foreign` FOREIGN KEY (`protection`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `puntual`
--
ALTER TABLE `puntual`
  ADD CONSTRAINT `puntual_idprueba_foreign` FOREIGN KEY (`idprueba`) REFERENCES `prueba` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `resplibre`
--
ALTER TABLE `resplibre`
  ADD CONSTRAINT `resplibre_idprueba_foreign` FOREIGN KEY (`idprueba`) REFERENCES `prueba` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `usuarios_asignados`
--
ALTER TABLE `usuarios_asignados`
  ADD CONSTRAINT `usuarios_asignados_idprueba_foreign` FOREIGN KEY (`idprueba`) REFERENCES `prueba` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `usuarios_asignados_idusuario_foreign` FOREIGN KEY (`idusuario`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `valoracion`
--
ALTER TABLE `valoracion`
  ADD CONSTRAINT `valoracion_idprueba_foreign` FOREIGN KEY (`idprueba`) REFERENCES `prueba` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
