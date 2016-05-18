var React = require('react');

require('./../css/Menu.css');
require('./../css/Media.css');

var MenuItem = React.createClass({
    getInitialState: function() {
        return null;
    },

    openPage:function(){
        console.log(this.props.item);
    },

    render: function() {
        return (
            <li onClick={this.openPage}>{this.props.item.title}</li>
        );
    }

});

module.exports = MenuItem;
