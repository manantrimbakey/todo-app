import React from "react";
import "./index.css";

export default class NewNote extends React.Component {
    render() {
        return (
            <div class="slds-box_border slds-box_shadow">
                <div class="slds-card">
                    <div class="slds-card__header slds-grid">
                        <div class="slds-media slds-media_center slds-has-flexi-truncate">
                            <div class="slds-media__body">
                                <h2 class="slds-text-heading_small">Create New Note</h2>
                            </div>
                        </div>
                        <div class="slds-no-flex">
                            <div class="slds-button-group" role="group">
                                <button class="slds-button slds-button_brand">Save</button>
                                <button
                                    class="slds-button slds-button_destructive"
                                    onClick={() => {
                                        this.handleClose();
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="slds-card__body slds-p-horizontal_medium slds-p-vertical_medium">
                        <div class="slds-form-element">
                            <label class="slds-form-element__label" for="noteTitle">
                                Title
                                <abbr class="slds-required" title="Required">
                                    *
                                </abbr>
                            </label>
                            <div class="slds-form-element__control">
                                <input type="text" id="noteTitle" class="slds-input" placeholder="Enter Title" />
                            </div>
                        </div>
                        <div class="slds-form-element">
                            <label class="slds-form-element__label" for="rich-text-area">
                                Rich Text Area
                            </label>
                            <div class="slds-form-element__control">
                                <textarea id="rich-text-area" class="slds-textarea"></textarea>
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
