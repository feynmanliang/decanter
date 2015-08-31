Header =  React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currUser: Meteor.user()
    };
  },
  logOut() {
    event.preventDefault();
    AccountsTemplates.logout();
  },
  render() {
    return (
      <span>
        <div className="ui secondary  menu">
          <a className="active item">
            Home
          </a>
          <a className="item">
            Create New Auction
          </a>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
              </div>
            </div>
            {this.data.currUser ?
              <a className="item" onClick={this.logOut}>
                logout
              </a> :
              <a href="/signin">
                login/signup
              </a>}
          </div>
        </div>
        {this.props.content}
      </span>
    );
  }
});
