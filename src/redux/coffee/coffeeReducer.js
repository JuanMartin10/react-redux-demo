import { BUY_COFFEE } from './coffeeTypes'

const initialState = {
    numOfCoffees: 45
}

const coffeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_COFFEE: return {
            ...state,
            numOfCoffees: state.numOfCoffees - 1
        }
        default: return state
    }
}

export default coffeesReducer