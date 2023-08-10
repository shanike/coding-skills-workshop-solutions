import { BrowserRouter } from 'react-router-dom';

import { DestructuringProps } from './components/DestructuringProps';
import { LordOfTheRings } from './components/lord-of-the-rings/LordOfTheRings';
import { Guests } from './components/guests/Guests2';
import { Settings } from './components/settings/Settings';
import { Parent } from './components/SplittingComponents';
import Square from './components/Square';
import { Avengers } from './components/avengers/avengers';

import './App.scss';
import './common/style/class-names.scss';


function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <section>
          <Settings />
        </section>

        <section>
          <Guests />
        </section>

        <section>
          <Square />
        </section>

        <section>
          <Avengers />
        </section>

        <section>
          <DestructuringProps />
        </section>

        <section>
          <LordOfTheRings />
        </section>

        {/* <Parent /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
