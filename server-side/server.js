const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

/* SETTING UP CONTROLLERS */
const register = require("./controllers/register");
const signin = require("./controllers/signIn");
const posts = require("./controllers/posts");
const newPost = require("./controllers/newPost");


const app = express();

/* CONNETING THE DATABASE */
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '< DATABASE USERNAME >',
        password: '< DATABASE PASSWORD >',
        database: '< DATABASE >',
        port: 5434
    }
});


/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(cors());

/* GET --> Checking to make sure all is working */
app.get('/', (req, res) => {
    res.send(db.select('*').from('users').then(rows => rows));
});

/* SIGNIN --> POST */
app.post('/signin', signin.handleSignIn(db, bcrypt));

/* REGISTER ROUTE --> POST */
app.post('/register', register.handleRegister(db, bcrypt));

/* NEWPOST ROUTE --> POST */
app.post('/newPost', newPost.handleNewPost(db));

/* POSTS ROUTE --> GET ALL */
app.get('/posts', (req, res) => posts.handlePostsGet(req, res, db));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
