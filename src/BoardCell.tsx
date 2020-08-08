import * as React from 'react';
import { useDispatch, useSelector, getBoardCell } from './store';
import { setCell } from './store/actions';
import './BoardCell.css';

export interface Props {
  x: number;
  y: number;
}

const BoardCell: React.FC<Props> = ({ x, y }) => {
  const dispatch = useDispatch();
  const isAlive = useSelector((state) => getBoardCell(state, x, y));
  const handleChange = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    const isAlive = e.currentTarget.checked;
    dispatch(setCell(x, y, isAlive));
  }, [dispatch, x, y]);
  return <input className="BoardCell" type="checkbox" checked={isAlive} onChange={handleChange} />
};

export default BoardCell;
