Auction = React.createClass({
  propTypes: {
    auction: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>({moment(this.props.auction.createdAt).format()}) {this.props.auction.title} - {this.props.auction.description}</li>
    );
  }
});
