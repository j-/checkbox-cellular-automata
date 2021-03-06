import * as React from 'react';
import Board from './Board';
import Config from './Config';
import Controls from './Controls';

const App: React.FC = () => (
  <div className="App container-fluid my-5">
    <a href="https://skeoh.com/" className="text-secondary">&larr; skeoh.com</a>
    <h1 className="mb-5">Checkbox cellular automata</h1>
    <div className="row">
      <div className="col-md">
        <div className="card card-body">
          <Config />
        </div>
      </div>
      <div className="col-md">
        <div className="card card-body">
          <Controls />
        </div>
      </div>
    </div>
    <div className="mt-5 mb-5 d-flex justify-content-center">
      <Board />
    </div>
  </div>
);

export default App;
