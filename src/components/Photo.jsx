/* eslint-disable jsx-a11y/img-redundant-alt */
import { FiDownload } from 'react-icons/fi';
import { downloadPhoto } from '../lib/helper';

export default function Photo({ photo }) {
	return (
		<div className='image-container relative w-full max-w-lg rounded-xl overflow-hidden'>
			<img
				src={photo?.urls?.small}
				alt={photo?.alt_description}
				className='block w-full object-cover'
			/>
			<button
				onClick={async () => await downloadPhoto(photo?.urls?.raw)}
				className='absolute right-4 bottom-4 p-3 text-[#121212] text-xl bg-white rounded-xl md:translate-y-[200%] transition-all duration-500 ease-in-out'
			>
				<FiDownload color='#121212' />
			</button>
		</div>
	);
}
