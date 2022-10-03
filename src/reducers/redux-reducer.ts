export enum Direction {
  Up,
  Down,
  Left,
  Right,
  None
}

export type State = { x: number; y: number; };

export const initialState = { x: 0, y: 0 }

export const reducer = (state: State = initialState, action: { type: Direction }) => {
  switch (action.type) {
    case Direction.Up:
      return {
        ...state,
        y: state.y + 1,
      }
    case Direction.Down:
      return {
        ...state,
        y: state.y - 1,
      }
    case Direction.Left:
      return {
        ...state,
        x: state.x - 1,
      }
    case Direction.Right:
      return {
        ...state,
        x: state.x + 1,
      }
    default:
      return state
  }
}
