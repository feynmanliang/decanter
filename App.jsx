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
