import React from 'react'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

type ProblemDescriptionProps = {};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
  return (
		<div className='bg-dark-layer-1'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>1. Two Sum</div>
						</div>
            <div className='flex items-center mt-3'>
              <div className='
                text-olive 
                bg-olive 
                inline-block 
                rounded-[21px] 
                bg-opacity-[.15] 
                px-2.5 
                py-1 
                text-xs 
                font-medium 
                capitalize'
              >
                Easy
              </div>
              <div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
                <BsCheck2Circle />
              </div>
              <div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
                <AiFillLike />
                <span className='text-xs'>127</span>
              </div>
              <div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
                <AiFillDislike />
                <span className='text-xs'>998</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default ProblemDescription;