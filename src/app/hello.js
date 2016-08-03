var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentWillMount: function() {
    var defer = new Array();
    //var _this = this;
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
       //console.log(res);
       //var flatten = _.flattenDeep(res);
       var resUniq = _.uniqBy(_.flattenDeep(res),'login');
       //console.log(resUniq);
       this.setState({data:resUniq});
     });
    });

  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data = {this.state.data} />

      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    //console.log(this.props.data);
     var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment comment={comment} key={comment.id}></Comment>
      );
    });
    return (
      <div className="commentList">
                {commentNodes}
      </div>
    );
  }
});


var Comment = React.createClass({
  render: function() {
    return (
      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <a href={this.props.comment.html_url}> <img src={this.props.comment.avatar_url} className =  "img-responsive" /></a>
            <div className="caption">
              <h3>{this.props.comment.login}</h3>
            </div>
        </div>
          </div>
    );
  }
});
ReactDOM.render(
  <CommentBox url = 'https://api.github.com/orgs/opencord/repos' />,
  document.getElementById('content')
);