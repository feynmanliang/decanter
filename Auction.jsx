Auction = React.createClass({
  propTypes: {
    auction: React.PropTypes.object.isRequired
  },
  render() {
    const imgPath = "laph.jpg";
    const imageStyle = {background: "center center",  height: "100px", backgroundImage: 'url("http://sr1.wine-searcher.net/images/labels/91/16/10379116.jpg")'};
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
