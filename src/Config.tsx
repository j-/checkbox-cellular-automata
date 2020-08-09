import * as React from 'react';
import { useDispatch, useSelector, getWidth, getHeight, getUnderPopulationThreshold, getOverPopulationThreshold, getResurrectionCount } from './store';
import { reset, setDimensions, setRules } from './store/actions';

const noop = () => {};

const Config: React.FC = () => {
  const dispatch = useDispatch();
  const width = useSelector(getWidth);
  const height = useSelector(getHeight);
  const underPopulationThreshold = useSelector(getUnderPopulationThreshold);
  const overPopulationThreshold = useSelector(getOverPopulationThreshold);
  const resurrectionCount = useSelector(getResurrectionCount);
  const handleClickReset = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    dispatch(reset());
  }, [dispatch]);
  return (
    <form onSubmit={noop}>
      <fieldset>
        <legend>Dimensions</legend>
        <div className="row">
          <div className="form-group col-sm">
            <label htmlFor="Config-width">Width</label><br />
            <input
              id="Config-width"
              className="form-control"
              type="number"
              min={3}
              max={30}
              value={width}
              onChange={(e) => dispatch(setDimensions(e.currentTarget.valueAsNumber, height))}
            />
          </div>
          <div className="form-group col-sm">
            <label htmlFor="Config-height">Height</label><br />
            <input
              id="Config-height"
              className="form-control"
              type="number"
              min={3}
              max={30}
              value={height}
              onChange={(e) => dispatch(setDimensions(width, e.currentTarget.valueAsNumber))}
            />
          </div>
        </div>
      </fieldset>
      <br />
      <fieldset>
        <legend>Rules</legend>
        <div className="row">
          <div className="form-group col-sm">
            <label htmlFor="Config-under">Under population threshold</label><br />
            <input
              id="Config-under"
              className="form-control"
              type="number"
              min={0}
              max={8}
              value={underPopulationThreshold}
              onChange={(e) => dispatch(setRules({
                underPopulationThreshold: e.currentTarget.valueAsNumber,
                overPopulationThreshold,
                resurrectionCount,
              }))}
            />
          </div>
          <div className="form-group col-sm">
            <label htmlFor="Config-over">Over population threshold</label><br />
            <input
              id="Config-over"
              className="form-control"
              type="number"
              min={0}
              max={8}
              value={overPopulationThreshold}
              onChange={(e) => dispatch(setRules({
                underPopulationThreshold,
                overPopulationThreshold: e.currentTarget.valueAsNumber,
                resurrectionCount,
              }))}
            />
          </div>
          <div className="form-group col-sm">
            <label htmlFor="Config-resurrection">Resurrection count</label><br />
            <input
              id="Config-resurrection"
              className="form-control"
              type="number"
              min={0}
              max={8}
              value={resurrectionCount}
              onChange={(e) => dispatch(setRules({
                underPopulationThreshold,
                overPopulationThreshold,
                resurrectionCount: e.currentTarget.valueAsNumber,
              }))}
            />
          </div>
        </div>
      </fieldset>
      <br />
      <button className="btn btn-light" type="submit" onClick={handleClickReset}>Reset config</button>
    </form>
  );
};

export default Config;
