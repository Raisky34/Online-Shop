var ReactDOM = require('react-dom');
var React = require('react');
var CatalogItems = require('./components/CatalogItems.jsx');

ReactDOM.render(
    <CatalogItems />,
    document.getElementById('mount-point')
);