import React, { Component } from 'react';
import { getDetailsBrand } from '../services/brandsServices';
import { Link } from 'react-router-dom';

export default class BrandDetails extends Component {
  state = {
    detailsMenu: [],
  };

  // isMounted = false;

  componentDidMount() {
    // this.isMounted = true;
    this.fetchDetailsBrand();
  }

  componentWillUnmount() {
    // this.isMounted = false;
  }

  fetchDetailsBrand = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const {
      results: { hits: detailsMenu },
    } = await getDetailsBrand(id);
    this.setState({ detailsMenu });
  };

  render() {
    const { detailsMenu = [] } = this.state;
    return (
      <div>
        <h1>MENU</h1>
        {detailsMenu.map(({ _id: id, fields: { item_name: name } }) => (
          <Link to={`/item/${id}`}>
            <p key={id}>{name}</p>
          </Link>
        ))}
      </div>
    );
  }
}
