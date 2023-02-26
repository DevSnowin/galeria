import Masonry from 'react-masonry-css';
import Photo from '../components/Photo';
import Spinner from '../components/general/Spinner';
import { useEffect, useState } from 'react';
import { fetcher } from '../lib/fetcher';
import Error from '../components/general/Error';

const PhotosBox = () => {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({ state: false, msg: '' });

	const breakpointColumnsObj = {
		default: 4,
		1450: 3,
		1050: 2,
		600: 1,
	};

	const getPhotos = async () => {
		try {
			const data = await fetcher();
			setPhotos((prevData) => [...prevData, ...data]);
		} catch (e) {
			setError({
				state: true,
				msg: 'Please try again after some time.',
			});
		}
	};

	useEffect(() => {
		setIsLoading(true);
		getPhotos();
		setIsLoading(false);
	}, []);

	if (isLoading)
		return (
			<div className='grid place-items-center min-h-screen -mt-[30vh]'>
				<Spinner />
			</div>
		);

	if (error.state) return <Error msg={error.msg} />;
	if (!photos) return <Error msg='No Photos founded :(' />;

	return (
		<div className='w-full mx-auto px-8 md:px-32 my-5 flex flex-col items-center'>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'
				key={crypto.randomUUID()}
			>
				{photos &&
					photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
			</Masonry>
			<button
				className='px-4 py-2 lg:py-4 lg:px-6 shadow-md rounded-xl'
				onClick={getPhotos}
			>
				Load more
			</button>
		</div>
	);
};

export default PhotosBox;
