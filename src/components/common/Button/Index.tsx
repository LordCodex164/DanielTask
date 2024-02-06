import React from 'react'

interface buttonProps{
  isLoading:boolean;
  text: string;
  variant?: "primary" | "success" | "white"
  disabled?: boolean;
  size?: "small" | "full" | "medium";
  onClick:  (name: string) => void;
  children?: React.ReactNode;
  isActive: boolean
 
}

const Button = ({text, isLoading, children, onClick, isActive}: buttonProps) => {

  return (
    <>
    <button onClick={() => onClick(text)} className={`border-[1px] whitespace-nowrap border-[#1F2937] ${isActive && "bg-[#1F2937] text-[#fff]"} px-4 py-3 text-[16px] min-h-[50px]`}>
       {isLoading ? (
         <div>
            Loading...
         </div>
       ): (
        text || children
       )}   
     </button>
    </>
  )
}

export default Button