import React from 'react'
import { useReducer } from "react";
import { createContext } from "react";
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    
     if (action.type === "ADD_INITIAL_POSTS") {
      newPostList=action.payload.posts
    }
    else if (action.type === "ADD_POST") {
      newPostList =[action.payload,...currPostList]
    }
  
    return newPostList;
  };
  
  export const PostList = createContext({
    postList: [],
    addPost: () => {},
    addInitialPosts:() => {},
   
  });
  
const PostLists = ({children}) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        []
      );
      const addPost = (firstName, birthDate, email,phone, address) => {
        dispatchPostList({
          type: "ADD_POST",
          payload: {
            id:Date.now(),
            firstName: firstName,
            birthDate:birthDate,
            email:email,
            address:address ,
            phone: phone,
          },
        });
      };
      const addInitialPosts = (posts) => {
        dispatchPostList({
          type: "ADD_INITIAL_POSTS",
          payload: {
            posts,
          },
        });
      };
  return (
    <div>
    <PostLists.Provider value={{ postList, addPost,addInitialPosts }}>
        {children}
      </PostLists.Provider>
    </div>
  )
}

export default PostLists
