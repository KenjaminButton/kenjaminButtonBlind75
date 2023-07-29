import React, { useEffect, useState } from 'react';
import { authModalState } from '@/atoms/authModalAtom';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';

type SignupProps = {
  
};

const Signup:React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = () => {
    setAuthModalState( (prev) => ({ ...prev, type: 'login' }))
  }
  const [inputs, setInputs] = useState({email: '', displayName: '', password: ''})
  const router = useRouter();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    // Destructuring state to update specific field
    setInputs( (prev) => ({ ...prev, [e.target.name]: e.target.value}))
  }
  const handleRegister = async (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // console.log('handleRegister inputs:::', inputs)
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
      if (!newUser) return;
      router.push('/')
    } catch (error: any) {
      alert(error.message)
    }
  }
  // console.log('signup inputs:::', inputs)
  useEffect( () => {
    if (error) alert(error.message)
  }, [error])

  return (
    <form className='space y-6 px-6 py-4' onSubmit={handleRegister}>
    <h3 className='text-xl font-medium text-white'>Register to Kenjamin's Blind 75</h3>
    <div>
      <label htmlFor='email' className='my-3 text-sm font-medium block mb-2 text-gray-300'>Email</label>
      <input
        onChange={handleChangeInput}
        type='email' 
        name='email' 
        id='email' 
        className='
          border-2 
          outline-none
          sm:text-sm
          rounded-lg
          focus:ring-blue 500
          focus:border-purple-500 
          block 
          w-full
          p-2.5
          bg-gray-600
          border-gray-500
          placeholder-gray-400
          text-gray-300
          text-white
        ' 
        placeholder='kenjamin@kenjaminbutton.com'
      />
    </div>
    <div>
      <label htmlFor='displayName' className='my-3 text-sm font-medium block mb-2 text-gray-300'>displayName</label>
      <input
        onChange={handleChangeInput}
        type='displayName' 
        name='displayName' 
        id='displayName' 
        className='
          border-2 
          outline-none
          sm:text-sm
          rounded-lg
          focus:ring-blue 500
          focus:border-purple-500 
          block 
          w-full
          p-2.5
          bg-gray-600
          border-gray-500
          placeholder-gray-400
          text-gray-300
          text-white
        ' 
        placeholder='KenjaminButton'
      />
    </div>
    <div>
      <label htmlFor='password' className=' my-3 text-sm font-medium block mb-2 text-gray-300'>password</label>
      <input
        onChange={handleChangeInput}
        type='password' 
        name='password' 
        id='password' 
        className='
          border-2 
          outline-none
          sm:text-sm
          rounded-lg
          focus:ring-blue 500
          focus:border-purple-500 
          block 
          w-full
          p-2.5
          bg-gray-600
          border-gray-500
          placeholder-gray-400
          text-gray-300
          text-white
        ' 
        placeholder='*assword'
      />
    </div>
    <button 
      type='submit' 
      className='
        my-3
        w-full 
        text-white 
        focus:ring-blue-300 
        font-medium 
        rounded-lg
        text-sm
        px-5
        py-2.5
        text-center
        bg-brand-orange
        hover:bg-brand-orange-s
      '
    >
      Register
    </button>

    <div className='text-sm font-medium text-gray-500'>
      Already have an account? {' '}
      <a 
        href='#' 
        className='
          text-blue-700 
          hover:underline
        '
        onClick={ handleClick }
      >
        Log In
      </a>
    </div>
  </form>
  )
}
export default Signup;