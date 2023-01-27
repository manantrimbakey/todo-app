import React from "react";
import "./index.css";

export default class NewNote extends React.Component {
    render() {
        return (
            <div className="slds-box_border slds-box_shadow">
                <div className="slds-card">
                    <div className="slds-card__header slds-grid">
                        <div className="slds-media slds-media_center slds-has-flexi-truncate">
                            <div className="slds-media__body">
                                <h2 className="slds-text-heading_small">Create New Note</h2>
                            </div>
                        </div>
                        <div className="slds-no-flex">
                            <div className="slds-button-group" role="group">
                                <button className="slds-button slds-button_brand">Save</button>
                                <button
                                    className="slds-button slds-button_destructive"
                                    onClick={() => {
                                        this.handleClose();
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="slds-card__body slds-p-horizontal_medium slds-p-vertical_medium">
                        <div className="slds-form-element">
                            <label className="slds-form-element__label" for="noteTitle">
                                Title
                                <abbr className="slds-required" title="Required">
                                    *
                                </abbr>
                            </label>
                            <div className="slds-form-element__control">
                                <input type="text" id="noteTitle" className="slds-input" placeholder="Enter Title" />
                            </div>
                        </div>
                        <div className="slds-form-element">
                            <label className="slds-form-element__label" for="rich-text-area">
                                Rich Text Area
                            </label>
                            <div className="slds-form-element__control">
                                <textarea id="rich-text-area" className="slds-textarea"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleClose() {
        this.props.onClose();
    }
}
