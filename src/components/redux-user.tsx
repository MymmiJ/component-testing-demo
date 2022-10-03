import { useSelector, useDispatch } from 'react-redux';
import { Direction, State } from '../reducers/redux-reducer';

export const ReduxUser = () => {
  const x = useSelector((state: State) => state.x);
  const y = useSelector((state: State) => state.y);
  const dispatch = useDispatch();
  const up = () => dispatch({ type: Direction.Up });
  const down = () => dispatch({ type: Direction.Down });
  const left = () => dispatch({ type: Direction.Left });
  const right = () => dispatch({ type: Direction.Right });
  return <div>
    <h1>Use Redux To Move Around</h1>
    <button onClick={up}>^ Up</button>
    <button onClick={left}>{"< Left"}</button>
    <button onClick={down}>v Down</button>
    <button onClick={right}>{"> Right"}</button>
    <p>{`Location: x:${x}, y:${y}`}</p>
  </div>
}