define(['external/react'], function(React) {
    return React.createClass({
        displayName: 'example/hello',
        render: function() {
            return <div>
                <h1>Hello World</h1>
                <div>{this.props.children}</div>
            </div>;
        }
    });
});
