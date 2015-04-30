define(['external/react'], function(React) {
    return React.createClass({
        displayName: 'example/search',
        render: function() {
            return <div className="container"><div className="row"><div className="col-sm-6 col-sm-offset-3"><div id="imaginary_container"><div className="input-group stylish-input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-addon">
                            <button type="submit">
                                <span className="glyphicon glyphicon-search"></span>
                                </button>
                        </span>
                </div></div></div></div></div>;
        }
    });
});
