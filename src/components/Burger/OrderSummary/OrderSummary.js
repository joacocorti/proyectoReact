import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3>Tu Orden</h3>
                <p>Una hamburguesa deliciosa con los siguientes ingredientes:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Precio Total: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continuar al checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCELAR</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUAR</Button>
            </Aux>
        );
    }
}

export default OrderSummary;