AccountsUIWrapper = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(
      Template.atForm,
      React.findDOMNode(this.refs.container)
    );
  },
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  },
  render() {
    // Just render a placeholder container that will be filled in
    return <span ref="container" />;
  }
});
