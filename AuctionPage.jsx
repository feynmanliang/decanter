AuctionPage = React.createClass({
  mixins: [ReactMeteorData],
  propTypes: {
    _id: React.PropTypes.string.isRequired
  },
  getMeteorData() {
    return {
      auction: Auctions.findOne(this.props._id),
      currentUser: Meteor.user(),
      itemBids: this.sortDescend(Bids.find({}).fetch())
    }
  },
  sortDescend() {
    return arguments[0].sort(function(a,b) {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  },
  handleSubmit() {
    event.preventDefault();

    var bid = +React.findDOMNode(this.refs.bidInput).value.trim();

    //TODO: create bid collection. Each auction (unique _id Auctions) has many bids
    //each bid object is related to Auction by unique _id --> {auctionId: _id,
    //bids: [{userId: _id, bid: number, createdAt: newDate()}, ..]}
    let d = new Date();
    console.log("Bid value of " + bid + " submitted!");
    Bids.insert({auctionId: this.props._id,
                 userId: Meteor.userId(),
                 bid: bid,
                 createdAt: d.getTime()});
  },
  displayBids() {
    return _.map(this.data.itemBids, function(bid) {
      return <div className="item">{bid.bid}</div>;
    });
  },
  render() {
    console.log(this.props._id);
    console.log(this.data.auction);
    return (
      <span>
        <div>
          <h1>{this.data.auction.title}</h1>
          <h2>{moment(this.data.auction.createdAt).format()}</h2>
          <p>{this.data.auction.description}</p>

          { this.data.currentUser ?
            <form className="new-bid" onSubmit={this.handleSubmit}>
              <input
                type="number"
                ref="bidInput"
                step="0.01"
                placeholder="Enter bid price" /><br />
            </form>
            : "Must be logged in to bid"
          }
        </div>
        <div className="ui list">
          {this.displayBids()}
        </div>
      </span>
    );
  }
});
