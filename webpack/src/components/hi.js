define(['external/react'], function(React) {
    return React.createClass({
        displayName: 'example/hello',
        render: function() {
            return <span>Hello World</span>;
        }
    });
});
