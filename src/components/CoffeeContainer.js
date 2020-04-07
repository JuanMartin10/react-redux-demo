import React from 'react'
import { connect } from 'react-redux'
import { buyCoffee } from '../redux'

const CoffeeContainer = (props) => {
    return (
        <div>
            <h2>Number of coffee - {props.numOfCoffees}</h2>
            <button onClick={props.buyCoffee}>Buy Coffee</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCoffees: state.coffees.numOfCoffees
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCoffee: () => dispatch(buyCoffee())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContainer)