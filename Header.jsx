Header =  React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    console.log('inside get mete dat');

    console.log(Meteor.user());
    return {
      currUser: Meteor.user()
    };
  },
  render() {
    return (
      <span>
        <div className="ui secondary  menu">
          <a className="active item">
            Home
          </a>
          <a className="item">
            Messages
          </a>
          <a className="item">
            Friends
          </a>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
              </div>
            </div>
            <a className="item" href="/signin">
              {this.data.currUser ? " logout" : " login/signup"}
            </a>
          </div>
        </div>
        {this.props.content}
      </span>
    );
  }
});
