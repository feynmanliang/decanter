AuctionPage = React.createClass({

  mixins: [ReactMeteorData],

  propTypes: {
    _id: React.PropTypes.string.isRequired
  },

  getMeteorData() {
    return {
      auction: Auctions.findOne(this.props._id),
      currentUser: Meteor.user()
    }
  },


  handleSubmit() {
    event.preventDefault();

    var bid = +React.findDOMNode(this.refs.bidInput).value.trim();

    console.log("Bid value of " + bid + " submitted!");
  },

  render() {
    console.log(this.props._id);
    console.log(this.data.auction);
    return (
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
    );
  }
});
