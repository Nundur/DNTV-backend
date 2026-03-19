-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Már 19. 14:00
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `_streaming`
--
CREATE DATABASE IF NOT EXISTS `_streaming` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `_streaming`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `actors`
--

CREATE TABLE `actors` (
  `actorid` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `description` varchar(255) NOT NULL,
  `movieid` int(11) NOT NULL,
  `showid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `feedbacks`
--

CREATE TABLE `feedbacks` (
  `feedbackid` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `feedbacks`
--

INSERT INTO `feedbacks` (`feedbackid`, `subject`, `category`, `message`) VALUES
(1, 'anyád', 'Bug report', 'tul tagadt. És roman'),
(2, 'anyád', 'Bug report', 'tul tagadt. És roman'),
(3, 'anyád', 'Bug report', 'tul tagadt. És roman'),
(4, 'anyád', 'Bug report', 'tul tagadt. És roman'),
(5, 'anyád', 'Bug report', 'tul tagadt. És roman'),
(6, 'anyád', 'Bug report', 'tul tagadt. És roman');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `movies`
--

CREATE TABLE `movies` (
  `movieid` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `studio` varchar(255) NOT NULL,
  `imdbrating` double NOT NULL,
  `pgrating` varchar(255) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `quality` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `movies`
--

INSERT INTO `movies` (`movieid`, `title`, `description`, `studio`, `imdbrating`, `pgrating`, `cover`, `file`, `quality`) VALUES
(23, 'Avengers-Endgame', 'Avengers: Endgame (2019) is the climactic 22nd Marvel film where the remaining heroes unite to reverse Thanos’s \"snap\" that wiped out half of all life', 'TriStar Pictures & Sony Pictures Entertainment', 8.4, 'pg-13', '2026-03-18-avangers.png', '2026-03-18-avangers.mp4', '4K'),
(24, 'Baby Driver', 'Baby Driver is a 2017 action thriller film written and directed by Edgar Wright. It stars Ansel Elgort as Baby, a getaway driver seeking freedom from a life of crime with his girlfriend Debora (Lily James). Kevin Spacey, Jon Hamm, Eiza González, Jon Bernt', 'Big Talk Productions', 7.5, 'R', '2026-03-18-babydriver.jpeg', '2026-03-18-babydriver.mp4', '4K'),
(25, 'Dune: Part One', 'A mythic and emotionally charged hero\'s journey, \"Dune\" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the futur', 'Warner Bros.', 8, 'PG-13', '2026-03-18-dune.png', '2026-03-18-dune.mp4', '4K'),
(26, 'Limitless', 'A mysterious pill that enables the user to access 100% of his brain\'s abilities transforms a struggling writer into a financial wizard, but it also puts him in a new world with many dangers. An action-thriller about a writer who takes an experimental drug', 'Relativity Media', 7.4, 'PG-13', '2026-03-18-limitless.jpg', '2026-03-18-limitless.mp4', '4K'),
(27, 'The Matrix', 'Thomas Anderson, a computer programmer living a double life as the hacker \"Neo,\" discovers that the world around him is a simulated reality called the Matrix, controlled by intelligent machines that harvest human energy.', 'Warner Bros.', 8.7, 'R', '2026-03-18-matrix.jpeg', '2026-03-18-matrix.mp4', '4K'),
(28, 'One Battle After Another', 'The film\'s ensemble cast is led by Leonardo DiCaprio, Sean Penn, Benicio del Toro, Regina Hall, Teyana Taylor, and Chase Infiniti, in her film debut. The story follows an ex-revolutionary who is forced back into his former combative lifestyle as he is pur', 'Warner Bros.', 7.7, 'R', '2026-03-18-OneBattleAfterAnother.png', '2026-03-18-OneBattleAfterAnother.mp4', '4K'),
(29, 'The Creator', 'Set in 2070, 15 years after artificial intelligence (AI) set off a nuclear detonation in Los Angeles, which started a war of humans against AI, a former special forces agent is recruited to hunt down and kill the \"Creator\", who has developed a mysterious ', '20th Century Studios', 6.7, 'PG-13', '2026-03-18-TheCreator.png', '2026-03-18-TheCreator.mp4', '4K'),
(30, 'The Killer', 'Solitary, cold, methodical and unencumbered by scruples or regrets, a killer waits in the shadows, watching for his next target. Yet, the longer he waits, the more he thinks he\'s losing his mind, if not his cool.', 'Netflix Studios', 6.7, 'R', '2026-03-18-TheKiller.png', '2026-03-18-TheKiller.mp4', '4K');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `shows`
--

CREATE TABLE `shows` (
  `showid` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `studio` varchar(255) NOT NULL,
  `imdbrating` double NOT NULL,
  `pgrating` varchar(255) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `quality` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `shows`
--

INSERT INTO `shows` (`showid`, `title`, `description`, `studio`, `imdbrating`, `pgrating`, `cover`, `quality`) VALUES
(12, 'A Knight Of The Seven Kingdoms', 'A century before the events of \"Game of Thrones,\" two unlikely heroes wander Westeros. In an adaption of George R. R. Martin\'s novella \"The Hedge Knight,\" a young and naive but courageous knight, Ser Duncan the Tall, and his diminutive squire, Egg, face a', 'HBO', 8.8, 'TV-MA', '2026-03-18-AKnightOfTheSevenKingdoms.png', 'HD'),
(13, 'Breaking Bad', 'Created by Vince Gilligan, the series follows the exploits of Walter White, a modest high school chemistry teacher, who discovers a new purpose in life when he learns he has terminal cancer and turns to a life of crime to provide for his family.', 'Sony Pictures Television', 9.5, 'TV-MA', '2026-03-18-breakingbed.png', 'HD'),
(14, 'Family Guy', 'Family Guy is an American animated sitcom created by Seth MacFarlane for the Fox Broadcasting Company. The series premiered on January 31, 1999, following Super Bowl XXXIII, with the rest of the first season airing from April 11, 1999. The show centers ar', '20th Century Studios', 8.4, 'TV-14', '2026-03-18-familyguy.png', 'HD'),
(15, 'Game of Thrones', 'Game of Thrones describes a long struggle for power between noble families while a threat looms over their kingdoms, an external enemy that destroys everything in its path: the White Walkers. The series takes place on two continents, Westeros to the west,', 'HBO', 9.2, 'TV-MA', '2026-03-18-gamethrouse.png', '4K'),
(16, 'Shogun', 'shogun, in Japanese history, a military ruler. The title was first used during the Heian period, when it was occasionally bestowed on a general after a successful campaign.', 'FX Studios', 8.6, 'TV-MA', '2026-03-18-ShogunTvShow.jpg', '4K'),
(17, 'Silo', 'Set in a dystopian future where a community exists in a giant underground silo comprising 144 levels, it stars Rebecca Ferguson as Juliette Nichols, an engineer who becomes embroiled in the mysteries of its past and present.', 'AMC Studios', 8.1, 'TV-MA', '2026-03-18-silo.jpg', 'HD'),
(18, 'The Boys', 'The series follows the eponymous Boys, led by Billy Butcher, a group of vigilantes looking to bring down Vought International and expose its corrupt superheroes. When his girlfriend is accidentally killed by A-Train, Hughie Campbell joins the Boys to get ', 'Sony Pictures', 8.6, 'TV-MA', '2026-03-18-Theboyscover.jpg', '8K'),
(23, 'Paradise', 'Paradise is set in a serene community inhabited by some of the world\'s most prominent individuals. But this tranquility explodes when a shocking murder occurs and a high-stakes investigation unfolds.', '20th Century Studios', 7.9, 'TV-MA', '2026-03-18-nandihokikep.png', 'HD');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `show_episodes`
--

CREATE TABLE `show_episodes` (
  `episodeid` int(11) UNSIGNED NOT NULL,
  `showid` int(10) NOT NULL,
  `season` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `imdbrating` double NOT NULL,
  `pgrating` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `quality` varchar(255) NOT NULL,
  `episode` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `show_episodes`
--

INSERT INTO `show_episodes` (`episodeid`, `showid`, `season`, `title`, `description`, `imdbrating`, `pgrating`, `file`, `quality`, `episode`) VALUES
(21, 12, '1', 'A Knight Of The Seven Kingdoms', 'A century before the events of \"Game of Thrones,\" two unlikely heroes wander Westeros. In an adaption of George R. R. Martin\'s novella \"The Hedge Knight,\" a young and naive but courageous knight, Ser Duncan the Tall, and his diminutive squire, Egg, face a', 8.8, 'TV-MA', '2026-03-18-AKnightOfTheSevenKingdomsS1E1.mp4', 'HD', 1),
(22, 12, '1', 'A Knight Of The Seven Kingdoms', 'A century before the events of \"Game of Thrones,\" two unlikely heroes wander Westeros. In an adaption of George R. R. Martin\'s novella \"The Hedge Knight,\" a young and naive but courageous knight, Ser Duncan the Tall, and his diminutive squire, Egg, face a', 8.8, 'TV-MA', '2026-03-18-AKnightOfTheSevenKingdomsS1E2.mp4', 'HD', 2),
(23, 12, '1', 'A Knight Of The Seven Kingdoms', 'A century before the events of \"Game of Thrones,\" two unlikely heroes wander Westeros. In an adaption of George R. R. Martin\'s novella \"The Hedge Knight,\" a young and naive but courageous knight, Ser Duncan the Tall, and his diminutive squire, Egg, face a', 8.8, 'TV-MA', '2026-03-18-AKnightOfTheSevenKingdomsS1E3.mp4', 'HD', 3),
(24, 13, '1', 'Breaking Bad', 'Created by Vince Gilligan, the series follows the exploits of Walter White, a modest high school chemistry teacher, who discovers a new purpose in life when he learns he has terminal cancer and turns to a life of crime to provide for his family.', 9.5, 'TV-MA', '2026-03-18-breakingbadS1E1.mp4', 'HD', 1),
(25, 13, '1', 'Breaking Bad', 'Created by Vince Gilligan, the series follows the exploits of Walter White, a modest high school chemistry teacher, who discovers a new purpose in life when he learns he has terminal cancer and turns to a life of crime to provide for his family.', 9.5, 'TV-MA', '2026-03-18-breakingbadS1E2.mp4', 'HD', 2),
(26, 14, '1', 'Family Guy', 'Family Guy is an American animated sitcom created by Seth MacFarlane for the Fox Broadcasting Company. The series premiered on January 31, 1999, following Super Bowl XXXIII, with the rest of the first season airing from April 11, 1999. The show centers ar', 8.4, 'TV-14', '2026-03-18-familyguyS1E1.mp4', 'HD', 1),
(27, 14, '1', 'Family Guy', 'Family Guy is an American animated sitcom created by Seth MacFarlane for the Fox Broadcasting Company. The series premiered on January 31, 1999, following Super Bowl XXXIII, with the rest of the first season airing from April 11, 1999. The show centers ar', 8.4, 'TV-14', '2026-03-18-familyguyS1E2.mp4', 'HD', 2),
(28, 14, '1', 'Family Guy', 'Family Guy is an American animated sitcom created by Seth MacFarlane for the Fox Broadcasting Company. The series premiered on January 31, 1999, following Super Bowl XXXIII, with the rest of the first season airing from April 11, 1999. The show centers ar', 8.4, 'TV-14', '2026-03-18-familyguyS1E3.mp4', 'HD', 3),
(29, 14, '1', 'Family Guy', 'Family Guy is an American animated sitcom created by Seth MacFarlane for the Fox Broadcasting Company. The series premiered on January 31, 1999, following Super Bowl XXXIII, with the rest of the first season airing from April 11, 1999. The show centers ar', 8.4, 'TV-14', '2026-03-18-familyguyS1E4.mp4', 'HD', 4),
(30, 15, '1', 'Game of Thrones', 'Game of Thrones describes a long struggle for power between noble families while a threat looms over their kingdoms, an external enemy that destroys everything in its path: the White Walkers. The series takes place on two continents, Westeros to the west,', 9.2, 'TV-MA', '2026-03-18-gotS1E1.mp4', '4K', 1),
(31, 15, '1', 'Game of Thrones', 'Game of Thrones describes a long struggle for power between noble families while a threat looms over their kingdoms, an external enemy that destroys everything in its path: the White Walkers. The series takes place on two continents, Westeros to the west,', 9.2, 'TV-MA', '2026-03-18-gotS1E2.mp4', '4K', 2),
(32, 15, '1', 'Game of Thrones', 'Game of Thrones describes a long struggle for power between noble families while a threat looms over their kingdoms, an external enemy that destroys everything in its path: the White Walkers. The series takes place on two continents, Westeros to the west,', 9.2, 'TV-MA', '2026-03-18-gotS1E3.mp4', '4K', 3),
(33, 16, '1', 'Shogun', 'shogun, in Japanese history, a military ruler. The title was first used during the Heian period, when it was occasionally bestowed on a general after a successful campaign.', 8.6, 'TV-MA', '2026-03-18-ShogunS1E1.mp4', '4K', 1),
(34, 16, '1', 'Shogun', 'shogun, in Japanese history, a military ruler. The title was first used during the Heian period, when it was occasionally bestowed on a general after a successful campaign.', 8.6, 'TV-MA', '2026-03-18-Shogun S1E2.mp4', '4K', 2),
(35, 17, '1', 'Silo', 'Set in a dystopian future where a community exists in a giant underground silo comprising 144 levels, it stars Rebecca Ferguson as Juliette Nichols, an engineer who becomes embroiled in the mysteries of its past and present.', 8.1, 'TV-MA', '2026-03-18-SiloS1E1.mp4', 'HD', 1),
(36, 17, '1', 'Silo', 'Set in a dystopian future where a community exists in a giant underground silo comprising 144 levels, it stars Rebecca Ferguson as Juliette Nichols, an engineer who becomes embroiled in the mysteries of its past and present.', 8.1, 'TV-MA', '2026-03-18-SiloS1E2.mp4', 'HD', 2),
(37, 18, '1', 'The Boys', 'The series follows the eponymous Boys, led by Billy Butcher, a group of vigilantes looking to bring down Vought International and expose its corrupt superheroes. When his girlfriend is accidentally killed by A-Train, Hughie Campbell joins the Boys to get ', 8.6, 'TV-MA', '2026-03-18-TheBoysS1E1.mp4', '8K', 1),
(38, 18, '1', 'The Boys', 'The series follows the eponymous Boys, led by Billy Butcher, a group of vigilantes looking to bring down Vought International and expose its corrupt superheroes. When his girlfriend is accidentally killed by A-Train, Hughie Campbell joins the Boys to get ', 8.6, 'TV-MA', '2026-03-18-TheBoysS1E2.mp4', '8K', 2),
(39, 19, '2', 'The Boys', 'On the run from the law, they struggle to fight back against the Superheroes. As Vought, the company that manages the heroes, cashes in on the panic over the threat of Supervillains, and a new hero, Stormfront, shakes up the company and challenges an alre', 8.6, 'TV-MA', '2026-03-18-TheBoysS2E1.mp4', '8K', 1),
(40, 19, '2', 'The Boys', 'On the run from the law, they struggle to fight back against the Superheroes. As Vought, the company that manages the heroes, cashes in on the panic over the threat of Supervillains, and a new hero, Stormfront, shakes up the company and challenges an alre', 8.6, 'TV-MA', '2026-03-18-TheBoysS2E2.mp4', '8K', 2),
(41, 19, '2', 'The Boys', 'On the run from the law, they struggle to fight back against the Superheroes. As Vought, the company that manages the heroes, cashes in on the panic over the threat of Supervillains, and a new hero, Stormfront, shakes up the company and challenges an alre', 8.6, 'TV-MA', '2026-03-18-TheBoysS2E3.mp4', '8K', 3),
(42, 20, '3', 'The Boys', 'In the third season, one year after the Stormfront scandal, The Boys work for Victoria Neuman (Claudia Doumit)\'s Bureau of Superhero Affairs to apprehend problematic Supes, having been at peace with The Seven; Butcher and Homelander itch to turn this peac', 8.6, 'TV-MA', '2026-03-18-TheBoysS3E1.mp4', '4K', 1),
(43, 20, '3', 'The Boys', 'In the third season, one year after the Stormfront scandal, The Boys work for Victoria Neuman (Claudia Doumit)\'s Bureau of Superhero Affairs to apprehend problematic Supes, having been at peace with The Seven; Butcher and Homelander itch to turn this peac', 8.6, 'TV-MA', '2026-03-18-TheBoysS3E2.mp4', '4K', 2),
(44, 20, '3', 'The Boys', 'In the third season, one year after the Stormfront scandal, The Boys work for Victoria Neuman (Claudia Doumit)\'s Bureau of Superhero Affairs to apprehend problematic Supes, having been at peace with The Seven; Butcher and Homelander itch to turn this peac', 8.6, 'TV-MA', '2026-03-18-TheBoysS3E3.mp4', '4K', 3),
(45, 21, '4', 'The Boys', 'With only months to live, Butcher has lost his position as leader of The Boys, who are fed up with his lies, and must find a way to work with them if they want to save the world before it\'s too late.', 8.6, 'TV-MA', '2026-03-18-TheBoysS4E1.mp4', '4K', 1),
(46, 21, '4', 'The Boys', 'With only months to live, Butcher has lost his position as leader of The Boys, who are fed up with his lies, and must find a way to work with them if they want to save the world before it\'s too late.', 8.6, 'TV-MA', '2026-03-18-TheBoysS4E2.mp4', '4K', NULL),
(47, 22, '5', 'The Boys', 'In the season, the world is dominated by Homelander and Annie January has formed a resistance to Homelander while the rest of the team is scattered. But when Billy Butcher reappears, ready to use the virus to wipe out the Supes of the world, he sets in mo', 8.6, 'TV-MA', '2026-03-18-TheBoysS5E1.mp4', '4K', NULL),
(48, 22, '5', 'The Boys', 'In the season, the world is dominated by Homelander and Annie January has formed a resistance to Homelander while the rest of the team is scattered. But when Billy Butcher reappears, ready to use the virus to wipe out the Supes of the world, he sets in mo', 8.6, 'TV-MA', '2026-03-18-TheBoysS5E2.mp4', '4K', NULL),
(49, 23, '1', 'Paradise', 'Paradise is set in a serene community inhabited by some of the world\'s most prominent individuals. But this tranquility explodes when a shocking murder occurs and a high-stakes investigation unfolds.', 7.9, 'TV-MA', '2026-03-18-ParadiseS1E1.mp4', 'HD', NULL),
(50, 23, '1', 'Paradise', 'Paradise is set in a serene community inhabited by some of the world\'s most prominent individuals. But this tranquility explodes when a shocking murder occurs and a high-stakes investigation unfolds.', 7.9, 'TV-MA', '2026-03-18-ParadiseS1E2.mp4', 'HD', NULL),
(51, 24, '2', 'Paradise', 'Season 2 of the Hulu Original post-apocalyptic political thriller Paradise was picked up on February 20, 2025. It premiered with the first three episodes on February 23, 2026, with new episodes dropping weekly thereafter on Hulu and Hulu on Disney+ for bu', 7.9, 'TV-MA', '2026-03-18-ParadiseS2E1.mp4', 'HD', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `show_seasons`
--

CREATE TABLE `show_seasons` (
  `showid` int(10) UNSIGNED NOT NULL,
  `seasonid` int(11) NOT NULL,
  `seasonrating` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `userid` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `watched_episodeid` int(11) NOT NULL,
  `watched_movieid` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`userid`, `email`, `psw`, `username`, `role`, `watched_episodeid`, `watched_movieid`) VALUES
(12, 'admin', '$2b$10$2n.iynitioDN3WbZEkw4p.kFDVmsqLzMJmafgwYB17lQRQ8qkPRuq', 'admin1', 1, 0, 0),
(29, 'email', '$2b$10$5CP7DHNj/rzhc9do9nrkb.9QMy71cDi/Octkf9modkiMcHO3eatdi', 'username', 0, 0, 0),
(30, 'nandihoki', '$2b$10$tyTFFO2ixf43t218p8FynON8tFGmKLSa/fSrKB58avRSKk0uupYBm', 'telefon', 0, 0, 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`actorid`);

--
-- A tábla indexei `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`feedbackid`);

--
-- A tábla indexei `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movieid`);

--
-- A tábla indexei `shows`
--
ALTER TABLE `shows`
  ADD PRIMARY KEY (`showid`);

--
-- A tábla indexei `show_episodes`
--
ALTER TABLE `show_episodes`
  ADD PRIMARY KEY (`episodeid`);

--
-- A tábla indexei `show_seasons`
--
ALTER TABLE `show_seasons`
  ADD PRIMARY KEY (`showid`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `actors`
--
ALTER TABLE `actors`
  MODIFY `actorid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `feedbackid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `movies`
--
ALTER TABLE `movies`
  MODIFY `movieid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT a táblához `shows`
--
ALTER TABLE `shows`
  MODIFY `showid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT a táblához `show_episodes`
--
ALTER TABLE `show_episodes`
  MODIFY `episodeid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT a táblához `show_seasons`
--
ALTER TABLE `show_seasons`
  MODIFY `showid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `show_seasons`
--
ALTER TABLE `show_seasons`
  ADD CONSTRAINT `show_seasons_showid_foreign` FOREIGN KEY (`showid`) REFERENCES `shows` (`showid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
