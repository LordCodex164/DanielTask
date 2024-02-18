import { FreightifyOffer } from '../../@types'

interface PaginationButtonProps{
    slicedData : FreightifyOffer[];
    buttonState: string;
    visibleRates: number;
    data: FreightifyOffer[];
    name: string;
    handleLoadMore: (length:number) => void

}

const PaginationButton = ({slicedData, buttonState, visibleRates, data, name, handleLoadMore}: PaginationButtonProps) => {
    const totalData = data?.filter((item:FreightifyOffer) => item.carrier_name === name).length
  return (
    <div className='flex justify-center pt-[40px] pb-[56px]'>
        {slicedData.length <= visibleRates 
        && slicedData.length === 9 &&
          <div className='flex flex-col gap-[16px] text-center'>
             <span>Viewing {visibleRates} of Special {data?.filter((item:FreightifyOffer) => item.carrier_name === name).length} rates</span>
            <button className="border-solid flex px-12 mx-auto border-[1px] border-[#374151] rounded py-3" onClick={() => handleLoadMore(totalData)}>
             {buttonState}
            </button>
        </div>  
         } 
    </div>
  )
}

export default PaginationButton