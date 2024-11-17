const { Router } = require("express");
const blogCtl = require("../controllers/blogController");

const blogRouter = Router();

blogRouter.get("/add_blog", blogCtl.add_blogPage);
blogRouter.post("/add_blog", blogCtl.add_blog);

blogRouter.get("/view_blog", blogCtl.view_blogPage);

blogRouter.get("/delete_blog/:adminId", blogCtl.deleteblog);

blogRouter.get("/edit_blog/:adminId", blogCtl.editblogPage);
blogRouter.post("/edit_blog/:adminId", blogCtl.editblog);

blogRouter.get("/all_blog", blogCtl.all_blogPage);

blogRouter.get("/:id", blogCtl.likeBlog);

module.exports = blogRouter;
