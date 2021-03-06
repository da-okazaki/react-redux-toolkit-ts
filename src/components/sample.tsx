import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { counterSlice } from "../features/counter";
import { logSlice, LogState } from "../features/log";
import { AppState } from "../features/store";

interface Props {
  samplePropData?: string;
}

const Sample: FC<Props> = ({ samplePropData }) => {
  const { count, log } = useSelector<
    AppState,
    { count: number; log: LogState }
  >((state) => ({
    count: state.counter.count,
    log: state.log,
  }));

  // sliceからAction Creator関数を取得
  const dispatch = useDispatch();
  const { incrementCount, decrementCount } = counterSlice.actions;
  const { addLog, deleteLog, setLogLoading } = logSlice.actions;
  return (
    <div style={{ padding: "12px" }}>
      <h1>Sample Component</h1>
      <p>samplePropData: {samplePropData}</p>
      <h2>Counter State</h2>
      <p>count: {count}</p>
      <button type="button" onClick={() => dispatch(incrementCount())}>
        incrementCount
      </button>
      <button type="button" onClick={() => dispatch(decrementCount())}>
        decrementCount
      </button>
      <h2>Log State</h2>
      <p>log.logs.length: {log.logs.length}</p>
      <p>log.loading: {log.loading.toString()}</p>
      <button
        type="button"
        onClick={() => dispatch(addLog({ id: 1, text: "xxx" }))}>
        addLog
      </button>
      <button type="button" onClick={() => dispatch(deleteLog({ id: 1 }))}>
        deleteLog
      </button>
      <button type="button" onClick={() => dispatch(setLogLoading())}>
        setLogLoading
      </button>
    </div>
  );
};
export default Sample;
