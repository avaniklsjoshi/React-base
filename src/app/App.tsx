import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.scss';
import store from '../configurations/redux';
import Routes from './Routes';
import { PAGE_DISPLAY_NAMES, ROUTE_NAMES } from '../shared/enums';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">Awesome Usw</header>
          <section>
            <div className="navigator">
              <ul>
                <li>
                  <Link to={ROUTE_NAMES.LANDING_PAGE}>
                    {PAGE_DISPLAY_NAMES.LANDING_PAGE}
                  </Link>
                </li>
                <li>
                  <Link to={ROUTE_NAMES.FEATURES_PAGE}>
                    {PAGE_DISPLAY_NAMES.FEATURES_PAGE}
                  </Link>
                </li>
                <li>
                  <Link to={ROUTE_NAMES.CONTACT_PAGE}>
                    {PAGE_DISPLAY_NAMES.CONTACT_PAGE}
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default hot(App);
