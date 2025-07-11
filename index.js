import express from "express";
import path from "path";
import { ObjectId } from "mongodb";

import db from "./db.js";


const app = express();
const PORT = 2000;
const dir = path.resolve();


// MIDDLEWARE

app.use(
    express.json()
);

app.use(
    express.urlencoded({ extended: true })
);


// ROUTES

app.get("/", (req, res) => {
    res.sendFile(dir + "/public/index.html");
});

app.get("/style.css", (req, res) => {
    res.sendFile(dir + "/public/style.css");
});

app.get("/new-post", (req, res) => {
    res.sendFile(dir + "/public/new-post.html");
});

// /api/posts/all
app.get("/api/posts/all", async (req, res) => {
    try {
        const post = await db.collection("posts").find({}).toArray()
        return res.send(post);
    } catch (error) {
        return res.send({ error: true, message: `there is no data in your collection` })
    }
});


app.get("/api/post/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });
        if (post) {
            return res.send(post);
        } else {
            return res.send(
                { error: true, message: `Resource with ObjectId: ${id} not found!` }
            )
        }

    } catch (error) {
        return res.sendStatus(400);
    }

});


// POST ROUTES BELOW

app.post("/api/post/new", async (req, res) => {
    const data = req.body;

    const posts = db.collection("posts");
    await posts.insertOne(data);

    res.redirect("/");
});


// DELETE ROUTES

app.delete("/api/post/delete/:id", async (req, res) => {
    const id = req.params.id;

    const deletedPost = await db.collection("posts").deleteOne({ _id: new ObjectId(id) });

    if (deletedPost.deletedCount === 0) {
        return res.send({error: true, message: "There is no  item with you provided"})
    }

    return res.send({succes: true, message: "Successfully deleted item"})
})


// MAKING SERVER LIVE

app.listen(PORT, () => {
    console.log(`Server is live on port: ${PORT}`);
});


