CREATE TABLE posts(
  id          INT CONSTRAINT firstkey PRIMARY KEY,
  user_id     INT NOT NULL,
  post_title  VARCHAR(50),
  post_body   VARCHAR(250),
  public      INT,
  created_at  TIMESTAMP DEFAULT current_timestamp
);


CREATE TABLE users(
  user_id     INT CONSTRAINT firstkey PRIMARY KEY,
  name        VARCHAR(50),
  email       VARCHAR(250),
  password    VARCHAR,
  entries     INT,
  joined_at   TIMESTAMP DEFAULT current_timestamp
);
