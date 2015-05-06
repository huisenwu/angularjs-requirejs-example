define(['external/react'], function(React) {
    return React.createClass({
        displayName: 'example/hello',
        componentDidMount: function() {
          console.log('initial rendering hi componenet!');
        },
        render: function() {
            return <span>{this.props.children}</span>;
        }
    });
});
