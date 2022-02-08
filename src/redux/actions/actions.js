import axios from "axios";

// 액션 추가
export const INCREMENT = "INCREMENT";
export const INCREASE_ASYNC = "INCREASE_ASYNC";
export const FETCH_DATA = "FETCH_DATA";

export const increment = () => ({ type: INCREMENT });
export const incrementAsync = () => ({ type: INCREASE_ASYNC });
export const fetchData = (data) => ({ type: FETCH_DATA, payload: data });

// 액션 함수선언 (실제 페이지들에서 사용될 액션함수)
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increment()), 1000);
};

export const fetchDataAsync = () => (dispatch) => {
  const fetchFun = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(fetchData(res.data));
  };
  fetchFun();
};
