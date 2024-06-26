import React from 'react';

type CardProps = {
    icon: any;
    heading :string;
    description : string;
    backGround :string

  };
  
  const Card: React.FC<CardProps> = ({ icon , heading , description ,backGround}) => {
    return (
        <div className=' rounded-[20px] overflow-hidden shadow-lg p-4 space-y-4 border-b border-blue-700' style={{background:backGround}}>
            <div className='bg-blue-600 w-1/6 h-25 rounded-md justify-items-center'>
                {icon}
            </div>
            <div className='text-2xl font-bold'>{heading}</div>
            <div className='text-sm'>{description}</div>
        </div>
    );
}

export default Card;