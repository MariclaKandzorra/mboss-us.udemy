import Head from 'next/head';
import Image from 'next/image';


function Todo () {
	return (
		<div className='overflow-hidden p-6 max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-500'>
			<div className='px-6 py-4'>
				<h2> TITLE </h2><br></br>
			<div className='text-center bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>
				<button> Edit </button>
			</div>
			</div>
		</div>
	);
}
	
export default Todo;