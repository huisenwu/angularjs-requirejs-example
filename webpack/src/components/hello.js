define(['react'], function(React) {
    return React.createClass({
        displayName: 'example/hello',
        propsTypes: {
          hello: React.PropTypes.string
        },
        componentDidMount: function() {
          console.log('initial rendering hello componenet!');
        },
        render: function() {
            return <h1>{this.props.children}</h1>;
        }
    });
});
