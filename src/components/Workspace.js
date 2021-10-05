import React from "react";
import Item from "./Item";

export default class Workspace extends React.Component {
    render() {
        const {currentList,renameItm} = this.props;
        if (currentList !== null){
            return(<div id="top5-workspace">
            <div id="workspace-edit">
                <div id="edit-numbering">
                    <div className="item-number">1.</div>
                    <div className="item-number">2.</div>
                    <div className="item-number">3.</div>
                    <div className="item-number">4.</div>
                    <div className="item-number">5.</div>
                </div>
                <div id="edit-items">
                    <Item
                        itmKey={1}
                        itm={currentList.items.at(0)}
                        renameItm = {renameItm}
                    />
                    <Item
                        itmKey={2}
                        itm={currentList.items.at(1)}
                        renameItm = {renameItm}
                    />
                    <Item
                        itmKey={3}
                        itm={currentList.items.at(2)}
                        renameItm = {renameItm}
                    />
                    <Item
                        itmKey={4}
                        itm={currentList.items.at(3)}
                        renameItm = {renameItm}
                    />
                    <Item
                        itmKey={5}
                        itm={currentList.items.at(4)}
                        renameItm = {renameItm}
                    />
                </div>
            </div>
        </div>)

        }
        else return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                </div>
            </div>
        )
    }
}