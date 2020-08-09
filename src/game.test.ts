import { Board, buildBoard, getIndexByCoords, getCellNextState } from './game';

const testBoard = ([str]: TemplateStringsArray): Board => (
  Array.from(str.match(/[X-]/g) || [], (symbol) => symbol === 'X')
);

describe('buildBoard()', () => {
  it('returns an array of correct size', () => {
    const result = buildBoard(3, 4);
    expect(result).toHaveLength(12);
  });

  it('initializes with false values', () => {
    const result = buildBoard(2, 2);
    expect(result).toEqual([false, false, false, false]);
  });
});

describe('getIndexByCoords()', () => {
  it('returns 0 for (0, 0)', () => {
    expect(getIndexByCoords(0, 0, { width: 1, height: 1 })).toBe(0);
    expect(getIndexByCoords(0, 0, { width: 10, height: 20 })).toBe(0);
  });

  it('returns x for y=0', () => {
    expect(getIndexByCoords(0, 0, { width: 3, height: 4 })).toBe(0);
    expect(getIndexByCoords(1, 0, { width: 3, height: 4 })).toBe(1);
    expect(getIndexByCoords(2, 0, { width: 3, height: 4 })).toBe(2);
  });

  it('returns y*width for x=0', () => {
    expect(getIndexByCoords(0, 1, { width: 3, height: 4 })).toBe(3);
    expect(getIndexByCoords(0, 2, { width: 3, height: 4 })).toBe(6);
    expect(getIndexByCoords(0, 3, { width: 3, height: 4 })).toBe(9);
    expect(getIndexByCoords(0, 2, { width: 4, height: 3 })).toBe(8);
  });

  it('returns x+y*width', () => {
    expect(getIndexByCoords(1, 2, { width: 3, height: 4 })).toBe(7);
    expect(getIndexByCoords(2, 3, { width: 3, height: 4 })).toBe(11);
    expect(getIndexByCoords(2, 2, { width: 4, height: 3 })).toBe(10);
  });

  it('returns x=0 when x exceeds width by 1', () => {
    expect(getIndexByCoords(5, 0, { width: 5, height: 5 })).toBe(0);
    expect(getIndexByCoords(5, 1, { width: 5, height: 5 })).toBe(5);
  });

  it('returns x=1 when x exceeds width by 2', () => {
    expect(getIndexByCoords(6, 0, { width: 5, height: 5 })).toBe(1);
    expect(getIndexByCoords(6, 1, { width: 5, height: 5 })).toBe(6);
  });

  it('returns x=width-1 when x is -1', () => {
    expect(getIndexByCoords(-1, 0, { width: 5, height: 5 })).toBe(4);
    expect(getIndexByCoords(-1, 1, { width: 5, height: 5 })).toBe(9);
  });

  it('returns y=0 when y exceeds height by 1', () => {
    expect(getIndexByCoords(0, 5, { width: 5, height: 5 })).toBe(0);
    expect(getIndexByCoords(1, 5, { width: 5, height: 5 })).toBe(1);
  });

  it('returns y=height-1 when y is -1', () => {
    expect(getIndexByCoords(0, -1, { width: 5, height: 5 })).toBe(20);
    expect(getIndexByCoords(1, -1, { width: 5, height: 5 })).toBe(21);
  });
});

describe('getCellNextState()', () => {
  const dimensions = {
    width: 3,
    height: 3,
  };

  const rules = {
    underPopulationThreshold: 2,
    overPopulationThreshold: 3,
    resurrectionCount: 3,
  };

  it('is dead when neighbor alive count below threshold', () => {
    const board0 = testBoard`
      ---
      -X-
      ---
    `;
    const board1 = testBoard`
      ---
      -X-
      X--
    `;
    expect(getCellNextState(board0, 1, 1, dimensions, rules)).toBe(false);
    expect(getCellNextState(board1, 1, 1, dimensions, rules)).toBe(false);
  });

  it('is dead when neighbor alive count above threshold', () => {
    const board4 = testBoard`
      --X
      XX-
      X-X
    `;
    const board5 = testBoard`
      X-X
      -XX
      X-X
    `;
    expect(getCellNextState(board4, 1, 1, dimensions, rules)).toBe(false);
    expect(getCellNextState(board5, 1, 1, dimensions, rules)).toBe(false);
  });

  it('survives when neighbor alive count between thresholds', () => {
    const board2 = testBoard`
      X--
      -X-
      --X
    `;
    const board3 = testBoard`
      --X
      XX-
      --X
    `;
    expect(getCellNextState(board2, 1, 1, dimensions, rules)).toBe(true);
    expect(getCellNextState(board3, 1, 1, dimensions, rules)).toBe(true);
  });

  it('wraps around board to determine state', () => {
    const board2 = testBoard`
      X--
      X-X
      ---
    `;
    const board3 = testBoard`
      --X
      X--
      X-X
    `;
    expect(getCellNextState(board2, 2, 1, dimensions, rules)).toBe(true);
    expect(getCellNextState(board3, 2, 2, dimensions, rules)).toBe(true);
  });

  it('resurrects when neighbor alive count is right', () => {
    const board1 = testBoard`
      ---
      X--
      ---
    `;
    const board2 = testBoard`
      ---
      X--
      --X
    `;
    const board3 = testBoard`
      --X
      X--
      --X
    `;
    expect(getCellNextState(board1, 1, 1, dimensions, rules)).toBe(false);
    expect(getCellNextState(board2, 1, 1, dimensions, rules)).toBe(false);
    expect(getCellNextState(board3, 1, 1, dimensions, rules)).toBe(true);
  });
});
