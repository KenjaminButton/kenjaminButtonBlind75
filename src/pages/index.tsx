import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import { firestore } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

export default function Home() {
	const [inputs, setInputs] = useState({
		id: '',
		title: '',
		difficulty: '',
		category: '',
		videoId: '',
		link: '',
		order: 0,
		likes: 0,
		dislikes: 0,
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		})
	}
	console.log('inputs',inputs)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		// prevent page refresh
		e.preventDefault()
		const newProblem = {
			...inputs,
			order: Number(inputs.order),
		}
		// converting inputs.order to int
		await setDoc(doc(firestore, "problems", inputs.id), newProblem);
		alert('saved to database')
	}

	return (
		<>
			<main className='bg-indigo-100 min-h-screen'>
			{/* <main className='bg-dark-layer-2 min-h-screen'> */}
				<Topbar />
				<h1
					className='text-2xl text-center text-gray-700 dark:text-teal-500 font-medium
					uppercase mt-10 mb-5'
				>
					&ldquo; Kenjamin's Blind 75 &rdquo; 
          <p>💩 🤬 🤤 😆 🫢 🥹 😉 😌 😍 🤪 🤨 🧐 😏 😒 😔 🙁 😣 🥺 😢 😮‍💨 😤 🤗 🤔 😶 😐 😑 😬 🙄 😦 😮 😴 😪 😵 😵‍💫 🤐 🥴 🤑 🤠 </p>
				</h1>
				<div className='relative overflow-x-auto mx-auto px-6 pb-10'>
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
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
						<ProblemsTable />
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
