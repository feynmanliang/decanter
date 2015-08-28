AuctionPage = React.createClass({

  mixins: [ReactMeteorData],

  propTypes: {
    _id: React.PropTypes.string.isRequired
  },

  getMeteorData() {
    return {
      auction: Auctions.find(this.props._id).fetch()
    }
  },
  render() {
    console.log(this.data.auction);
    return (
      <div>
        {JSON.stringify(this.data.auction)}
      </div>
    );
  }
});
