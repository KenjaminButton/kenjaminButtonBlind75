import React, { useEffect } from 'react';
import { IoCloseCircleSharp} from 'react-icons/io5'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {authModalState} from '@/atoms/authModalAtom'


import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';


function useCloseModal() {
	const setAuthModal = useSetRecoilState(authModalState)
	const closeModal = () => {
		setAuthModal( () => ({ ...ProgressEvent, isOpen: false, type: "login"}))
	}

	useEffect( () => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeModal()
			}
		}
		window.addEventListener('keydown', handleEsc)
		// Cleanup function removing evt listener
		return () => window.removeEventListener('keydown', handleEsc)
	}, [closeModal])
	return closeModal
}

type AuthModalProps = {
  
};

const AuthModal:React.FC<AuthModalProps> = () => {
  const authModal = useRecoilValue(authModalState)
	const closeModal = useCloseModal()
  return (
		<>
			<div
				className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30'
				onClick={closeModal}
			></div>
			<div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
				<div className='relative w-full h-full mx-auto flex items-center justify-center'>
					<div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
						<div className='flex justify-end p-2'>
							<button
								type='button'
								className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
								onClick={closeModal}
							>
								<IoCloseCircleSharp className='h-5 w-5' />
							</button>
						</div>
            
						{ authModal.type === 'login' ? <Login /> : authModal.type === 'register' ? <Signup /> : <ResetPassword />}
					</div>
				</div>
			</div>
		</>
	);
}
export default AuthModal;