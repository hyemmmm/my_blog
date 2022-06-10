import React, { createContext, useContext, useReducer, useRef } from "react";

const PostStateContext = createContext(null);
const PostDispatchContext = createContext(null);
const PostNextIdContext = createContext(null);

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
  const nextId = useRef(3);

  return (
    <PostStateContext.Provider value={state}>
      <PostDispatchContext.Provider value={dispatch}>
        <PostNextIdContext.Provider value={nextId}>
          {children}
        </PostNextIdContext.Provider>
      </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
}

export function usePostState() {
  const context = useContext(PostStateContext);
  if (!context) {
    throw new Error("프로바이더 없음");
  }
  return context;
}

export function usePostDispatch() {
  const context = useContext(PostDispatchContext);
  if (!context) {
    throw new Error("프로바이더 없음");
  }
  return context;
}

export function usePostNextId() {
  const context = useContext(PostNextIdContext);
  if (!context) {
    throw new Error("프로바이더 없음");
  }
  return context;
}
