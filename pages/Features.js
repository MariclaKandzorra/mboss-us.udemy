import Head from 'next/head';
import Image from 'next/image';
import ReactDOM from 'react-dom'; 
import Modal from 'react-modal';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Features(props) {
	function cancelHandler() { 
	props.onCancel();
	console.log('cancel clicked');
	
	};
	function deleteHandler() {
		props.onDelete(props);
		console.log('delete clicked');
	};
	function saveHandler() {
		props.onSave(props);
		console.log('save clicked');
		
	};


	return ( /*Popup-Area! **/

	<Popup trigger={<button className='form-label inline-block mb-2 text-gray-700 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-1 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'> EDIT YOUR TASK </button>} modal nested > 
		{close => ( 
			<div className="modal"> 
				<button className="close" onClick={close}> 
					&times; 
				</button> 
				<div className="header"> Modal Title </div> 
					<div className="content"> 
					{' '} 
					<textarea className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-1 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
					id='FormControlTextarea1' rows='3' placeholder='Your Task'></textarea>
					
					<button onClick={cancelHandler} className='text-center bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Cancel</button>
					<button onClick={deleteHandler} className='text-center bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>
                    Delete
					</button>		
					<button onClick={saveHandler} className='text-center bg-transparent hover:bg-yellow-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>
                    Save
					</button>
					</div> 
					<div className="actions"> 
	
				<Popup trigger={<button className="button"> Trigger </button>} position="top center" nested > 
					<span> 
					Think Again!
					</span> 
				</Popup> 
				<br></br>
				<br></br>
				<button className="button" onClick={() => { console.log('modal closed '); close(); }} > 
					Tip to close and loose your edits. 
				</button> 
				</div> 
			</div> 
		)} 
	</Popup>

); 

}
	
export default Features; 
	
	
	