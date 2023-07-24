import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { useRecoilValue } from "recoil";

type AuthPageProps = {};

const AuthPage:React.FC<AuthPageProps> = () => {
  // If recoil state is open
  const authModal = useRecoilValue(authModalState)
  return (
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
      <div className='max-w-7x1 mx-auto'>
        <Navbar />
        <div 
          className="
            flex 
            items-center 
            justify-center 
            h-[calc(100vh-5rem)] 
            pointer-events-none 
            select-none
          "
        >
          <img src='/hero-k.jpeg' alt='Hero Image'/>
        </div>
        {/* If recoil state is open */}
        {authModal.isOpen && <AuthModal /> }
      </div>
    </div>
	);
}
export default AuthPage;