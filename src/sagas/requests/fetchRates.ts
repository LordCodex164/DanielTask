import { FreightifyOffer } from "../../@types";

const fetchGetRates =  (size: string, type: string): Promise<FreightifyOffer[]> => {
  const url =  `http://test-api.oneport365.com/api/live_rates/get_special_rates_no_auth?container_size=${size}&container_type=${type}`
  return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    throw new Error('Error fetching data from the API: ' + error.message);
  });
} 

export default fetchGetRates;
