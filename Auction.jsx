// Task component - represents a single todo item
Auction = React.createClass({
  propTypes: {
    auction: React.PropTypes.object.isRequired
  },
  render() {
    const imageStyle = {width: "100%", height: "40%"};
    return (
       <div className="column">
          <div className="back-image" style={imageStyle}></div>
            {this.props.auction.text}
       </div>
    );
  }
});
