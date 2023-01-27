import { Spinner } from "@salesforce/design-system-react";
import React from "react";
import "./index.css";
import NewNote from "./NewNote";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddCardOn: false,
            isSpinnerOn: false,
        };
    }

    render() {
        let data = (
            <div className="slds-card full-width-relative full-height-relative slds-is-relative">
            {this.state.isSpinnerOn && <Spinner />}
                <div className="slds-card__header slds-grid">
                    <div className="slds-media slds-media_center slds-has-flexi-truncate">
                        <div className="slds-media__body">
                            <h2 className="slds-text-heading_small">Notes App</h2>
                        </div>
                    </div>
                    <div className="slds-no-flex">
                        <div className="slds-button-group" role="group">
                            <button
                                className="slds-button slds-button_brand"
                                onClick={() => {
                                    this.handleAddClick();
                                }}
                            >
                                Add
                            </button>
                            <button className="slds-button slds-button_neutral">Refresh</button>
                        </div>
                    </div>
                </div>
                <div className="slds-card__body slds-p-horizontal_medium slds-p-vertical_medium">
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
        this.setState({ isAddCardOn: true });
    }

    onClose() {
        this.setState({ isAddCardOn: false });
    }
}
