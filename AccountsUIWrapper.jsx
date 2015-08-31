AccountsUIWrapper = React.createClass({
  componentDidMount() {
    Blaze.render(Template.atForm,
//    this.view = Blaze.render(
//      Template.atForm,
      React.findDOMNode(this.refs.container)
    );
  },
  componentWillUnmount() {
    // Clean up Blaze view
//    Blaze.remove(this.view);
  },
  render() {
    console.log(AccountsTemplates.getState());
    console.log('accuiwrapper render');
    // Just render a placeholder container that will be filled in
    return <span ref="container" />;
  }
});
