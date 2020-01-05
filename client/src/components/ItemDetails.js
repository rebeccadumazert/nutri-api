import React, { Component } from 'react';
import { getDetailsItem } from '../services/brandsServices';

export default class ItemDetails extends Component {
  state = {
    itemDetails: [],
  };

  componentDidMount() {
    this.fetchDetailsItem();
  }

  fetchDetailsItem = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { results: itemDetails } = await getDetailsItem(id);
    this.setState({ itemDetails });
  };

  render() {
    const {
      itemDetails: { item_name, nf_calories, nf_sodium },
    } = this.state;
    return (
      <div>
        <h1>{item_name}</h1>
        <p>Calories : {nf_calories}</p>
        <p>Sodium : {nf_sodium} mlg</p>
      </div>
    );
  }
}
