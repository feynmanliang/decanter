if (Meteor.isServer) {
  Meteor.startup( function() {

    if (Auctions.find({}).count() == 0) {
      _.times(10, function() {
        Auctions.insert({
          title: "Brora 32",
          description: "Fresh from Patrick's secret stash",
          createdAt: new Date()
        });
      })
    }

  })
}
