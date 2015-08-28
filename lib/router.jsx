FlowRouter.route("/", {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <App />
    });
  }
});

FlowRouter.route('/auction/:_id', {
  name: 'auction',
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <AuctionPage _id={params._id} />
    });
  }
});
