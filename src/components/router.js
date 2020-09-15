import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Index from './pages';
import Sports from './pages/sports';
import Recipes from './pages/recipes';
import RecipesDetailTitles from './pages/recipesDetailTitles';
import recipesDetailContent from './pages/recipesDetailContent';
import Advisors from './pages/advisors';
import SportSubCategories from './pages/sportSubCategories';
import SportSubCatTabTitle from './pages/sportSubCatTabTitle';
import SportSubCatTabContent from './pages/sportSubCatTabContent';

export default class RouterComp extends Component {
  render() {
    return (
        <Router>
          <Route path="/" component={Index} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/sports/sub-cats" component={SportSubCategories} />
          <Route exact path="/sports/sub-cats/tab-title" component={SportSubCatTabTitle} />
          <Route exact path="/sports/sub-cats/tab-content" component={SportSubCatTabContent} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes-detail-title" component={RecipesDetailTitles} />
          <Route exact path="/recipes-detail-content" component={recipesDetailContent} />
          <Route exact path="/advisors" component={Advisors} />
        </Router>
    );
  }
}
