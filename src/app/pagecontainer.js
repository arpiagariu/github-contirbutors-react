import React, {Component} from 'react';
import $ from 'jquery';
import _ from 'lodash';
import {Contributor} from './contributor.js';
import {ContributorList} from './contributorlist.js'

export class PageContainer extends Component{
  constructor() {
          super();

    this.state= {data: []};
  }
  componentWillMount() {
    var defer = new Array();
    var repocall =  $.ajax({
      url: this.props.url,
      dataType: 'json',
    })
    .then((data)=>{
     var dataLength;
     for (dataLength = 0; dataLength <data.length;dataLength ++) {
       var ajax = $.ajax({
         url: data[dataLength].contributors_url,
         method: 'get'
       });
       defer.push(ajax);
     }
     Promise.all(defer).then((results)=>{
       var res = results.filter(Boolean);
       var resUniq = _.uniqBy(_.flattenDeep(res),'login');
       this.setState({data:resUniq});
     });
    });
  }
  render() {
    return (
      <div className="contributorDataBox">
        <h1>Contributors</h1>
        <ContributorList data = {this.state.data} />
      </div>
    );
  }
}


