export interface Board extends Array<boolean> {}

export interface Rules {
  underPopulationThreshold: number;
  overPopulationThreshold: number;
  resurrectionCount: number;
}

export interface Dimensions {
  width: number;
  height: number;
}

export const buildBoard = (width: number, height: number): Board => (
  Array(width * height).fill(false)
);

export const getCellByIndex = (board: Board, index: number): boolean => (
  board[index]
);

export const setCellByIndex = (board: Board, index: number, isAlive: boolean): void => {
  board[index] = isAlive
};

export const getIndexByCoords = (x: number, y: number, { width, height }: Dimensions) => (
  (((x % width) + width) % width) + (((y % height) + height) % height) * width
);

export const getCellByCoords = (board: Board, x: number, y: number, dimensions: Dimensions) => (
  getCellByIndex(board, getIndexByCoords(x, y, dimensions))
);

export const setCellByCoords = (board: Board, x: number, y: number, dimensions: Dimensions, isAlive: boolean): void => {
  setCellByIndex(board, getIndexByCoords(x, y, dimensions), isAlive)
};

export const getCellNeighbors = (board: Board, x: number, y: number, dimensions: Dimensions) => [
  getCellByCoords(board, x - 1, y - 1, dimensions), // Top left
  getCellByCoords(board, x,     y - 1, dimensions), // Top
  getCellByCoords(board, x + 1, y - 1, dimensions), // Top right
  getCellByCoords(board, x - 1, y,     dimensions), // Left
  getCellByCoords(board, x + 1, y,     dimensions), // Right
  getCellByCoords(board, x - 1, y + 1, dimensions), // Bottom left
  getCellByCoords(board, x,     y + 1, dimensions), // Bottom
  getCellByCoords(board, x + 1, y + 1, dimensions), // Bottom right
];

export const getNeighborAliveCount = (board: Board, x: number, y: number, dimensions: Dimensions) => (
  getCellNeighbors(board, x, y, dimensions).filter(Boolean).length
);

export const getAliveCellNextState = (board: Board, x: number, y: number, dimensions: Dimensions, rules: Rules) => {
  const count = getNeighborAliveCount(board, x, y, dimensions);
  return count >= rules.underPopulationThreshold && count <= rules.overPopulationThreshold;
};

export const getDeadCellNextState = (board: Board, x: number, y: number, dimensions: Dimensions, rules: Rules) => (
  getNeighborAliveCount(board, x, y, dimensions) === rules.resurrectionCount
);

export const getCellNextState = (board: Board, x: number, y: number, dimensions: Dimensions, rules: Rules) => (
  getCellByCoords(board, x, y, dimensions) ?
    getAliveCellNextState(board, x, y, dimensions, rules) :
    getDeadCellNextState(board, x, y, dimensions, rules)
);

export const getNextBoardState = (board: Board, { width, height }: Dimensions, rules: Rules): Board => {
  const nextState = buildBoard(width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const isAlive = getCellNextState(board, x, y, { width, height }, rules);
      setCellByCoords(nextState, x, y, { width, height }, isAlive);
    }
  }
  return nextState;
};
