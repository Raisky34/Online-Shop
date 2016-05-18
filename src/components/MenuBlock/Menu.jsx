var React = require('react');
var MenuItem = require('./MenuItem');

require('./../css/Menu.css');
require('./../css/Media.css');

let MENU = [
    {
        id:0,
        title:"News"
    },
    {
        id:1,
        title:"NoteBooks"
    },
    {
        id:2,
        title:"PC"
    },
    {
        id:3,
        title:"Feedback"
    },
];

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
                    {this.state.displayedItems.map(function(item){
                        return <MenuItem item={item}/>
                    })}
                </ul>
            </div>
        );
    }

});

module.exports = Menu;
