import React from 'react'
import ImageCard from '../general/imageCard';

import Masonry from 'react-masonry-css';

export default function ImageContainer({images}) {

	const breakpointColumnsObj = {
		default: 4,
		1450: 3,
		1050: 2,
		599: 1
	};
	
	return (
		<div className="max-w-fit mx-auto">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'
				>
				{images.map((image, i) => (
					<ImageCard 
					key={i}
					url={image.urls.regular}
					download_url={image.urls.raw} />
				))}
			</Masonry>
		</div>
	)
}