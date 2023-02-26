export default function MainContent() {
	return (
		<div id='home' className='min-h-[30vh] px-8 mt-6 grid place-items-center'>
			<div className='flex flex-col gap-4 md:text-center'>
				<h1 className='font-poppins text-2xl md:text-4xl font-bold'>
					The Best stunting images from unplash API
				</h1>
				<div className='md:w-2/3 mx-auto'>
					<p className='text-lg md:text-xl '>
						History is a gallery of pictures in which there are few originals
						and many copies.
					</p>
				</div>
			</div>
		</div>
	);
}
