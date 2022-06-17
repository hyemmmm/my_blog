// 액션타입

const CREATE_POST = "CREATE_POST";
const REMOVE_POST = "REMOVE_POST";
const UPDATE_POST = "UPDATE_POST";
const CREATE_COMMENT = "CREATE_COMMENT";

const created_at = new Date().toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const initialState = [
  {
    id: 1,
    title: "첫 포스트",
    content: "블로그를 시작했습니다",
    created_at,
    comments: [
      {
        id: 1,
        user: {
          id: 1,
          name: "혜민",
        },
        content: "댓글내용",
      },
    ],
  },
  {
    id: 2,
    title: "두번째 포스트",
    content: "두번째 컨텐츠",
    created_at,
    comments: [],
  },
  {
    id: 3,
    title: "첫 포스트",
    content: "블로그를 시작했습니다",
    created_at,
    comments: [
      {
        id: 1,
        user: {
          id: 1,
          name: "혜민",
        },
        content: "댓글내용",
      },
    ],
  },
  {
    id: 4,
    title: "두번째 포스트",
    content: "두번째 컨텐츠",
    created_at,
    comments: [],
  },
  {
    id: 5,
    title: "첫 포스트",
    content: "블로그를 시작했습니다",
    created_at,
    comments: [
      {
        id: 1,
        user: {
          id: 1,
          name: "혜민",
        },
        content: "댓글내용",
      },
    ],
  },
  {
    id: 6,
    title: "두번째 포스트",
    content: "두번째 컨텐츠",
    created_at,
    comments: [],
  },
  {
    id: 7,
    title: "첫 포스트",
    content: "블로그를 시작했습니다",
    created_at,
    comments: [
      {
        id: 1,
        user: {
          id: 1,
          name: "혜민",
        },
        content: "댓글내용",
      },
    ],
  },
  {
    id: 8,
    title: "두번째 포스트",
    content: "두번째 컨텐츠",
    created_at,
    comments: [],
  },
  {
    id: 9,
    title: "첫 포스트",
    content: "블로그를 시작했습니다",
    created_at,
    comments: [
      {
        id: 1,
        user: {
          id: 1,
          name: "혜민",
        },
        content: "댓글내용",
      },
    ],
  },
  {
    id: 10,
    title: "두번째 포스트",
    content: "두번째 컨텐츠",
    created_at,
    comments: [],
  },
  {
    id: 11,
    title: "첫 포스트",
    content: "블로그를 시작했습니다",
    created_at,
    comments: [
      {
        id: 1,
        user: {
          id: 1,
          name: "혜민",
        },
        content: "댓글내용",
      },
    ],
  },
  {
    id: 12,
    title: "두번째 포스트",
    content: "두번째 컨텐츠",
    created_at,
    comments: [],
  },
];
let nextId = 3;

// 리듀서 : 가장 바깥 컴포넌트에서 combineReducers({리듀서1 : 리듀서1, 리듀서2 : 리듀서2, 리듀서3 : 리듀서3})
// Provider를 import해서 컴포넌트를 감싸야 store에 있는 값들과 함수 사용 가능

export default function post(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return [
        ...state,
        {
          id: nextId++,
          title: action.title,
          content: action.content,
          created_at: action.created_at,
        },
      ];
    case REMOVE_POST:
      return state.filter((post) => post.id !== action.id);
    case UPDATE_POST:
      return state.map((post) =>
        post.id === action.id
          ? {
              ...post,
              title: action.title,
              content: action.content,
              created_at: action.created_at,
            }
          : post
      );
    case CREATE_COMMENT:
      return state.map((post) =>
        post.id === action.id
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: post.comments[post.comments.length - 1].id + 1,
                  content: action.content,
                  user: {
                    id: action.userId,
                    name: action.userName,
                  },
                },
              ],
            }
          : post
      );
    default:
      return state;
  }
}

// 액션객체 생성 함수 : case별로 필요한 데이터를 파악해서 매개변수로 받은 뒤 객체로 만들어 리턴
// 실제 이벤트 발생하는 컴포넌트에서 useDispatch()로 디스패치 함수 생성
// => dispatch(액션생성함수())
// => 이벤트 바인딩.

export function createPost(title, content, created_at) {
  return {
    type: CREATE_POST,
    title,
    content,
    created_at,
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id,
  };
}

export function updatePost(id, title, content, created_at) {
  return {
    type: UPDATE_POST,
    id,
    title,
    content,
    created_at,
  };
}

export function createComment(postId, content, userId, userName) {
  return {
    type: CREATE_COMMENT,
    id: postId,
    content,
    userId,
    userName,
  };
}
