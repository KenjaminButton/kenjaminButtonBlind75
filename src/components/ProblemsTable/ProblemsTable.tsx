import React from 'react';
import { problems } from '@/mockData/problems';
import {BsCheckCircle} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import Link from 'next/link';
type ProblemsTableProps = {
    
};

const ProblemsTable:React.FC<ProblemsTableProps> = () => {
    
  return (
    <tbody className='text-white'>
      {problems.map( (doc, idx) => {
        const difficultyColor = doc.difficulty === 'Easy' ? 'text-dark-green-s' : doc.difficulty === 'Medium' ? 'text-dark-yellow' : 'text-dark-pink'
        return (
          <tr className={`${idx % 2 === 1 ? `bg-dark-layer-1` : `` }`} key={doc.id}>
            <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
              <BsCheckCircle fontSize={'20'} width={'20'}/>
            </th>
            <td>
              <Link className='hover: text-blue-500 cursor-pointer' href={`/problems/${doc.id}`}>
                {doc.title}
              </Link>
            </td>
            <td className={`px-6 py-4 ${difficultyColor}`}>
              {doc.difficulty}
            </td>
            <td className={'px-6 py-4'}>
              {doc.category}
            </td>
            <td className={'px-6 py-4'}>
              {doc.videoId ? (<AiFillYoutube />) : (
                <p className='text-gray-400'>I'll post this after I solve it</p>
              )}
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
export default ProblemsTable;

