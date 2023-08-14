import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";

import { useState } from "react";
import { FaLess } from "react-icons/fa";
import useHasMounted from "@/hooks/useHasMounted";

// {/* temporary form for submitting problems data*/}
// import { firestore } from "@/firebase/firebase";
// import { doc, setDoc } from "firebase/firestore";



export default function Home() {

	const [loadingProblems, setLoadingProblems] = useState(true)
	const hasMounted = useHasMounted()

	if (!hasMounted) return null

	// // {/* temporary form for submitting problems data*/}
	// const [inputs, setInputs] = useState({
	// 	id: '',
	// 	title: '',
	// 	difficulty: '',
	// 	category: '',
	// 	videoId: '',
	// 	link: '',
	// 	order: 0,
	// 	likes: 0,
	// 	dislikes: 0,
	// })

	// {/* temporary form for submitting problems data*/}
	// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setInputs({
	// 		...inputs,
	// 		[e.target.name]: e.target.value,
	// 	})
	// }
	// console.log('inputs',inputs)

	// {/* temporary form for submitting problems data*/}
	// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	// 	// prevent page refresh
	// 	e.preventDefault()
	// 	const newProblem = {
	// 		...inputs,
	// 		order: Number(inputs.order),
	// 	}
	// 	// converting inputs.order to int
	// 	await setDoc(doc(firestore, "problems", inputs.id), newProblem);
	// 	alert('saved to database')
	// }

	return (
		<>
			<main className='bg-indigo-100 min-h-screen'>
			{/* <main className='bg-dark-layer-2 min-h-screen'> */}
				<Topbar />
				<h1
					className='text-2xl text-center text-gray-700 dark:text-teal-500 font-medium
					uppercase mt-10 mb-5'
				>
					&ldquo; Kenjamins Blind 75 &rdquo; 
          <p>💩 🤬 🤤 😆 🫢 🥹 😉 😌 😍 🤪 🤨 🧐 😏 😒 😔 🙁 😣 🥺 😢 😮‍💨 😤 🤗 🤔 😶 😐 😑 😬 🙄 😦 😮 😴 😪 😵 😵‍💫 🤐 🥴 🤑 🤠 </p>
				</h1>
				<div className='relative overflow-x-auto mx-auto px-6 pb-10'>

				{loadingProblems && (
					<div className="animate-pulse max-w-[1200px] mx-auto sm:w-7/12 w-full">
						{[...Array(10)].map((_, idx) => (
							<LoadingSkeleton key={idx} />
						))}
					</div>
				)}

					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
						{!loadingProblems && (
							<thead className='text-xs text-gray-700 uppercase dark:text-blue-400 border-b '>
							<tr>
								<th scope='col' className='px-1 py-3 w-0 font-medium'>
									Status
								</th>
								<th scope='col' className='px-6 py-3 w-0 font-medium'>
									Title
								</th>
								<th scope='col' className='px-6 py-3 w-0 font-medium'>
									Difficulty
								</th>

								<th scope='col' className='px-6 py-3 w-0 font-medium'>
									Category
								</th>
								<th scope='col' className='px-6 py-3 w-0 font-medium'>
									Solution
								</th>
							</tr>
						</thead>
						)}
						<ProblemsTable setLoadingProblems={setLoadingProblems}/>
					</table>
				</div>

				{/* temporary form for submitting problems data*/}
				{/* <form 
					className="p-6 flex flex-col max-w-sm gap-3"
					onSubmit={handleSubmit}	
				>
					<input onChange={handleInputChange} type='text' placeholder='problem id' name='id' />
					<input onChange={handleInputChange} type='text' placeholder='title' name='title' />
					<input onChange={handleInputChange} type='text' placeholder='difficulty' name='difficulty' />
					<input onChange={handleInputChange} type='text' placeholder='category' name='category' />
					<input onChange={handleInputChange} type='text' placeholder='order' name='order' />
					<input onChange={handleInputChange} type='text' placeholder='videoId?' name='videoId' />
					<input onChange={handleInputChange} type='text' placeholder='link?' name='link' />
					<button className="bg-white">Save to Firebase</button>
				</form> */}
			</main>
		</>
	);
}


const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};