import React from "react";
import "./index.css";
import NewNote from "./NewNote";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddCardOn: false,
        };
    }

    render() {
        let data = (
            <div class="slds-card full-width-relative full-height-relative">
                <div class="slds-card__header slds-grid">
                    <div class="slds-media slds-media_center slds-has-flexi-truncate">
                        <div class="slds-media__body">
                            <h2 class="slds-text-heading_small">Notes App</h2>
                        </div>
                    </div>
                    <div class="slds-no-flex">
                        <div class="slds-button-group" role="group">
                            <button
                                class="slds-button slds-button_brand"
                                onClick={() => {
                                    this.handleAddClick();
                                }}
                            >
                                Add
                            </button>
                            <button class="slds-button slds-button_neutral">Refresh</button>
                        </div>
                    </div>
                </div>
                <div class="slds-card__body slds-p-horizontal_medium slds-p-vertical_medium">
                    {this.state.isAddCardOn ? (
                        <NewNote
                            onClose={() => {
                                this.onClose();
                            }}
                        />
                    ) : null}
                </div>
            </div>
        );
        return data;
    }

    handleAddClick() {
        console.log("Method Called");
        this.setState({ isAddCardOn: true });
    }

    onClose() {
        this.setState({ isAddCardOn: false });
    }
}
