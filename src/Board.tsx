import * as React from 'react';
import { useSelector, getWidth, getHeight } from './store';
import { useDrawChecks } from './use-draw-checks';
import BoardCell from './BoardCell';
import './Board.css';

function range <T>(count: number, iterable: (item: undefined, i: number) => T) {
  return Array.from(Array(count), iterable);
}

const Board: React.FC = () => {
  const width = useSelector(getWidth);
  const height = useSelector(getHeight);
  const tableRef = useDrawChecks<HTMLTableElement>();
  return (
    <table className="Board" ref={tableRef}>
      <tbody>
        {range(height, (_, y) => (
          <tr key={y}>
            {range(width, (_, x) => (
              <td key={x}>
                <BoardCell x={x} y={y} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
