import React, { useEffect } from 'react'
import RateCard from './RateCard';
import { RateListProps } from '../../@types';
import PaginationButton from '../PaginationButton/Pagination';

const RateList = ({name, data} : RateListProps) => {
    const [visibleRates, setVisibleRates] = React.useState(9)
    const [slicedData, setSlicedData] = React.useState([])
    const [buttonState, setButtonState] = React.useState("Show More")

    const handleLoadMore = (dataLength:number) => {
      setVisibleRates(dataLength)
      setButtonState("Show Less")
      if(buttonState === "Show Less"){
        setVisibleRates(9)
        setButtonState("Show More")
      }
    }

    useEffect(() => {
       const filteredRates = data?.filter((item:any) => item.carrier_name === name).slice(0, visibleRates)
       setSlicedData(filteredRates)
    }, [name])

  return (
    <div>
     {data.length ?
       <div className='grid w-full place-content-center place-items-stretch card-rates pt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
       {data.filter((item:any) => item.carrier_name === name).slice(0, visibleRates).map((item:any, i:any) => (
        <div key={i}> 
            <RateCard key={i} item={item}/>
        </div>
       ))}
    </div>
    : (
        <div>
          <hr className='mt-[32px] mb-[16px]'/>
          <span>No Rates To Display</span>
        </div>
    )}
       <PaginationButton 
       slicedData={slicedData} 
       visibleRates={visibleRates} 
       buttonState={buttonState} 
       data={data} 
       name={name}
       handleLoadMore={handleLoadMore}
       />
    </div>
    
  )
}

export default RateList