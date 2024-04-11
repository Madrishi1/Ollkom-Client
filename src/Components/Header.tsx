import React from 'react';
import Button from './Button';



type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  
  return (
    <div className="bg-dark-blue text-white py-2 ">
        <div className="max-w-7xl mx-auto px-3 flex justify-between items-center border-b  pb-2">
            <div className="flex items-center gap-4">
                <span className="text-sm flex font-bold">About</span>
                <span className='text-border-grey text-lg'>|</span>
                <span className="text-sm flex font-bold" >Press</span>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-sm flex font-bold">Contact Sales</span>
                <span className='text-border-grey text-lg'>|</span>
                <span className="text-sm flex font-bold" >SAR</span>
            </div>
        </div>
        <div className="max-w-7xl mx-auto pt-5 pb-4 flex justify-around items-center ">
            <div className="flex items-center gap-8">
                <button className="rounded-full border border-blue-700 bg-transparent px-4 py-2  text-white">Home</button>
                <span className='text-sm flex '>Solution</span>
                <span className="text-sm flex " >Pricing</span>
            </div>
            <h3>
                OllKom
            </h3>
            <div className="flex items-center gap-6">
                <span className="text-sm flex font-semibold">Signin</span>
                <Button title={"Start Free Trial"} />
            </div>
        </div>
    </div>
  )
};

export default Header;