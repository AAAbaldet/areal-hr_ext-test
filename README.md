# areal-hr_ext-test
My 2 repository on GitHub.

areal-hr-test-2025/
├── /api/................................

│   ├── /node_modules/...................

│   ├── /migrations/.....................

│   ├── /models/.........................

│   │   ├── users.sql....................

│   │   │   ├── CREATE TABLE users (

│   │   │   │   user_id..................SERIAL PRIMARY KEY,

│   │   │   │   username.................VARCHAR(255) UNIQUE NOT NULL,

│   │   │   │   email....................VARCHAR(255) UNIQUE NOT NULL,

│   │   │   │   password_hash............VARCHAR(255) NOT NULL,

│   │   │   │   created_at...............TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

│   │   │   │   updated_at...............TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

│   │   │   │   deleted_at...............TIMESTAMP NULL);

│   │   ├── posts.sql....................

│   │   │   ├── CREATE TABLE posts (

│   │   │   │   post_id..................SERIAL PRIMARY KEY,

│   │   │   │   user_id..................INTEGER REFERENCES users(user_id), title VARCHAR(255) NOT NULL, content TEXT NOT NULL,

│   │   │   │   created_at...............TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

│   │   │   │   updated_at...............TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

│   │   │   │   deleted_at...............TIMESTAMP NULL);

│   │   ├── comments.sql.................

│   │   │   ├── CREATE TABLE comments (

│   │   │   │   comment_id...............SERIAL PRIMARY KEY,

│   │   │   │   post_id..................INTEGER REFERENCES posts(post_id),

│   │   │   │   user_id..................INTEGER REFERENCES users(user_id), content TEXT NOT NULL,

│   │   │   │   created_at...............TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

│   │   │   │   updated_at...............TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

│   │   │   │   deleted_at...............TIMESTAMP NULL);

├── /app/................................

│   ├── /node_modules/...................

│   ├── /controllers/....................

│   ├── /services/.......................

├── /containers/.........................

│   ├── /api/............................

│   │   ├── Dockerfile...................

│   ├── /app/............................

│   │   ├── Dockerfile...................

├── /docs/...............................

├── /.gitignore..........................

├── /.env................................

├── /.env.example........................

├── /docker-compose.yml..................

├── /README.md/..........................
