//액션 => {type : "CREATE", data : "만들기"} => reducer(state, action)
// 액션을 생성하는 함수
// export const create = (data) => {
//   return { type: "CREATE", data };
// };

// 리듀서 : 상태 변경하는 로직 => reducer(state(최신상태), action(상태 변경에 필요한 데이터))

//스토어 => 상태, 리듀서, 내장함수

// 디스패치 => 액션을 받아서 상태 변화를 일으킴 => 액션을 파라미터 전달

// 구독 => 디스패치 될 때마다 실행하는 함수 => 특정함수를 전달 => 비동기 처리 용도로 사용

// const store = createStore();
