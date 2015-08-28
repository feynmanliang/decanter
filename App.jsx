// App component - represents the whole app
App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      auctions: Auctions.find({}).fetch()
    }
  },

  renderAuctions() {
    return this.data.auctions.map((auction) => {
      return <Auction key={auction._id} auction={auction} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Auctions</h1>
        </header>

        <ul>
          {this.renderAuctions()}
        </ul>
      </div>
    );
  }
});
