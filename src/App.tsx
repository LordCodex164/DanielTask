import {PuffLoader} from "react-spinners"
import RateComponent from './components/Rate/Index'
import { useRateStore } from './state/Rate'

function App() {
  const isLoading = useRateStore((state) => state.isLoading)
  return (
    <>
      <div className='w-full lg:max-w-[1200px] mx-auto px-6 relative'>
        <h1 style={{fontWeight: 700}} className='text-black font-bold text-[20px] lg:text-[40px] pt-[14px] pb-[40px]'>Special Rates</h1>
        {isLoading ?
         <div className='flex justify-center'>
           <PuffLoader color="#36d7b7" />
        </div>
       : 
       <RateComponent/>
       }
      </div>
    </>
  )
}

export default App
