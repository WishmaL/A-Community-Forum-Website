use db_learn_del;

delimiter $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `addArticleProcedure`(
IN _id int(16),
in _userName varchar(20),
in _title varchar(20),
in _body text,
in _admin_r tinyint,
in _admin_w tinyint,
in _member_r tinyint,
in _member_w tinyint,
in _viewer_r tinyint
)
BEGIN
				insert into articles (id, userName, title, body, admin_r, admin_w, member_r, member_w, viewer_r)
				values(_id, _userName, _title, _body, _admin_r, _admin_w, _member_r, _member_w, _viewer_r); 
			
				select _id as'id';
END$$



CREATE DEFINER=`root`@`localhost` PROCEDURE `addCommentProcedure`(
IN _id int(16),
in _articleId varchar(20),
in _thread text(100),
in _userName varchar(20)

)
BEGIN
				insert into comments (id, articleId, thread, userName)
				values(_id, _articleId, _thread, _userName); 
			
				select _id as'id';
END$$




CREATE DEFINER=`root`@`localhost` PROCEDURE `addGraphProcedure`(
IN _id int(16),
in _userName varchar(20),
in _title varchar(20),
in _iframe text,
in _description text,
in _admin_r tinyint,
in _member_r tinyint,
in _viewer_r tinyint
)
BEGIN
				insert into graphs (id, userName, title, iframe, description, admin_r, member_r, viewer_r)
				values(_id, _userName, _title, _iframe, _description, _admin_r, _member_r, _viewer_r); 
			
				select _id as'id';
END$$



CREATE DEFINER=`root`@`localhost` PROCEDURE `addNoticePicProcedure`(
IN _id int(10),
in _noticeId varchar(20),
in _noticePic varchar(50)
)
BEGIN
				insert into notices (id, noticeId, noticePic)
				values(_id, _noticeId, _noticePic); 
			
				select _id as'id';
END$$




CREATE DEFINER=`root`@`localhost` PROCEDURE `addNoticeProcedure`(
IN _id int(10),
in _userName varchar(20),
in _title varchar(20),
in _body text,
in _admin_r tinyint,
in _admin_w tinyint,
in _member_r tinyint,
in _member_w tinyint,
in _viewer_r tinyint
)
BEGIN
				insert into notices (id, userName, title, body, admin_r, admin_w, member_r, member_w, viewer_r)
				values(_id, _userName, _title, _body, _admin_r, _admin_w, _member_r, _member_w, _viewer_r); 
			
				select _id as'id';
END$$



CREATE DEFINER=`root`@`localhost` PROCEDURE `addReplyProcedure`(
in _id int(11),
in _userName varchar(100),
in _commentId int(10),
in _reply text(100)

)
BEGIN
				insert into replies (id, userName, commentId, reply)
				values(_id, _userName, _commentId, _reply); 
                select _reply as'reply';
END$$




CREATE DEFINER=`root`@`localhost` PROCEDURE `addTimelineProcedure`(
IN _id int(16),
in _topic varchar(20),
in _description text,
in _date date
)
BEGIN
				insert into timeline (id, topic, description, date)
				values(_id, _topic, _description, _date); 
			
				select _id as'id';
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `addUserprocedure`(
IN _id int(16),
in _Name varchar(20),
in _email varchar(20),
in _password text,
in _contact int(10),
in _roll enum('greatAdmin','admin','member')
)
BEGIN
        if not exists ( select * from users 
						where name = _name 
                        and email = _email)
			then begin
				insert into users (id, name, email, password, contact, roll)
				values(_id, _name, _email, _password, _contact, _roll); 
				
            end;
			select _id as 'msg';
        else 
			begin
				select 'Entered User is exist' as 'msg';
            end;
        end if;

END$$

delimiter ;

