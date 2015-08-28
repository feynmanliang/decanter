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

  handleSubmit() {
    event.preventDefault();

    // Find the text field via the React ref
    var title = React.findDOMNode(this.refs.titleInput).value.trim();
    var description = React.findDOMNode(this.refs.descriptionInput).value.trim();

    Auctions.insert({
      title: title,
      description: description,
      createdAt: new Date() // current time
    });

    // Clear form
    React.findDOMNode(this.refs.titleInput).value = "";
    React.findDOMNode(this.refs.descriptionInput).value = "";
  },

  render() {
    var gridStyle = {width: "100%", minHeight: "150px"};
    return (
      <div className="container">
        <header>
          <Header/>
        </header>

        <form className="new-auction" >
          <input
            type="title"
            ref="titleInput"
            placeholder="Auction title goes here" /><br />
          <input
            type="description"
            ref="descriptionInput"
            placeholder="Description goes here" /><br />
          <button
            type="submit"
            form="new-auction"
            value="Submit"
            onClick={this.handleSubmit} >
            Submit
          </button>
        </form>


        <div className="ui stackable four column grid" style={gridStyle}>
          {this.renderAuctions()}
        </div>
      </div>
    );
  }
});
