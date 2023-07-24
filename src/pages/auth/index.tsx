import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

type AuthPageProps = {
  
};

const AuthPage:React.FC<AuthPageProps> = () => {
  
  return (
    // Background gradient will add later
    <div className="">
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='
          flex
          items-center
          justify-center
          h-[calc(100vh-5rem)]
          pointer-events-none
          select-none
        '>
          <img src='/hero-k.jpeg' alt='Hero image' />
        </div>
        <AuthModal />
      </div>
    </div>
  )
}
export default AuthPage;