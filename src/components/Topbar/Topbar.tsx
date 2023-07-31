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

type TopbarProps = {
  problemPage?: boolean
};

const Topbar:React.FC<TopbarProps> = ({problemPage}) => {
	const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState)

  return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-indigo-400 text-white'>
			<div className={`flex w-full items-center justify-between ${!problemPage ? 'max-w-[1200px] mx-auto' : ''}`}>
				<Link href='/' className='h-[22px] flex-1'>
					<Image src='/logo-k.png' alt='Logo' height={100} width={100} />
				</Link>

				{problemPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						<div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill2 h-8 w-8 cursor-pointer' >
							<FaChevronLeft />
						</div>
						<Link href='/' className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'>
							<div>
								<BsList />
							</div>
							<p>Problem List</p>
						</Link>
						<div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill2 h-8 w-8 cursor-pointer' >
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
							Premium
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

				{problemPage && <Timer />}
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