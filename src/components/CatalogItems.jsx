var React = require('react');
var Item = require('./ItemBlock/Item.jsx');
var InfoBlock = require('./InfoBlock/InfoBlock.jsx');
var Menu = require('./MenuBlock/Menu.jsx');

require('./css/CatalogItems.css');
require('./css/Media.css');


var ITEMS = [
    {
        id: 1,
        name: 'ASUS Zenbook Pro UX501VW-FI109R',
        price: '1765',
        description:'15.6" 3840 x 2160 матовый, Intel Core i7 6700HQ 2600 МГц, 16 ГБ, 512 Гб (SSD), NVIDIA GeForce GTX 960M, Windows 10 Pro, цвет крышки серебристый, цвет корпуса серебристый'
//            image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
    }, {
        id: 2,
        name: 'ASUS GL552VW-DM321T',
        price: '1020',
        description: '15.6" 1920 x 1080 матовый, Intel Core i7 6700HQ 2600 МГц, 8 ГБ, 2000 ГБ (HDD), NVIDIA GeForce GTX 960M, Windows 10, цвет крышки черный, цвет корпуса черный'
//            image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
    }, {
        id: 3,
        name: 'ASUS Transformer Book Flip TP200SA-FV0108TS',
        price: '450',
        description: '11.6" 1366 x 768 глянцевый, сенсорный, Intel Celeron N3050 1600 МГц, 2 ГБ, 32 Гб (SSD), Intel HD Graphics, Windows 10, цвет крышки темно-синий, цвет корпуса синий'
//            image: 'http://www.youshouldshare.me/wp-content/uploads/2015/03/14264215682890-anigif_enhanced-buzz-13518-1367608452-4.gif'
    }, {
        id: 4,
        name: 'Dell Inspiron 15 7559 [Inspiron0375V]',
        price: '1300',
        description: '15.6" 1920 x 1080 матовый, Intel Core i7 6700HQ 2600 МГц, 8 ГБ, 1000 ГБ + 8 Гб (гибридный HDD), NVIDIA GeForce GTX 960M, Windows 10, цвет крышки темно-серый, цвет корпуса темно-серый/черный'
//            image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
    },
    {
        id: 5,
        name: 'Lenovo G70-35 [80Q5000TRK]',
        price: '1760',
        description: '17.3" 1600 x 900 глянцевый, AMD A6 6310 1800 МГц, 4 ГБ, 1000 ГБ (HDD), AMD Radeon R5 M330, Windows 10, цвет крышки черный, цвет корпуса темно-серый/черный'
//            image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
    }, {
        id: 6,
        name: 'HP Spectre 13-4193dx x360 [N5S04UA]',
        price: '1260',
        description: '13.3" 2560 x 1440 глянцевый, сенсорный, Intel Core i7 6500U 2500 МГц, 8 ГБ, 256 Гб (SSD), Intel HD Graphics 520, Windows 10, цвет крышки черный, цвет корпуса черный'
//            image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
    }, {
        id: 7,
        name: 'MSI GE72 6QD-028XPL Apache Pro',
        price: '1700',
        description: '17.3" 1920 x 1080 матовый, Intel Core i7 6700HQ 2600 МГц, 8 ГБ, 1000 ГБ (HDD), NVIDIA GeForce GTX 960M, без ОС, цвет крышки черный, цвет корпуса черный'
//            image: 'http://www.youshouldshare.me/wp-content/uploads/2015/03/14264215682890-anigif_enhanced-buzz-13518-1367608452-4.gif'
    }, {
        id: 8,
        name: 'Lenovo Y700-17 [80Q0005VUA]',
        price: '1170',
        description: '17.3" 1920 x 1080 матовый, Intel Core i7 6700HQ 2600 МГц, 16 ГБ, 1000 ГБ + 128 Гб (HDD + SSD), NVIDIA GeForce GTX 960M, Windows 10, цвет крышки черный, цвет корпуса черный'
//            image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
    }
];


var CatalogItems = React.createClass({
    getInitialState: function() {
        return {
            displayedItems: ITEMS
        };
    },

    handleSearch: function(event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedItems = ITEMS.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedItems: displayedItems
        });
    },

    render: function() {
        return (
            <div>
                <div className="header">
                    Online shop
                    <input type="text" className="search-field right" placeholder="Search"
                           onChange={this.handleSearch}/>
                </div>
                <div className="row">
                    <Menu />

                    <div className="col-6">
                        <h1>The Catalog Items:</h1>
                        {
                            this.state.displayedItems.map(function (element) {
                                return <Item item={element}/>;
                            })
                        }
                    </div>

                    <InfoBlock />
                </div>

                <div className="footer">
                    <p>Created by Anton Churin</p>
                </div>
            </div>
        );
    }

});

module.exports = CatalogItems;
