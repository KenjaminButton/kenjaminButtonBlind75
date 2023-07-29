import React from 'react';
import { problems } from '@/mockData/problems';
import {BsCheckCircle} from 'react-icons/bs'
import Link from 'next/link';
type ProblemsTableProps = {
    
};

const ProblemsTable:React.FC<ProblemsTableProps> = () => {
    
  return (
    <tbody className='text-white'>
      {problems.map( (doc, idx) => {
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
          </tr>
          
        )
      })}
    </tbody>
  )
}
export default ProblemsTable;

