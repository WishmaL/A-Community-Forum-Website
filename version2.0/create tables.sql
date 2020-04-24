CREATE TABLE users(
id INT(10) AUTO_INCREMENT,
   name VARCHAR(20),
   email VARCHAR(20),
   contact VARCHAR(10),
   roll ENUM('greatAdmin','admin','member'),
   PRIMARY KEY(id)
);


CREATE TABLE graphs(
id INT(10) AUTO_INCREMENT,
   creator_id INT(10),
   title VARCHAR(20),
   iframe VARCHAR(50),
   time DATETIME,
   admin_r BOOLEAN,
   member_r BOOLEAN,
   viewer_r BOOLEAN,
   PRIMARY KEY(id)
);

INSERT INTO graphs (creator_id,title,iframe, admin_r, member_r, viewer_r)
VALUES ('2', 'title2', 'iframe2', 1, 1, 0),
('2', 'title3', 'iframe3', 1, 1, 1),
('3', 'title4', 'iframe4', 1, 0, 0);

-- referenced coloumn must be primary key
ALTER TABLE graphs 
ADD FOREIGN KEY (creator_id) REFERENCES users(id);


-- ALTER TABLE dept_manager
-- ADD FOREIGN KEY (emp_no) REFERENCES employees(emp_no),
-- ADD FOREIGN KEY(dept_no) REFERENCES departments(dept_no);
-- ////

CREATE TABLE articles(
id INT(10) AUTO_INCREMENT,
   creator_id INT(10),
   title VARCHAR(20),
   body TEXT(50),
   time DATETIME,
   admin_r BOOLEAN,
   admin_w BOOLEAN,
   member_r BOOLEAN,
   member_w BOOLEAN,
   viewer_r BOOLEAN,
   PRIMARY KEY(id)
);


INSERT INTO articles (creator_id,title,body, admin_r, admin_w, member_r, member_w, viewer_r)
VALUES ('2', 'title1', 'body1', 1, 1, 0, 0, 0),
('1', 'title3', 'body2', 1, 1, 1, 0, 0),
('3', 'title4', 'body3', 1, 1, 1, 1, 1);


CREATE TABLE articles_pics(
id INT(4) AUTO_INCREMENT,
   article_id INT(10),
   article_pic TEXT(30),
   PRIMARY KEY(id)
);

INSERT INTO articles_pics (article_id,article_pic)
VALUES ('2', 'pic1'),
('1', 'pic2' ),
('3', 'pic3');

ALTER TABLE articles 
ADD FOREIGN KEY (creator_id) REFERENCES users(id);

ALTER TABLE articles_pics 
ADD FOREIGN KEY (article_id) REFERENCES articles(id);

CREATE TABLE notices(
id INT(10) AUTO_INCREMENT,
   creator_id INT(10),
   title VARCHAR(20),
   body TEXT(50),
   time DATETIME,
   admin_r BOOLEAN,
   admin_w BOOLEAN,
   member_r BOOLEAN,
   member_w BOOLEAN,
   viewer_r BOOLEAN,
   PRIMARY KEY(id)
);

INSERT INTO notices (creator_id,title,body, admin_r, admin_w, member_r, member_w, viewer_r)
VALUES ('1', 'title1', 'body1', 1, 1, 0, 0, 1),
('2', 'title2', 'body2', 1, 1, 1, 0, 1),
('3', 'title3', 'body3', 1, 1, 1, 1, 1);

-- make sure that parent table also have tha data


CREATE TABLE notices_pics(
id INT(4) AUTO_INCREMENT,
   notice_id INT(10),
   notice_pic TEXT(30),
   PRIMARY KEY(id)
);

INSERT INTO notices_pics (notice_id,notice_pic)
VALUES ('1', 'pic1'),
('1', 'pic2' ),
('2', 'pic3');



ALTER TABLE notices 
ADD FOREIGN KEY (creator_id) REFERENCES users(id);

ALTER TABLE notices_pics 
ADD FOREIGN KEY (notice_id) REFERENCES notices(id);


CREATE TABLE comments(
id INT(10) AUTO_INCREMENT,
   creator_id INT(10),
   article_id INT,
   thread TEXT(50),
   time DATETIME,
   admin_r BOOLEAN,
   admin_w BOOLEAN,
   member_r BOOLEAN,
   member_w BOOLEAN,
   viewer_r BOOLEAN,
   PRIMARY KEY(id)
);

INSERT INTO comments (creator_id,article_id,thread, admin_r, admin_w, member_r, member_w, viewer_r)
VALUES ('1', '1', 'thread1', 1, 1, 0, 0, 1),
('2', '1', 'thread2', 1, 1, 1, 0, 1),
('3', '2', 'thread3', 1, 1, 1, 1, 1);



CREATE TABLE replies(
id INT(4) AUTO_INCREMENT,
   comment_id INT(10),
   reply TEXT(30),
   replier_id INT(10),
   PRIMARY KEY(id)
);

INSERT INTO replies (comment_id,reply,replier_id)
VALUES ('1', 'reply1','1'),
('1', 'reply2','2' ),
('2', 'reply3','2');

ALTER TABLE comments 
ADD FOREIGN KEY (creator_id) REFERENCES users(id),
ADD FOREIGN KEY (article_id) REFERENCES articles(id);

ALTER TABLE replies 
ADD FOREIGN KEY (comment_id) REFERENCES comments(id),
ADD FOREIGN KEY (replier_id) REFERENCES users(id);

-- insert the data

INSERT INTO users (name,email,contact,roll)
VALUES ('name1', 'name1@gmail.com', '11122', 'greatAdmin'),
('name2', 'name2@gmail.com', '11322', 'admin'),
('name3', 'name3@gmail.com', '15422', 'member');



