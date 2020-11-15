const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

// blogsRouter.get("/", (request, response, next) => {
//   response.send(`<h1>This is madness</h1>`);
// });

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogsRouter.get("/:id", async (request, response) => {
  const blog = await Blog.findById(request.params.id);
  if (blog) {
    response.json(blog);
  } else {
    response.status(404).end();
  }
});

blogsRouter.post("/", async (request, response) => {
  const body = request.body;

  if (!body.title || !body.url) {
    return response.status(404).json({ error: "bad request" });
  }

  const blog = await new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
  });
  const savedBlog = await blog.save();
  console.log(`${blog.title} has been saved!`);
  response.status(201).json(savedBlog);
});
blogsRouter.delete("/:id", async (request, response) => {
  const blog = await Blog.findByIdAndRemove(request.params.id);
  console.log(`${blog.title} has been deleted`);
  response.status(204).end();
});
blogsRouter.put("/:id", async (request, response) => {
  const body = request.body;
  const newLikes = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  };

  const updatedBlog = await Blog.findByIdAndUpdate(
    request.params.id,
    newLikes,
    {
      new: true,
    }
  );
  response.json(updatedBlog.toJSON());
});
module.exports = blogsRouter;
