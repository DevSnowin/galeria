import React from 'react';
import FileSaver from 'file-saver';

export default function Overlay({url}) {
    return (
        <div className='grid place-items-center'>
            <div className="hidden xl:visible xl:overlay bg-[#12121285] w-full absolute top-0 left-0 h-full xl:flex justify-center items-center">
                <button onClick={() => FileSaver.saveAs(url, "Galeria.jpg")} className="border-2 px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-gray-900 pointer-events-none lg:pointer-events-auto">Download
                </button>
            </div>
            <div className="bg-gray-900 w-44 h-12 my-4 border-2 border-gray-900 grid place-items-center cursor-pointer rounded-lg xl:hidden">
				<a onClick={() => FileSaver.saveAs(url, "Galeria.jpg")} className="text-xl text-white visited:text-white">Download</a>
			</div>
        </div>
  );
}
