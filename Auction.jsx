Auction = React.createClass({
  propTypes: {
    auction: React.PropTypes.object.isRequired
  },
  render() {
    const imageStyle = {width: "100%", height: "40%"};
    return (
       <div className="column">
          <div className="back-image" style={imageStyle}></div>
          <a href={FlowRouter.path("auction", {_id: this.props.auction._id}, {})}>
            {this.props.auction.title} -
            {this.props.auction.description} -
            {moment(this.props.auction.createdAt).format()}
          </a>
       </div>
    );
  }
});
