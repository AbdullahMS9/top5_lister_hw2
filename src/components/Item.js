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
        if (event.detail === 2){ 
            this.setState({
                editActive: !this.state.editActive
            });}
    }
    handleToggleEdit = () => {
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
        this.props.renameItm(this.props.itmKey, this.state.text, this.props.currentList.key);
        this.setState({
            editActive: !this.state.editActive
        });
    }
    handleDragStart = (event) =>{
        //event.preventDefault();
        this.state.text = this.props.itm
        event.dataTransfer.setData("key", this.props.itmKey)
        
    }
    handleDragOver = (event) => {
        event.preventDefault();
        event.target.classList.add("top5-item-dragged-to");
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        event.target.classList.remove("top5-item-dragged-to");
    }
    handleDragDrop =(event) =>{
        event.preventDefault();
        let oKey = event.dataTransfer.getData("key");
        let nKey = event.target.id.substring(10);
        this.props.dragItm(oKey, nKey);
        event.target.classList.remove("top5-item-dragged-to");
    }

    render() {
        const { itm, itmkey } = this.props;
        if (this.state.editActive) {
            return (
                <div id={'top5-item-' + (itmkey)} className={'top5-item' }>
                    <input
                        id={"top-5-item-" + (itmkey)}
                        className='top-5-item-'
                        type='text'
                        onKeyPress={this.handleKeyPress}
                        onBlur={this.handleBlur}
                        onChange={this.handleUpdate}
                        defaultValue={itm}
                    />
                </div>)
        }
        else {
            return (
                <div 
                    id={'top5-item-' + (itmkey)}
                    className={'top5-item'}
                    onClick={this.handleClick}
                    draggable = "true"
                    onDragStart = {this.handleDragStart}
                    onDragOver = {this.handleDragOver}
                    onDragLeave = {this.handleDragLeave}
                    onDrop = {this.handleDragDrop}
                    >
                    <span>
                        {itm}
                    </span>
                    
                </div>
            );
        }
    }
}