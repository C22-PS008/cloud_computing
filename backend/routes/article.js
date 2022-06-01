const router = require("express").Router();
const Article = require("../models/Article");
const authenticateJWT = require("./verifyToken");
require("dotenv").config();

//POST article [DONE]
router.post("/article", (req, res) => {
  const content = new Article({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    imageUrl: req.body.imageUrl,
  });
  const result = {
    message: "Article created successfully",
    data: {
      title: content.title,
      content: content.content,
      author: content.author,
      imageUrl: content.imageUrl,
    },
  };
  try {
    const contentSaved = content.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET ALL with auth [DONE]
router.get("/article", authenticateJWT, (req, res) => {
  const article = Article.find({}, function (err, articles) {
    if (err) {
      res.status(404).send("No articles found");
    } else {
      res.status(200).json({
        status: "success",
        message: "Article retrieved successfully",
        data: {
          articles,
        },
      });
    }
  });
});

//GET ARTICLE ID [DONE]
router.get("/article/:id", authenticateJWT, (req, res) => {
  const article = Article.findById(req.params.id, function (err, articles) {
    if (err) {
      res.status(404).send("The article with the given ID was not found.");
    } else {
      res.status(200).json({
        status: "success",
        message: "Article retrieved successfully",
        data: {
          articles,
        },
      });
    }
  });
});

module.exports = router;
