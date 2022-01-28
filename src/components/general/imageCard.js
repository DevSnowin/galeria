import React from 'react'
import Overlay from './overlay';

export default function ImageCard({url, download_url}) {
	
	return (
		<div className="relative w-80 space-y-2 py-4 flex flex-col justify-between rounded-lg shadow-slate-300 shadow-xl md:space-y-0 md:py-0">
			<img src={url} alt="image" className="w-full h-full rounded-t-lg md:rounded-t-none" />
			<Overlay url={download_url} />
		</div>
	)
}