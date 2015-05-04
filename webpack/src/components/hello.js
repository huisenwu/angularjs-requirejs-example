define(['external/react'], function(React) {
    return React.createClass({
        displayName: 'example/hello',
        render: function() {
            return <h1>{this.props.children}</h1>;
        }
    });
});
