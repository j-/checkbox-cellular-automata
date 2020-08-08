import * as React from 'react';
import { useDispatch } from './store';
import { tick, clearBoard } from './store/actions';

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const [speed, setSpeed] = React.useState<number>(0);
  const handleChangeSpeed = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    setSpeed(Number(e.currentTarget.value));
  }, []);
  const handleClickStart = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    setSpeed(1);
  }, []);
  const handleClickStop = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    setSpeed(0);
  }, []);
  const handleClickTick = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    dispatch(tick());
  }, [dispatch]);
  const handleClickClear = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    dispatch(clearBoard());
  }, [dispatch]);
  React.useEffect(() => {
    if (speed <= 0) return;
    const interval = 1000 / speed;
    const clock = setInterval(() => {
      dispatch(tick());
    }, interval);
    return () => clearInterval(clock);
  }, [dispatch, speed]);
  return (
    <div className="Controls">
      <fieldset>
        <legend>Controls</legend>
        <div className="form-group">
          <label htmlFor="Controls-speed">Speed</label><br />
          <input id="Controls-speed" className="form-control-range" type="range" min={0} max={60} value={speed} onChange={handleChangeSpeed} />
        </div>
      </fieldset>
      <br />
      <fieldset>
        <legend>Actions</legend>
        <div className="d-flex">
          <div className="btn-group flex-fill" role="group">
            <button className="btn btn-light" type="button" onClick={handleClickStart}>Start</button>
            <button className="btn btn-light" type="button" onClick={handleClickStop}>Stop</button>
            <button className="btn btn-light" type="button" onClick={handleClickTick}>Tick</button>
            <button className="btn btn-light" type="button" onClick={handleClickClear}>Clear</button>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Controls;
