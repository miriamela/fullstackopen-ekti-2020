import React from "react";
import Blog from "./Blog";
import BlogForm from "./BlogForm";
import Togglable from "./Togglable";
import PropTypes from "prop-types";

const LoggedinPage = ({
  user,
  handleLogout,
  createNewBlog,
  blogs,
  blogFormRef,
  updateBlog,
  deleteBlog,
}) => {
  return (
    <>
      <h3 className="userLoggedIn">{user.name} logged in</h3>
      <button className="logout" type="button" onClick={handleLogout}>
        Logout
      </button>
      <Togglable buttonLabel="create new blog" ref={blogFormRef}>
        <BlogForm createNewBlog={createNewBlog} />
      </Togglable>
      <div className="allBlogs">
        {blogs
          .sort((a, b) => {
            return b.likes - a.likes;
          })
          .map((blog) => {
            return (
              <Blog
                key={blog.id}
                blog={blog}
                user={user.name}
                updateBlog={updateBlog}
                deleteBlog={deleteBlog}
              />
            );
          })}
      </div>
    </>
  );
};
export default LoggedinPage;
LoggedinPage.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
  createNewBlog: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired,
  blogFormRef: PropTypes.object.isRequired,
  updateBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
};
