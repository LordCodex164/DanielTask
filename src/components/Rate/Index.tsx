import { useEffect, useState } from 'react'
import DropDownComponent from '../../components/common/DropDown/Index'
import { containerSize } from '../../constants'
import { containerType} from '../../constants'
import Button from '../../components/common/Button/Index'
import RateList from '../../components/Rate/RateList'
import toast from 'react-hot-toast'
import {PuffLoader} from "react-spinners"
import { useSelector, useDispatch } from 'react-redux'
import { getRateByTypeAndSize } from '../../store/actions'

const RateComponent = () => {

  const dispatch = useDispatch()

    const buttonCarrierNames = ["COSCO", "PIL", "CMA CGM", "MAERSK", "ONE", "OOCL", "EVERGREEN", "ESL", "ZIM"]
    
    const [carrierName, setCarrierName] = useState<string>("COSCO")
    const[sizeSelected, setSizeSelected] = useState(false)
    const[typeSelected, setTypeSelected] = useState(false)
    const [selectedSizeValue, setSelectedSizeValue] = useState("20FT")
    const [selectedTypeValue, setSelectedTypeValue] = useState("DRY")

    // const rateDataState = useRateStore((state) => state.rateData)
    // const fetchRateData = useRateStore((state) => state.fetchRateData)
    // const isLoading = useRateStore((state) => state.isLoading)

    const rateState = useSelector((state:any) => state.rates.rateState)
    const isLoading = useSelector((state:any) => state.rates.isLoading)
    const error = useSelector((state:any) => state.rates.error) 
    


    useEffect(() => {
      dispatch(getRateByTypeAndSize(selectedSizeValue, selectedTypeValue.toLowerCase()))
      toast.error(error)
    }, [selectedSizeValue, selectedTypeValue])

  
    const handleButtonChange = (name: string) => {
      setCarrierName(name)
    }
  
  return (
    <div className='w-full lg:max-w-[1200px] mx-auto px-6 relative '>
    <h1 style={{fontWeight: 700}} className='text-black font-bold text-[20px] lg:text-[40px] pt-[14px] pb-[40px]'>Special Rates</h1>
    {isLoading ?
     <div className='flex justify-center'>
       <PuffLoader color="#36d7b7" />
    </div>
   : 
   <div className='flex flex-col gap-[20px] gap-x-3'>
      <div className='flex flex-col md:flex-row justify-between gap-[20px] lg:gap-[140px] xl:gap-[190px]'>
        <div className='flex flex-row gap-[10px]'>
           <DropDownComponent selected={sizeSelected} setSelected={setSizeSelected} selectedValue={selectedSizeValue} setSelectedValue={setSelectedSizeValue} options={containerSize}/>
           <DropDownComponent selected={typeSelected} setSelected={setTypeSelected} selectedValue={selectedTypeValue} setSelectedValue={setSelectedTypeValue} options={containerType}/>
        </div>
        <div className='over overflow-x-scroll flex gap-5'>
           {buttonCarrierNames.map((name:string, i:any) => (
            <Button isActive={carrierName === name} key={i} onClick={() => handleButtonChange(name)} isLoading={false} text={name}>
               {name}
            </Button>
           ))}
        </div>
      </div>        
      <RateList name={carrierName} data={rateState}/>
    </div>
   }
  </div>
  )
}

export default RateComponent