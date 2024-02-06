import { useEffect, useState } from 'react'
import DropDownComponent from '../../components/common/DropDown/Index'
import { containerSize } from '../../constants'
import { containerType} from '../../constants'
import Button from '../../components/common/Button/Index'
import RateList from '../../components/Rate/RateList'
import { useRateStore } from '../../state/Rate'

const RateComponent = () => {
    const carrierNames = ["COSCO", "PIL", "CMA CGM", "MAERSK", "ONE", "OOCL", "MSC", "EVERGREEN", "ESL", "ZIM"]
    const [carrierName, setCarrierName] = useState<string>("COSCO")
    const[sizeSelected, setSizeSelected] = useState(false)
    const[typeSelected, setTypeSelected] = useState(false)
    const [selectedSizeValue, setSelectedSizeValue] = useState("20FT")
    const [selectedTypeValue, setSelectedTypeValue] = useState("DRY")
    const rateDataState = useRateStore((state) => state.rateData)
    const fetchRateData = useRateStore((state) => state.fetchRateData)
  
    useEffect(() => {
    const handleGetRate = async () => {
      try {
        const data = await fetchRateData(selectedSizeValue, selectedTypeValue)
        let rates = []
        for (let key of data){
         rates.push(key)
        }
      } catch (error:any) {
         throw new Error(error?.message)
      }
    }
    handleGetRate()
    }, [selectedSizeValue, selectedTypeValue])
  
    const handleButtonChange = (name: string) => {
      setCarrierName(name)
    }
  
  return (
    <div className='flex flex-col gap-[20px] gap-x-3'>
    <div className='flex flex-col md:flex-row justify-between gap-[20px] lg:gap-[140px] xl:gap-[190px]'>
      <div className='flex flex-row gap-[10px]'>
         <DropDownComponent selected={sizeSelected} setSelected={setSizeSelected} selectedValue={selectedSizeValue} setSelectedValue={setSelectedSizeValue} options={containerSize}/>
         <DropDownComponent selected={typeSelected} setSelected={setTypeSelected} selectedValue={selectedTypeValue} setSelectedValue={setSelectedTypeValue} options={containerType}/>
      </div>
      <div className='over overflow-x-scroll flex gap-5'>
         {carrierNames.map((name:string, i:any) => (
          <Button isActive={carrierName === name} key={i} onClick={() => handleButtonChange(name)} isLoading={false} text={name}>
             {name}
          </Button>
         ))}
      </div>
    </div>        
    <RateList name={carrierName} data={rateDataState}/>
  </div>
  )
}

export default RateComponent