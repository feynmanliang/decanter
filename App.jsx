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
    if (Meteor.user()) {

      var title = React.findDOMNode(this.refs.titleInput).value.trim();
      var description = React.findDOMNode(this.refs.descriptionInput).value.trim();
      var day = React.findDOMNode(this.refs.day).value.trim();
      var month = React.findDOMNode(this.refs.month).value.trim();
      var year= React.findDOMNode(this.refs.year).value.trim();
      var hour = React.findDOMNode(this.refs.hour).value.trim();
      var minute = React.findDOMNode(this.refs.minute).value.trim();


      Auctions.insert({
        userId: Meteor.userId(),
        title: title,
        description: description,
        createdAt: new Date(), // current time
        day: day,
        month: month,
        year: year,
        hour: hour,
        minute: minute
      });
    }
      React.findDOMNode(this.refs.titleInput).value = "";
      React.findDOMNode(this.refs.descriptionInput).value = "";
      React.findDOMNode(this.refs.day).value = "";
      React.findDOMNode(this.refs.month).value = "";
      React.findDOMNode(this.refs.year).value = "";
      React.findDOMNode(this.refs.hour).value = "";
      React.findDOMNode(this.refs.minute).value = "";
  },
  displayCalendar() {
    return (
        <div className="fields">
          <div className="one wide field">
            <input type="text" ref="day" placeholder="day"/>
          </div>
          <div className="one wide field">
            <input type="text" ref="month" placeholder="month"/>
          </div>
          <div className="one wide field">
            <input type="text" ref="year" placeholder="year"/>
          </div>
          <div className="one wide field">
            <input type="text" ref="hour" placeholder="hour"/>
          </div> :
          <div className="one wide field">
            <input type="text" ref="minute" placeholder="minute"/>
          </div>
        </div>
    );
  },
  render() {
    var gridStyle = {width: "100%", minHeight: "150px"};
    return (
      <div>
        <div className="ui form">
          <form className="new-auction" >

           <div className="five wide field">
              <input type="text" placeholder="Auction Title" ref="titleInput"/>
            </div>

          <div className="five wide field">
            <textarea placeholder="Auction Description" rows="2" ref="descriptionInput"></textarea>
          </div>

          <label>Pick End Date</label>
          {this.displayCalendar()}

            <button
              type="submit"
              form="new-auction"
              value="Submit"
              className="ui basic button"
              onClick={this.handleSubmit} >
              Submit
            </button>
          </form>
        </div>

          <div className="ui stackable four column grid" style={gridStyle}>
            {this.renderAuctions()}
          </div>
      </div>
    );
  }
});
