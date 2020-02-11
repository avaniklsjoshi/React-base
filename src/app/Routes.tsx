import React from 'react';
import { Route, Switch } from 'react-router';
import { ROUTE_NAMES } from '../shared/enums';
import ContactPage from '../components/ContactPage';
import FeaturesPage from '../components/FeaturesPage';
import LandingPage from '../components/LandingPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTE_NAMES.LANDING_PAGE} component={LandingPage} />
      <Route path={ROUTE_NAMES.FEATURES_PAGE} exact component={FeaturesPage} />
      <Route path={ROUTE_NAMES.CONTACT_PAGE} exact component={ContactPage} />
    </Switch>
  );
}
