const initialState = {
    rateState: [],
    isLoading: false,
    error: null
}

interface Action {
    type: string;
    payload?: any; 
    rates: any[] // You can define the payload type based on your requirements
  }

const rates = (state=initialState, action:Action) => {
    switch (action.type) {
        case "GET_RATES_REQUESTED":
          return {...state, isLoading: true}  
        case "GET_RATES_SUCCESS":
         return {...state, rateState: action.rates, isLoading: false}
        case "GET_RATES_FAILED":
         return {...state, error: "failed to fetch data", isLoading: false}
        default:
         return state;
    }
}

export default rates;