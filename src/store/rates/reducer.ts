import { GET_RATE } from "./constants";


const initialState = {
    rateState: [],
    isLoading: true,
    error: null
}

interface Action {
    type: string;
    payload?: any; 
    rates: any[] // You can define the payload type based on your requirements
  }

const rates = (state=initialState, action:Action) => {
    switch (action.type) {
        case `${GET_RATE.REQUEST}`:
          return {...state, isLoading: true}  
        case `${GET_RATE.SUCCESS}`:
         return {...state, rateState: action.rates, isLoading: false}
        case `${GET_RATE.FAILURE}`:
         return {...state, error: "failed to fetch data", isLoading: false}
        default:
         return state;
    }
}

export default rates;