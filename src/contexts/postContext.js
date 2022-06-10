import React, { createContext, useReducer } from "react";

export const PostStateContext = createContext(null);
export const PostDispatchContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_POST":
      return state.concat(action.post);
    case "EDIT_POST":
      return state.map((post) => {
        return post.id === action.post.id ? action.post : post;
      });
    default:
      return state;
  }
}

const postList = [
  {
    id: 1,
    title: "블로그 게시!",
    content: "내용",
    created_at: new Date().toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  },
  {
    id: 2,
    title: "두번째글!",
    content: "두번째내용",
    created_at: new Date().toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  },
];

export function PostProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, postList);
  return (
    <PostStateContext.Provider value={state}>
      <PostDispatchContext.Provider value={dispatch}>
        {children}
      </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
}
