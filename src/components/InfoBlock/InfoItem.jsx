var React = require('react');

var InfoItem = React.createClass({
    getInitialState: function() {
        return null;
    },

    render: function() {
        return (
            <div>
                <h2>
                    {this.props.item.title}
                </h2>
                <p>
                    {this.props.item.body}
                </p>
            </div>
        );
    }

});

module.exports = InfoItem;
