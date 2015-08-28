Auctions = new Mongo.Collection("auctions");

if (Meteor.isClient) {
  Meteor.startup(function () {
    React.render(<App />, document.getElementById("render-target"));
  });
}
