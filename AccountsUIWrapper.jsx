AccountsUIWrapper = React.createClass({
  componentDidMount() {
    Blaze.render(Template.atForm,
      React.findDOMNode(this.refs.container)
    );
  },
  render() {
    // Just render a placeholder container that will be filled in
    if (Meteor.user()) {
      FlowRouter.go('/');
    }
    return <span ref="container" />;
  }
});
