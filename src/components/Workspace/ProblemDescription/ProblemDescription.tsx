import { Problem } from '@/utils/types/problem';
import React from 'react'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

type ProblemDescriptionProps = {
  problem: Problem
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({problem}) => {
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
							<div className='flex-1 mr-2 text-lg text-white font-medium'>{problem.title}</div>
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
              <div className='cursor-pointer hover:bg-dark-fill-3 rounded p-[3px] ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-7'>
                <TiStarOutline />
              </div>
            </div>

            {/* Problem Statement aka Paragraphs */}
            <div className='text-white text-sm'>
              <div 
                // Type 'string' is not assignable to type '{ __html: string | TrustedHTML; 
                // dangerouslySetInnerHTML={problem.problemStatement}
                dangerouslySetInnerHTML={{
                  __html: problem.problemStatement
                }}
              />
            </div>

            {/* {Examples} */}
            <div className='mt-4'>
              {/* Example 1 */}
              <div>
                <p className='font-medium text-white'>Example 1:</p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input: </strong> nums = [2, 7, 11, 15], target=9{" "}, we return [0, 1]
                      <br />
                      <strong>Output:</strong> [0, 1] <br />
                      <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
                  </pre>
                </div>
              </div>
              {/* Example 2 */}
              <div>
                <p className='font-medium text-white'>Example 2:</p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input: </strong> nums = [2, 7, 11, 15], target=9{" "}, we return [0, 1]
                      <br />
                      <strong>Output:</strong> [0, 1] <br />
                      <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
                  </pre>
                </div>
              </div>
              {/* Example 3 */}
              <div>
                <p className='font-medium text-white'>Example 3:</p>
                <div className='example-card'>
                  <pre>
                    <strong className='text-white'>Input: </strong> nums = [2, 7, 11, 15], target=9{" "}, we return [0, 1]
                      <br />
                      <strong>Output:</strong> [0, 1] <br />
                      <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
                  </pre>
                </div>
              </div>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default ProblemDescription;