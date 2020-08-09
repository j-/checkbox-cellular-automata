import { Reducer } from 'redux';
import { TypedUseSelectorHook, useSelector as useReactReduxSelector, useDispatch as useReactReduxDispatch } from 'react-redux';
import { Rules, Dimensions, Board, buildBoard, getNextBoardState, getCellByCoords, setCellByCoords, resizeBoard } from '../game';
import { isActionReset, isActionTick, isActionSetCell, isActionSetDimensions, isActionSetRules, isActionClearBoard } from './actions';

export interface RootReducerState {
  rules: Rules;
  dimensions: Dimensions;
  board: Board;
}

const DEFAULT_WIDTH = 20;
const DEFAULT_HEIGHT = 20;

export const DEFAULT_STATE: RootReducerState = {
  rules: {
    underPopulationThreshold: 2,
    overPopulationThreshold: 3,
    resurrectionCount: 3,
  },
  dimensions: {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  board: buildBoard(DEFAULT_WIDTH, DEFAULT_HEIGHT),
};

export const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionReset(action)) {
    return DEFAULT_STATE;
  }

  if (isActionClearBoard(action)) {
    return {
      ...state,
      board: buildBoard(state.dimensions.width, state.dimensions.height),
    };
  }

  if (isActionTick(action)) {
    const { rules, dimensions, board } = state;
    return {
      ...state,
      board: getNextBoardState(board, dimensions, rules),
    };
  }

  if (isActionSetCell(action)) {
    const { board, dimensions } = state;
    const { x, y, isAlive } = action.payload;
    const nextState = [...board];
    setCellByCoords(nextState, x, y, dimensions, isAlive);
    return {
      ...state,
      board: nextState,
    };
  }

  if (isActionSetDimensions(action)) {
    const board = resizeBoard(state.board, state.dimensions, action.payload);
    return {
      ...state,
      dimensions: {
        width: action.payload.width,
        height: action.payload.height,
      },
      board,
    };
  }

  if (isActionSetRules(action)) {
    return {
      ...state,
      rules: action.payload,
    };
  }

  return state;
};

export default reducer;

export const useSelector: TypedUseSelectorHook<RootReducerState> = useReactReduxSelector;
export const useDispatch = useReactReduxDispatch;

export const getWidth = (state: RootReducerState) => state.dimensions.width;
export const getHeight = (state: RootReducerState) => state.dimensions.height;
export const getBoardCell = (state: RootReducerState, x: number, y: number) => getCellByCoords(state.board, x, y, state.dimensions);
export const getUnderPopulationThreshold = (state: RootReducerState) => state.rules.underPopulationThreshold;
export const getOverPopulationThreshold = (state: RootReducerState) => state.rules.overPopulationThreshold;
export const getResurrectionCount = (state: RootReducerState) => state.rules.resurrectionCount;
