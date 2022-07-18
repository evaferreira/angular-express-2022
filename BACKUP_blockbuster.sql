-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-07-2022 a las 00:33:07
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blockbuster`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autor`
--

CREATE TABLE `autor` (
  `id` int(11) NOT NULL,
  `nombreCompleto` varchar(150) DEFAULT NULL,
  `codigoPais` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `autor`
--

INSERT INTO `autor` (`id`, `nombreCompleto`, `codigoPais`) VALUES
(1, 'Radcliffe', 'UK'),
(2, 'Rice', 'US'),
(3, 'Sábato', 'AR'),
(4, 'King', 'US'),
(5, 'Larsson', 'SE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(200) DEFAULT NULL,
  `precio` int(6) DEFAULT NULL,
  `portada` varchar(200) DEFAULT NULL,
  `autorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `precio`, `portada`, `autorId`) VALUES
(1, 'Harry Potter 1', 850, '/images/portadas/potter1.jpg', 1),
(2, 'Harry Potter 2', 9000, '/images/portadas/potter1.jpg', 1),
(3, 'Harry Potter 3', 238, '/images/portadas/it-king.jpg', 1),
(4, 'La Cúpula', 331, '/images/portadas/entrevista-con-el-vampiro.jpg', 3),
(5, 'Entrevista con el vampiro', 4562, '/images/portadas/entrevista-con-el-vampiro.jpg', 2),
(6, 'IT', 1265, '/images/portadas/it-king.jpg', 4),
(7, 'Carrie', 561, '/images/portadas/potter1.jpg', 4),
(8, 'La niebla', 9823, '/images/portadas/potter1.jpg', 4),
(9, 'Misery', 3419, '/images/portadas/entrevista-con-el-vampiro.jpg', 4),
(10, 'Lestat', 4607, '/images/portadas/it-king.jpg', 2),
(11, 'Harry Potter 6', 540, '/images/portadas/potter1.jpg', 1),
(12, 'Millennium', 8740, '/images/portadas/it-king.jpg', 5),
(13, 'Witching hour', 217, '/images/portadas/it-king.jpg', 2),
(14, 'Reina de los condenados', 920, '/images/portadas/potter1.jpg', 2),
(15, 'El Resplandor', 373, '/images/portadas/entrevista-con-el-vampiro.jpg', 4),
(16, 'Harry Potter 5', 1375, '/images/portadas/it-king.jpg', 1),
(17, 'lkajsdf', 34234, '', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autorId` (`autorId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autor`
--
ALTER TABLE `autor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `libros_ibfk_1` FOREIGN KEY (`autorId`) REFERENCES `autor` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
