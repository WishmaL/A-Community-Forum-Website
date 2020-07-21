create database db_learn;
use db_learn;


CREATE TABLE users(
id INT(10) AUTO_INCREMENT,
   name VARCHAR(20),
   email VARCHAR(20),
   password VARCHAR(20),
   contact INT(10),
   roll ENUM('greatAdmin','admin','member'),
   PRIMARY KEY(id)
);

INSERT INTO users (name, email, password, contact, roll)
VALUES ('name1', 'name1@gmail.com', 'password1', 0111234561, 'greatAdmin'),
('name2', 'name2@gmail.com', 'password2', 0222234562, 'admin'),
('name3', 'name3@gmail.com', 'password3', 0333234563, 'member');


CREATE TABLE graphs(
id INT(10) AUTO_INCREMENT,
   userName varchar(20),
   title VARCHAR(20),
   iframe VARCHAR(100),
   description text(100),
   time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   admin_r tinyint(1),
   member_r tinyint(1),
   viewer_r tinyint(1),
   PRIMARY KEY(id)
);

INSERT INTO graphs (userName, title, iframe, description, admin_r, member_r, viewer_r)
VALUES ('name1', 'title2', 'iframe2', 'the description1', 1, 1, 0),
('name2', 'title3', 'iframe3', 'the description2', 1, 1, 1),
('name3', 'title4', 'iframe4', 'the description3', 1, 0, 0);


CREATE TABLE articles(
id INT(10) AUTO_INCREMENT,
   userName varchar(20),
   title VARCHAR(20),
   body TEXT(200),
   time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   admin_r tinyint(1),
   admin_w tinyint(1),
   member_r tinyint(1),
   member_w tinyint(1),
   viewer_r tinyint(1),
   PRIMARY KEY(id)
);


INSERT INTO articles (userName, title, body, admin_r, admin_w, member_r, member_w, viewer_r)
VALUES ('name1', 'title1', 'body1', 1, 1, 0, 0, 0),
('name2', 'title3', 'body2', 1, 1, 1, 0, 0),
('name3', 'title4', 'body3', 1, 1, 1, 1, 1);


CREATE TABLE articles_pics(
id INT(10) AUTO_INCREMENT,
   articleId INT(10),
   article_pic TEXT(50),
   PRIMARY KEY(id)
);

ALTER TABLE articles_pics 
ADD FOREIGN KEY (articleId) REFERENCES articles(id)
ON DELETE CASCADE;

INSERT INTO articles_pics (article_id,article_pic)
VALUES ('2', 'pic1'),
('1', 'pic2' ),
('3', 'pic3');


CREATE TABLE notices(
id INT(10) AUTO_INCREMENT,
   userName VARCHAR(20),
   title VARCHAR(20),
   body TEXT(100),
   time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   admin_r TINYINT(1),
   admin_w TINYINT(1),
   member_r TINYINT(1),
   member_w TINYINT(1),
   viewer_r TINYINT(1),
   PRIMARY KEY(id)
);

INSERT INTO notices (userName,title,body, admin_r, admin_w, member_r, member_w, viewer_r)
VALUES ('name1', 'title1', 'body1', 1, 1, 0, 0, 1),
('name2', 'title2', 'body2', 1, 1, 1, 0, 1),
('name3', 'title3', 'body3', 1, 1, 1, 1, 1);


CREATE TABLE notices_pics(
id INT(10) AUTO_INCREMENT,
   noticeId INT(10),
   notice_pic TEXT(50),
   PRIMARY KEY(id)
);

ALTER TABLE notices_pics 
ADD FOREIGN KEY (noticeId) REFERENCES notices(id)
ON DELETE CASCADE;

INSERT INTO notices_pics (noticeId,notice_pic)
VALUES ('1', 'pic1'),
('1', 'pic2' ),
('2', 'pic3');


CREATE TABLE comments(
id INT(10) AUTO_INCREMENT,
   articleId INT,
   userName VARCHAR(20),
   thread TEXT(50),
   time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY(id)
);

INSERT INTO comments (articleId, userName, thread)
VALUES (8, 'name1', 'thread1'),
(13, 'name1', 'thread2'),
(13, 'name2', 'thread3');

ALTER TABLE comments
ADD FOREIGN KEY (articleId) REFERENCES articles(id)
ON DELETE CASCADE;

CREATE TABLE replies(
id INT(10) AUTO_INCREMENT,
   commentId INT(10),
   userName varchar(20),
   reply TEXT(50),
   PRIMARY KEY(id)
);

ALTER TABLE replies 
ADD FOREIGN KEY (commentId) REFERENCES comments(id)
ON DELETE CASCADE;

INSERT INTO replies (commentId, userName, reply)
VALUES (4, 'name1','reply1'),
(5, 'name2','reply2'),
(6, 'name1','reply3');

CREATE TABLE timeline(
id INT AUTO_INCREMENT,
   topic VARCHAR(20),
   description VARCHAR(100),
   date date,
   PRIMARY KEY(id)
);

INSERT INTO timeline (topic, description, date)
VALUES ('topic1', 'description1', '2020-05-05'),
('topic2', 'description2', '2020-05-06'),
('topic3', 'description3', '2020-05-07');

