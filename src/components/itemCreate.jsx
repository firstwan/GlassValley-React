import React, { Component } from "react";

class ItemCreate extends Component {
  state = {
    itemKey: "",
    itemValue: "",
  };

  render() {
    return (
      <div className="container">
        <form className="d-flex flex-column">
          <label htmlFor="key">
            Key:
            <input
              name="key"
              type="text"
              className="form-control"
              value={this.state.itemKey}
              onChange={(e) => this.handleChange({ itemKey: e.target.value })}
            />
          </label>

          <label htmlFor="value">
            Value:
            <input
              name="value"
              type="text"
              className="form-control"
              value={this.state.itemValue}
              onChange={(e) => this.handleChange({ itemValue: e.target.value })}
            />
          </label>

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary m-2"
              type="button"
              onClick={this.createItem}
            >
              Create
            </button>

            <button
              className="btn btn-secondary m-2"
              type="button"
              onClick={this.resetValue}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }

resetValue = () => {
    this.setState({ itemKey: "", itemValue: "" });
  };

createItem = () => {
    this.props.onCreate(this.state.itemKey, this.state.itemValue);
    this.resetValue()
}

  handleChange = (changeObject) => {
    this.setState(changeObject);
  };
}

export default ItemCreate;
