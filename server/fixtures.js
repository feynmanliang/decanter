if (Meteor.isServer) {
  Meteor.startup( function() {

    if (Auctions.find({}).count() == 0) {
      _.times(10, function() {
        Auctions.insert({
          userId: "asdf",
          title: "Brora 32",
          description: "Fresh from Patrick's secret stash",
          createdAt: new Date(),
          day: 10,
          month: 10,
          year: 2012,
          hour: 10,
          minute: 10
        });
      })
    }

  })
}
