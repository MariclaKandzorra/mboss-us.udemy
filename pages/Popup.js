import Head from 'next/head';
import Image from 'next/image';

import 'reactjs-popup/dist/index.css';



function Popup(props) {
	
	
	const backdrop= () => {
		backdropClasses: 'bg-gray-900, bg-opacity-50 fixed inset-0 z-40'
	};
	
	
	return ( 
		 <div className='backdrop backdrop-blur-sm' onClick={() => setOpenModal(true)}/>
	);
}
	
export default Popup