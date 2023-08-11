import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from '../Buttons/Logout';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import Image from 'next/image';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { BsList } from 'react-icons/bs';
import Timer from '../Timer/Timer';
import { useRouter } from 'next/router';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';

type TopbarProps = {
  problemPage?: boolean
};

const Topbar:React.FC<TopbarProps> = ({problemPage}) => {
	const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState)
	const router = useRouter()
	const handleProblemChange = (isForward: boolean) => {
		// console.log(router.query) // cOnfirming pid field
		// console.log(problems[router.query.pid]) // Received an obj that need destructuring.
		const {order} = problems[router.query.pid as string] as Problem;
		const direction = isForward ? 1 : -1;
		const nextProblemOrder = order + direction
		const nextProblemkey = Object.keys(problems).find(key => problems[key].order === nextProblemOrder)
		// console.log('nextProblemkey', nextProblemkey)
		if (isForward && !nextProblemkey) {
			// If user is on last problem, next problem will take us to first problem in project.
			const firstProblemKey = Object.keys(problems).find(key => problems[key].order === 1)
			router.push(`/problems/${firstProblemKey}`)
		} else if (!isForward && !nextProblemkey) {
			// If user is on first problem, previous problem will take us to last problem in project.
			const lastProblemKey = Object.keys(problems).find(key => problems[key].order === Object.keys(problems).length)
			router.push(`/problems/${lastProblemKey}`)
		}
	}

  return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-indigo-400 text-white'>
			<div className={`flex w-full items-center justify-between ${!problemPage ? 'max-w-[1200px] mx-auto' : ''}`}>
				<Link href='/' className='h-[22px] flex-1'>
					<Image src='/logo-k.png' alt='Logo' height={100} width={100} />
				</Link>

				{problemPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						<div 
							className='
								flex 
								items-center 
								justify-center 
								rounded 
								bg-dark-fill-3 
								hover:bg-dark-fill2 
								h-8 
								w-8 
								cursor-pointer
							'
							onClick={() => handleProblemChange(false)}
						>
							<FaChevronLeft />
						</div>
						<Link href='/' className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'>
							<div>
								<BsList />
							</div>
							<p>Problem List</p>
						</Link>
						<div 
							className='
								flex 
								items-center 
								justify-center 
								rounded 
								bg-dark-fill-3 
								hover:bg-dark-fill2 
								h-8 
								w-8 
								cursor-pointer
							'
							onClick={() => handleProblemChange(true)}
						>
							<FaChevronRight />
						</div>
					</div>
				)}

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
						<a
							href='https://www.buymeacoffee.com/thekenjaminbutton'
							target='_blank'
							rel='noreferrer'
							className='bg-indigo-300 py-1.5 px-3 cursor-pointer rounded text-orange-300 hover:bg-dark-fill-2'
						>
							Buy Me a Coffee
						</a>
					</div>

				{!user && (
					<Link href='/auth' onClick={ () => {
						setAuthModalState( (prev) => ({
							...prev, isOpen: true, type: 'login'
						}))
					}}>
						<button className='bg-indigo-300 py-1 px-2 cursor-pointer rounded '>Sign In</button>
					</Link>
				)}

				{user && problemPage && <Timer />}
				{user && (
					<div className='cursor-pointer group relative'>
						<img src='/avatar.png' alt='user profile placeholder image' className='h-8 w-8 rounded-full'/>
						{/* On hover over user avatar, display user's email by sacling from 0 to 100%*/}

						<div
							className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-orange-300 p-2 rounded shadow-lg 
							z-40 group-hover:scale-100 scale-0 
							transition-all duration-300 ease-in-out'
						>
						<p className='text-sm'>{user.email}</p>
						</div>
					</div>
				)}
				{user && <Logout />}
				</div>
			</div>
		</nav>
	);
}
export default Topbar;