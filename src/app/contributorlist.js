import {Contributor} from './contributor.js';
import React from 'react';


export class ContributorList extends React.Component{
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