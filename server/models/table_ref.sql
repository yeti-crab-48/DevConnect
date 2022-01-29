/*TESTING SQL COMMANDS*/

/*
CREATE TABLE table_name(
   column1 datatype,
   column2 datatype,
   column3 datatype,
   .....
   columnN datatype,
   PRIMARY KEY( one or more columns )
);
*/

CREATE TABLE Users (
    username TEXT,
    id uuid DEFAULT uuid_generate_v4 (),
    password SERIAL,
    PRIMARY KEY (id),
)

INSERT INTO Users(username, password)
VALUES('TEST', 1234)

I
INSERT INTO Users(username, password)
VALUES('Tessa', 1234)


SELECT * FROM Users

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

INSERT INTO Post(user_id, numApplicant, title, body, created_at, contact)
VALUES('963dcbe9-ac63-49ab-8f71-eec921178610', 10, 'TITLE', 'THIS IS A BODY', '2022-01-29', 1234567890)
INSERT INTO Post(user_id, numApplicant, title, body, created_at, contact)
VALUES('3712c663-a8df-4463-a222-a98ef910e3ce', 2, 'New Job', 'Work for us', '2022-02-10', 1645647890)

SELECT * FROM Post

CREATE TABLE JoinTable (
  user_id uuid, 
  post_id uuid,
  id uuid DEFAULT uuid_generate_v4 (),
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES Users(id),
  FOREIGN KEY(post_id) REFERENCES Post(id)
)

INSERT INTO JoinTable(user_id, post_id)
VALUES
('eb158658-2bb5-4717-b78b-db87ebc08db2', '5c4561d8-056e-4908-82f0-604bacafd449'),
('eb158658-2bb5-4717-b78b-db87ebc08db2', 'e6c4b001-3d69-4b2d-bf9e-5d147152155f')

SELECT Users.username AS applicant, Post.title, Post.body, Post.created_at 
FROM JoinTable 
JOIN Users ON Users.id = JoinTable.user_id
JOIN Post ON Post.id = JoinTable.post_id


/* ALTER TABLE "table_name" RENAME COLUMN "column 1" TO "column 2"; */

ALTER TABLE post RENAME COLUMN createdat TO created_at