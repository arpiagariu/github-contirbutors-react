import React from 'react';
import ReactDOM from 'react-dom';

import {PageContainer} from './app/pagecontainer.js';

ReactDOM.render(
  <PageContainer url = 'https://api.github.com/orgs/opencord/repos' />,
  document.getElementById('content')
);
