var React = require('react');
var Modal = require('react-modal');

require('./../css/Item.css');


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)'
    }
};

var Item = React.createClass({
    getInitialState: function() {
        return { modalIsOpen: false };
    },

    openModal: function() {
        console.log('open');
        this.setState({modalIsOpen: true});
    },

    afterOpenModal: function() {
        this.refs.subtitle.style.color = '#f00';
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
    },
    render: function() {
        return (
            <div className="item" onClick={this.openModal}>
                <img className="item-image" src={this.props.item.image} width="60px" height= "60px"/>
                <div className="item-info">
                    <div className="item-name"> {this.props.item.name}</div>
                    <div className="item-price"> {this.props.item.price+'$'}</div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles} >

                    <div className="item-title-popup">{this.props.item.name}</div>
                    <div className="item-info-popup">
                        <img className="item-image" src={this.props.item.image} width="150px" height= "150px"/>
                        <div className="item-price-popup">Price : {this.props.item.price+'$'}</div>
                    </div>
                    <div className="item-description">Description :</div>
                    <div className="item-description">{this.props.item.description}</div>
                </Modal>
            </div>
        );
    }

});

module.exports = Item;
