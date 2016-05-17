var React = require('react');

require('./../css/Menu.css');
require('./../css/Media.css');

let MENU = [];

var Menu = React.createClass({
    getInitialState: function() {
        return {
            displayedItems: MENU
        };
    },

    render: function() {
        return (
            <div className="col-3 menu">
                <ul>
                    <li>News</li>
                    <li>NoteBooks</li>
                    <li>PC</li>
                    <li>Feedback</li>
                </ul>
            </div>
        );
    }

});

module.exports = Menu;
