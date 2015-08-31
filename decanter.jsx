Auctions = new Mongo.Collection("auctions");

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 2,
  },
  //{
  //    _id: 'email',
  //    type: 'email',
  //    required: true,
  //    displayName: "email",
  //    re: /.+@(.+){2,}\.(.+){2,}/,
  //    errStr: 'Invalid email',
  //},
  pwd
]);
AccountsTemplates.configure({
   onSubmitHook: function() {
    FlowRouter.go('/');
   },
   onLogoutHook: function() {
    FlowRouter.go('/');
   }
});
if (Meteor.isClient) {
  //comment
}
