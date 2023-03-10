import React, { Component } from 'react';
// import Title from '../Title';
import CartColumns from './cart-head';
import EmptyCart from './empty-cart';
import {ProductConsumer} from '../../context';
import CartList from './cart-item-list';
import CartTotals from './cart-summary';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value;
                        if(cart.length>0) {
                            return (
                                <React.Fragment>
                                    {/* <Title name="your" title="cart" /> */}
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <EmptyCart />
                            );
                        }
                    }}
                </ProductConsumer>

            </section>
        );
    }
}
