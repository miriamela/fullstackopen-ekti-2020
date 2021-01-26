/* eslint-disable prettier/prettier */
import blogService from "../services/blog";
import { showNotification } from "./notificationsReducers";

const blogsReducer = (state = [], action) => {
  // console.log(action, state);
  switch (action.type) {
    case "CREATE_BLOG":
      const newBlog = action.data;
      return [...state, newBlog];
    case "DELETE_BLOG":
      const id = action.data;
      const newBlogs = state.filter((each) => each.id !== id);
      return newBlogs;
    case "INCREASE_LIKES":
      const idLike = action.data.id;
      const changedBlog = action.data;
      return state.map((each) => (each.id !== idLike ? each : changedBlog));
    case "RETRIEVE_ALL":
      return action.data;
    default:
      return state;
  }
};

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch({
      type: "RETRIEVE_ALL",
      data: blogs,
    });
  };
};

export const createBlog = (content) => {
  return async (dispatch) => {
    const newObject = await blogService.create(content);
    await dispatch({
      type: "CREATE_BLOG",
      data: newObject,
    });
    dispatch(
      showNotification(`a new blog ${newObject.title} has been added`, 5)
    );
  };
};

export const deleteBlog = (id, blog) => {
  return async (dispatch) => {
    await blogService.remove(id);
    await dispatch({
      type: "DELETE_BLOG",
      data: id,
    });
    dispatch(
      showNotification(`${blog.title} by ${blog.author} has been removed`, 5)
    );
  };
};
export const updateLikes = (id, blog) => {
  return async (dispatch) => {
    const updatedBlog = await blogService.updateLikes(id, blog);
    await dispatch({
      type: "INCREASE_LIKES",
      data: updatedBlog,
    });
    dispatch(
      showNotification(`${updatedBlog.title}: likes has been updated`, 5)
    );
  };
};

export default blogsReducer;
