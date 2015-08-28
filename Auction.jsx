// Task component - represents a single todo item
Auction = React.createClass({
  propTypes: {
    auction: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.auction.text}</li>
    );
  }
});
