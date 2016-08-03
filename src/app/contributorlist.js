import React, {Component} from 'react';

import {Contributor} from './contributor.js';


export class ContributorList extends Component{
  render() {
    var contributorDataNodes = this.props.data.map(function(contributorData) {
      return (
        <Contributor contributorData={contributorData} key={contributorData.id}></Contributor>
      );
    });
    return (
      <div className="contributorDataList">
        {contributorDataNodes}
      </div>
    );
  }
}