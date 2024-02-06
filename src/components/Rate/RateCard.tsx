import { FreightifyOffer } from '../../@types'

interface RateCardProps{
    item:FreightifyOffer
}

const RateCard = ({item}: RateCardProps) => {
    return (
        <div className='p-5 rounded-[10px] cursor-pointer border-[2px] lg:max-w-[312px] lg:min-w-full xl:min-w-[312px] xl:max-w-full md:min-h-[199px]  border-solid border-[#E5E7EB] hover:border-[#139C33]'>
            <div className='flex flex-col'>

                 <div className='flex flex-row justify-between mb-[24px]'>
                    <span className='flex flex-col gap-[10px]'>       
                       <p style={{fontWeight: 800}}>{item.carrier_name}</p>
                       <p style={{fontWeight: 800}} className='text-[20px] font-light text-[#004800]'>$ {" "}{item.total_amount_usd}</p>
                    </span>
                    <span>
                        {item.origin_port_code}-{item.destination_port_code}
                    </span>
                 </div>
                    <div>
                        <hr className='mb-[24px]'/>
                    </div>
                 <div className='grid grid-cols-3'>
                    <span className='inline-flex flex-col'>
                        <p>Sailing Date</p>
                        {item.sailing_date ? item?.sailing_date : "N/A"}
                    </span>
                    <span className='inline-flex flex-col'>
                         <p>Transit Time</p>
                        {item.transit_time ? <p>{item?.transit_time} days</p> : "N/A"}
                    </span>
                    <span className='inline-flex flex-col'>
                        <p>Free Days</p>
                       {item.demurrage_days}
                    </span>
                 </div>

            </div>
        </div>
    )
}


export default RateCard