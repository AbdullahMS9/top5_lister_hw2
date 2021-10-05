import React from "react";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.itm,
            editActive: false,
        }
    }
    handleClick = () => {
        this.setState({
            editActive: !this.state.editActive
        });
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
        this.props.renameItm(this.props.itmkey, this.state.text);
        this.setState({
            editActive: !this.state.editActive
        });
    }

    render() {
        const { itm, itmkey } = this.props;
        if (this.state.editActive) {
            return (
                <div id={'top5-item-' + (itmkey-1)} className={'top5-item' }>
                    <input
                        id={"top-5-item-" + (itmkey-1)}
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