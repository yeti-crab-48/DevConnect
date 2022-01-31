/*!!!This file is not used for anything!!!!*/

/*TESTING SQL COMMANDS*/

/*--------Create Table-----------

ex.
 CREATE TABLE table_name(
   column1 datatype,
   column2 datatype,
   column3 datatype,
   .....
   columnN datatype,
   PRIMARY KEY( one or more columns )
);

----------------------------*/

CREATE TABLE Users (
    username TEXT,
    id uuid DEFAULT uuid_generate_v4 (),
    password TEXT,
    PRIMARY KEY (id),
    UNIQUE(username) /*-----making username have to be unique ------*/
)





/*--------Inserting into Table--------*/
INSERT INTO Users(username, password)
VALUES('TEST', 1234)

INSERT INTO Users(username, password)
VALUES('Tessa', 1234)

/*-------------------------------------*/





/*------ Selecting everything from Table ------*/
SELECT * FROM Users
/*---------------------------------------------*/



/*-------- SOME OF OUR SQL commands that was inputted into Elephant------*/

/*template*/
CREATE TABLE Post (
  user_id uuid,
  numApplicant INT,
  title TEXT,
  id uuid DEFAULT uuid_generate_v4 (),
  body TEXT,
  created_at DATE,
  contact CHAR(10),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES Users(id)
)

/*testing | dummy data*/
INSERT INTO Post(user_id, numApplicant, title, body, created_at, contact)
VALUES('963dcbe9-ac63-49ab-8f71-eec921178610', 10, 'TITLE', 'THIS IS A BODY', '2022-01-29', 1234567890)
INSERT INTO Post(user_id, numApplicant, title, body, created_at, contact)
VALUES('3712c663-a8df-4463-a222-a98ef910e3ce', 2, 'New Job', 'Work for us', '2022-02-10', 1645647890)

SELECT * FROM Post

/*template*/
CREATE TABLE JoinTable (
  user_id uuid, 
  post_id uuid,
  id uuid DEFAULT uuid_generate_v4 (),
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES Users(id),
  FOREIGN KEY(post_id) REFERENCES Post(id)
)

/*testing | dummy data*/
INSERT INTO JoinTable(user_id, post_id)
VALUES
('eb158658-2bb5-4717-b78b-db87ebc08db2', '5c4561d8-056e-4908-82f0-604bacafd449'), /*user_id, post_id*/
('eb158658-2bb5-4717-b78b-db87ebc08db2', 'e6c4b001-3d69-4b2d-bf9e-5d147152155f')  /*user_id, post_id*/

SELECT Users.username AS applicant, Post.title, Post.body, Post.created_at 
FROM JoinTable 
JOIN Users ON Users.id = JoinTable.user_id
JOIN Post ON Post.id = JoinTable.post_id

/*-------------------------------------------------------------------------------------*/








/*------------------ Altering our columns -----------------------*/

/* ALTER TABLE "table_name" RENAME COLUMN "column 1" TO "column 2"; */
/*changing name of column*/
ALTER TABLE post RENAME COLUMN createdat TO created_at

/* ALTER TABLE mytable ALTER COLUMN mycolumn newtype */
/*changing type of column*/
ALTER TABLE Users 
ALTER COLUMN password TYPE TEXT

/*
ALTER TABLE table_name
ALTER COLUMN column_name1 [SET DATA] TYPE new_data_type,

ALTER TABLE assets 
    ALTER COLUMN location TYPE VARCHAR,
    ALTER COLUMN description TYPE VARCHAR;
*/


/*--------- Joining our user_id and usernmae ------*/
SELECT Post.*, Users.username
FROM Post JOIN Users 
ON Post.user_id = Users.id 
