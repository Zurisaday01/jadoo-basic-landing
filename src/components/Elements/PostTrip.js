import GreeceImg from '../../assets/imgs/greece.jpg';

// icons
import { SiLeaflet } from 'react-icons/si';
import { MdOutlineMap } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';
import { BsBuilding } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

const PostTrip = ({ fillHeart, toggleFillHeart }) => {
	return (
		<div className='w-[400px] oats:w-[340px] h-auto bg-white shadow-neutral rounded-3xl p-5 flex flex-col gap-4'>
			<div className='w-full h-[200px]  rounded-3xl  overflow-hidden'>
				<img
					className='w-full h-full object-cover object-center'
					src={GreeceImg}
				/>
			</div>
			<h4>Trip To Greece</h4>
			<div className='flex'>
				<span className='text-gray-500 block pr-2 after-style'>14-19 June</span>
				<span className='text-gray-500 block pl-2'>by Robbinson Cruso</span>
			</div>
			<div className='text-gray-500 flex gap-3'>
				<span className='w-auto h-auto bg-gray-100 p-2 rounded-full'>
					<SiLeaflet />
				</span>
				<span className='w-auto h-auto bg-gray-100 p-2 rounded-full'>
					<MdOutlineMap />
				</span>
				<span className='w-auto h-auto bg-gray-100 p-2 rounded-full'>
					<IoIosSend />
				</span>
			</div>
			<div className='flex justify-between'>
				<div className='flex gap-3'>
					<span className='text-gray-500'>
						<BsBuilding />
					</span>
					<span className='text-gray-500'>24 people going</span>
				</div>
				<button className='text-violet-900 text-2xl'>
					{fillHeart ? (
						<AiFillHeart onClick={() => toggleFillHeart(!fillHeart)} />
					) : (
						<AiOutlineHeart onClick={() => toggleFillHeart(!fillHeart)} />
					)}
				</button>
			</div>
		</div>
	);
};

export default PostTrip;
