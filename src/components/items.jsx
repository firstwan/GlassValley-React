import React, { Component } from "react";
import Item from "./item";
import ItemCreate from "./itemCreate";

class Items extends Component {
  state = {
    loading: true,
    itemsData: [],
  };

  componentDidMount() {
    this.getItemList();
  }

  renderItems() {
    if (this.state.itemsData.length == 0) return <p>There are no item!</p>;
    else
      return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Key</th>
              <th scope="col">Value</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.itemsData.map((item) => (
            <Item className="m-2" item={item} key={item.key} onDelete={this.handleDelete} />
            ))}
          </tbody>
        </table>
      );
  }

  render() {
    return (
      <div>
        <ItemCreate onCreate={this.handleCreate} />

        <div className="container">
          {this.state.loading ? <p>loading...</p> : this.renderItems()}
        </div>
      </div>
    );
  }

  getItemList() {
    this.setState({ loading: true });
    const apiUrl = "http://localhost:5000/Items";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => this.setState({ itemsData: data, loading: false }))
      .catch(console.log);
  }

  handleCreate = (itemKey, itemValue) => {
    const apiUrl = "http://localhost:5000/Items";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        key: itemKey,
        value: itemValue,
      }),
    })
      .then((resp) => this.getItemList())
      .catch(console.log);
  };

  handleDelete = (itemKey) => {
    const apiUrl = "http://localhost:5000/Items";

    fetch(`${apiUrl}/${itemKey}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        }
      })
        .then((resp) => this.getItemList())
        .catch(console.log);
  }
}

export default Items;
