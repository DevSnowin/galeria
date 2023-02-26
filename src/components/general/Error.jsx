export default function Error({ msg }) {
	return (
		<div className='w-full md:w-2/5 mx-auto flex justify-center items-center flex-col py-20'>
			<h1 className='text-xl md:text-2xl font-bold text-center'>
				Oops! Something went wrong
			</h1>
			<p className='py-3 w-64 text-center'>{msg}</p>
		</div>
	);
}
