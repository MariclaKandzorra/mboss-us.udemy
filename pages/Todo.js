import Head from 'next/head';
import Image from 'next/image';
import Modal from 'react-modal';
import { useState } from 'react'; /*react-Hooks**/
import styled from 'styled-components';

import Features from './Features'; 
import Popup from './Popup';


function Todo(props) {
	
	const [openModal, setOpenModal] = useState(false); 
	
	const clickButton = () => {
		setOpenModal((prev) => !prev);
	}
	
	function closeModalHandler() {
		setOpenModal(false);
		console.log(props.text);
	};
	
	
	return (
		<div className='m-5 p-6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-500'>
			<div className='px-6 py-4'>
				<h2> {props.text} </h2><br></br>
				
			<div onClick={clickButton} className='text-center bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>
				<button > Edit </button>
				
			</div>
			{openModal && <Popup onClick={closeModalHandler}/>}
			{openModal && <Features onCancel={closeModalHandler} onDelete={closeModalHandler} onSave={closeModalHandler} />}
			</div>
		</div>
	);
}
	
export default Todo;