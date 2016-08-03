import React from 'react';

export class Contributor extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <a href={this.props.contributorData.html_url}> <img src={this.props.contributorData.avatar_url} className =  "img-responsive" /></a>
            <div className="caption">
              <h3>{this.props.contributorData.login}</h3>
            </div>
        </div>
      </div>
    );
  }
}
