DROP DATABASE IF EXISTS Shortener;
CREATE DATABASE Shortener DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_swedish_ci;
USE Shortener
CREATE TABLE links (
ID int NOT NULL AUTO_INCREMENT,
address_long  VARCHAR(50),
address_short VARCHAR(50),
description VARCHAR(255),
lisatty TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (ID)
)ENGINE=innoDB;

