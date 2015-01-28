var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}, this is oceans lab challenge3 </div>;
  }
});

React.render(<HelloMessage name="visitor" />, document.body);
