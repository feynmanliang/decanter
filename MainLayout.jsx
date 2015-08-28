MainLayout = React.createClass({
  render() {
    return (
      <div className="container">
        <header>
          <Header/>
        </header>
        <main>
          {this.props.content}
        </main>
        <footer>
        </footer>
      </div>
    );
  }
});
