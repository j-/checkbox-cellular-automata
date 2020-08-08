import { Action } from 'redux';
import { Rules } from '../game';

/* Reset action */

export const ACTION_RESET = 'RESET';

export interface ActionReset extends Action<typeof ACTION_RESET> { }

export const isActionReset = (action: Action): action is ActionReset => (
  action.type === ACTION_RESET
);

export const reset = (): ActionReset => ({
  type: ACTION_RESET,
});

/* Tick action */

export const ACTION_TICK = 'TICK';

export interface ActionTick extends Action<typeof ACTION_TICK> { }

export const isActionTick = (action: Action): action is ActionTick => (
  action.type === ACTION_TICK
);

export const tick = (): ActionTick => ({
  type: ACTION_TICK,
});

/* Set cell action */

export const ACTION_SET_CELL = 'SET_CELL';

export interface ActionSetCell extends Action<typeof ACTION_SET_CELL> {
  payload: {
    x: number;
    y: number;
    isAlive: boolean;
  };
}

export const isActionSetCell = (action: Action): action is ActionSetCell => (
  action.type === ACTION_SET_CELL
);

export const setCell = (x: number, y: number, isAlive: boolean): ActionSetCell => ({
  type: ACTION_SET_CELL,
  payload: {
    x,
    y,
    isAlive,
  },
});

/* Set dimensions action */

export const ACTION_SET_DIMENSIONS = 'SET_DIMENSIONS';

export interface ActionSetDimensions extends Action<typeof ACTION_SET_DIMENSIONS> {
  payload: {
    width: number;
    height: number;
  };
}

export const isActionSetDimensions = (action: Action): action is ActionSetDimensions => (
  action.type === ACTION_SET_DIMENSIONS
);

export const setDimensions = (width: number, height: number): ActionSetDimensions => ({
  type: ACTION_SET_DIMENSIONS,
  payload: {
    width,
    height,
  },
});

/* Set rules action */

export const ACTION_SET_RULES = 'SET_RULES';

export interface ActionSetRules extends Action<typeof ACTION_SET_RULES> {
  payload: Rules;
}

export const isActionSetRules = (action: Action): action is ActionSetRules => (
  action.type === ACTION_SET_RULES
);

export const setRules = (rules: Rules): ActionSetRules => ({
  type: ACTION_SET_RULES,
  payload: rules,
});

/* Clear board action */

export const ACTION_CLEAR_BOARD = 'CLEAR_BOARD';

export interface ActionClearBoard extends Action<typeof ACTION_CLEAR_BOARD> { }

export const isActionClearBoard = (action: Action): action is ActionClearBoard => (
  action.type === ACTION_CLEAR_BOARD
);

export const clearBoard = (rules: Rules): ActionClearBoard => ({
  type: ACTION_CLEAR_BOARD,
});
