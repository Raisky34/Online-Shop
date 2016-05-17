var React = require('react');
var InfoItem = require('./InfoItem.jsx');

require('./../css/Menu.css');
require('./../css/Media.css');

let INFO = [
    {
        title:"What?",
        body:"Chania is a city on the island of Crete."
    },
    {
        title:"Where?",
        body:"Crete is a Greek island in the Mediterranean Sea."
    },
    {
        title:"How?",
        body:"You can reach Chania airport from all over Europe."
    }
];

var Info = React.createClass({
    getInitialState: function() {
        return {
            displayedItems: INFO
        };
    },

    render: function() {
        return (
            <div className="col-3 right">
                <div className="aside">
                    {this.state.displayedItems.map(function(item){
                       return <InfoItem item={item}/>
                    })}
                </div>
            </div>
        );
    }

});

module.exports = Info;
