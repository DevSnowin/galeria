import React from 'react'
import {FiSearch} from 'react-icons/fi';

export default function SearchBox({onChange}) {
	
	return (
		<div className="flex justify-center items-center my-14">
			<div className="shadow-lg shadow-slate-200 rounded-2xl w-80 px-6 flex justify-between items-center md:w-9/12 md:px-8 lg:w-2/5">
				<input type="text" placeholder="Seach" className="w-full h-16 text-xl outline-0 outline-none md:h-20 md:text-2xl" onKeyUp={onChange} />
				<a>
					<FiSearch className="text-2xl text-slate-400 md:text-3xl" />
				</a>
			</div>
		</div>
	)
}