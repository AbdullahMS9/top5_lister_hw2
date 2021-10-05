import React from "react";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.itm,
            editActive: false,
        }
    }
    handleClick = (event) => {
        if (event.detail === 1) {
            this.handleLoadList(event);
        }
        else if (event.detail === 2) {
            this.handleToggleEdit(event);
        }
    }
    handleLoadList = (event) => {
        let listKey = event.target.id;
        if (listKey.startsWith("list-card-text-")) {
            listKey = listKey.substring("list-card-text-".length);
        }
        this.props.loadListCallback(listKey);
    }
    handleDeleteList = (event) => {
        event.stopPropagation();
        this.props.deleteListCallback(this.props.keyNamePair);
    }
    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }
    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }
    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }
    handleBlur = () => {
        let key = this.props.keyNamePair.key;
        let textValue = this.state.text;
        console.log("Item handleBlur: " + textValue);
        this.props.renameListCallback(key, textValue);
        this.handleToggleEdit();
    }

    render() {
        const { itm, renameItm, itmkey } = this.props;

        if (this.state.editActive) {
            return (
                <input
                    id={"top-5-item-" + (itmkey-1)}
                    className='top-5-item-'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={itm}
                />)
        }
        else {
            return (
                <div
                    id={'top5-item-' + (itmkey-1)}
                    onClick={this.handleClick}
                    className={'top5-item' }>
                    <span>
                        {itm}
                    </span>
                    
                </div>
            );
        }
    }
}