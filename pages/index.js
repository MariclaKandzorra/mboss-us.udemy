import Head from 'next/head';
import Image from 'next/image';

import Todo from './Todo';



export default function Home() {
  return (
	<div className='p-6 text-center'>
		<h1 className='font-black justify-center'> My Todos </h1><br></br>
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
		<Todo text='Developping Platform' />
		<Todo text='Creating the Database'/>
		<Todo text='Developping the Architecture of the Database - SQL vs NoSQL'/>
		<Todo text='Recovering the Business Plan and Remaking the Roadmap'/>
		<Todo text='Rereading the Books'/>
		
		</div>
	</div> 
  );
}