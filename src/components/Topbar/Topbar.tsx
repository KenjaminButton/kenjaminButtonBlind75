import Link from 'next/link';
import React from 'react';

type TopbarProps = {
    
};

const Topbar:React.FC<TopbarProps> = () => {
    
    return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-indigo-400 text-white'>
			<div className={`flex w-full items-center justify-between`}>
				<Link href='/' className='h-[22px] flex-1'>
					<img src='/logo-k.png' alt='Logo' height={100} width={100} />
				</Link>

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
						<a
							href='https://www.buymeacoffee.com/kenjaminbutton'
							target='_blank'
							rel='noreferrer'
							className='bg-indigo-300 py-1.5 px-3 cursor-pointer rounded text-orange-300 hover:bg-dark-fill-2'
						>
							Premium
						</a>
					</div>
					
                    <Link
                        href='/auth'
                    >
                        <button className='bg-indigo-300 py-1 px-2 cursor-pointer rounded '>Sign In</button>
                    </Link>
				</div>
			</div>
		</nav>
	);
}
export default Topbar;