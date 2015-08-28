// App component - represents the whole app
App = React.createClass({
  getAuctions() {
    return [
      { _id: 1, text: "This is auction 1" },
    ];
  },

  renderAuctions() {
    return this.getAuctions().map((auction) => {
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
