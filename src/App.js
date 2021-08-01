import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';

// import { Settings } from './components/Settings';
import Square from './components/Square.jsx';
import UsersList from './components/UsersList.jsx';
import { Rendi } from './components/Rendi';
import Input from './components/SimpleInput';
import Square2 from './components/Square2';

import { callFunctions } from './common/ArrayFunctions';

import './App.css';
function App() {

  useEffect(() => {
    // callFunctions()
  }, [])

  return (
    <div className="App">
      <Router>

        {/* <Settings isAdmin={true} /> */}

        {/* <Rendi /> */}

        {/* <Input /> */}

        <UsersList />

        {/* <Square /> */}
        {/* --------------------------------------------------------------------------------------------- */}
        {/* <Square2 /> */}

      </Router>
    </div>
  );
}

export default App;
