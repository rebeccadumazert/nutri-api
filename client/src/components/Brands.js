import React, { Component } from 'react';
import { getBrands } from '../services/brandsServices';
import { Brand } from './Brand';

export default class Brands extends Component {
  state = {
    brands: [],
  };

  componentDidMount() {
    this.getBrandsInfo();
  }

  getBrandsInfo = async () => {
    const brands = await Promise.all([
      getBrands('54b52ef304e843bd19521251'),
      getBrands('513fbc1283aa2dc80c0000be'),
      getBrands('513fbc1283aa2dc80c00000a'),
      getBrands('51db37cb176fe9790a8998fb'),
    ]);
    this.setState(
      {
        brands,
      },
      () => console.log(this.state.brands)
    );
  };

  render() {
    const { brands } = this.state;

    return (
      <div>
        <h1>BRANDS</h1>
        {brands.map(brand => (
          <Brand key={brand.results.brand_id} brand={brand}></Brand>
        ))}
      </div>
    );
  }
}
