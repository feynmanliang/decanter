Auction = React.createClass({
  propTypes: {
    auction: React.PropTypes.object.isRequired
  },
  render() {
    const imageStyle = {width: "100%", height: "40%"};
    return (
<<<<<<< HEAD
       <div className="column">
          <div className="back-image" style={imageStyle}></div>
            {this.props.auction.text}
       </div>
=======
      <li>({moment(this.props.auction.createdAt).format()}) {this.props.auction.title} - {this.props.auction.description}</li>
>>>>>>> c3b432076a524f0d7c5d36407bc6f29f7f06ca40
    );
  }
});
