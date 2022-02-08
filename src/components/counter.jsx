import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  increaseAsync,
  fetchDataAsync,
} from "../redux/actions/actions";

const Counter = () => {
  const item = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(increment());
  };
  const onAddAsync = () => {
    dispatch(increaseAsync());
  };
  const onFetch = () => {
    dispatch(fetchDataAsync());
  };

  return (
    <div>
      <div>값은 : {item.count}</div>
      <button onClick={onAdd}>더하기</button>
      <button onClick={onAddAsync}>1초뒤 더하기</button>
      <button onClick={onFetch}>데이터받기</button>

      <ul>
        {item.datas?.map((data) => {
          return <li>{data.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Counter;
