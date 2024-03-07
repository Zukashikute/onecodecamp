const Post = require("../models/post")

// Create post
const createPost = async (req, res) => {
   const { title, author, description, likes, comments } = req.body

   try {
      const post = await Post.create({
         title,
         author,
         description,
         likes,
         comments,
      });
      res.status(200).json(post);
   } catch (err) {
      res.status(400).json({ err: err.message })
      console.log("Error on creating a post: " + err.message)
   }
}

// Get post
const getPost = async (req, res) => {
   // const { title, author, description, likes, comments } = req.query;

   // const query = {};
   // if (title) query.title = title;
   // if (author) query.author = author;
   // if (description) query.description = description;
   // if (likes) query.likes = likes;
   // if (comments) query.comments = comments;

   try {
      const result = await Post.find();
      res.status(200).json(result);
   } catch (err) {
      res.status(400).json({ err: err.message })
      console.log("Error on creating a post: " + err.message)
   }
}

// Update post
const updatePost = async (req, res) => {
   const userId = req.params.id
   const updatePost = req.body
   
   try {
      const result = await Post.findOneAndUpdate({ _id: userId }, { $set: updatePost });
      res.status(200).json(result);
   } catch (err) {
      res.status(400).json({ err: err.message })
      console.log("Error on updating a post: " + err.message)
   }
}

// Delete post
const deletePost = async (req, res) => {
   const userId = req.params.id

   try {
      const result = await Post.findOneAndDelete({ _id: userId });
      res.status(200).json(result);
   } catch (err) {
      res.status(400).json({ err: err.message })
      console.log("Error on deleting a post: " + err.message)
   }
}


module.exports = { createPost, getPost, updatePost, deletePost }