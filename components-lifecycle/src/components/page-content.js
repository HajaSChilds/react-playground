import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Rules from "./Rules";
import Discussion from "./Discussion";
import Workflow from "./Workflow";
import DiscussionList from "./DiscussionList";

export default function() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Discussion} />
          <Route exact path="/rules" component={Rules} />
          <Route exact path="/workflow" component={Workflow} />
          <Route exact path="/discussionlist" component={DiscussionList}/>
        </Switch>
      </div>
    );
}
