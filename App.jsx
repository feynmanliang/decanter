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
    var gridStyle = {width: "100%", minHeight: "150px"};
    return (
      <div className="container">
        <header>
          <Header/>
        </header>

        <div className="ui stackable four column grid" style={gridStyle}>
          {this.renderAuctions()}
        </div>
      </div>
    );
  }
});
