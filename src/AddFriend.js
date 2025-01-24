import { useDispatch, useSelector } from "react-redux";
import { setAdd, setAddFriend, setFriendName } from "./Context";

function AddFriend() {
	const dispatch = useDispatch();
	const FriendName = useSelector((state) => state.split.FriendName);
	const ImageUrl = useSelector((state) => state.split.ImageUrl);

	function handleAdd() {
		const uniqueId = Math.floor(100000 + Math.random() * 900000);
		dispatch(
			setAdd({
				id: uniqueId,
				name: FriendName,
				image: "https://i.pravatar.cc/48",
				balance: 0,
			})
		);
	}

	return (
		<>
			<div className="flex flex-col items-center">
				<div className="bg-pink-300 mt-8 mb-3 rounded-lg p-3 w-80 sm:w-96 md:w-[500px] lg:w-96">
					<div className="mb-4">
						<p className="font-semibold text-[18px] mb-1">👫 Friend name</p>
						<input
							type="text"
							className="w-full px-4 transition-all duration-300 ease-in-out rounded-md h-7 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300"
							value={FriendName}
							onChange={(e) => dispatch(setFriendName(e.target.value))}
						/>
					</div>
					<div className="mb-6">
						<p className="font-semibold text-[18px] mb-1">🌄 Image URL</p>
						<input
							type="text"
							className="w-full px-4 transition-all duration-300 ease-in-out rounded-md h-7 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300"
							value={ImageUrl}
							disabled={true}
						/>
					</div>
					<button
						onClick={handleAdd}
						className="bg-yellow-400 text-[16px] font-semibold py-1.5 px-10 rounded-xl transition-all duration-300 ease-in-out transform hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-lg"
					>
						Add
					</button>
				</div>
				<div className="flex justify-end w-full mt-2">
					<button
						onClick={() => dispatch(setAddFriend(false))}
						className="bg-yellow-400 text-[16px] font-semibold py-1.5 px-4 rounded-xl hover:bg-yellow-500 transition-all duration-300 ease-in-out"
					>
						Close
					</button>
				</div>
			</div>
		</>
	);
}

export default AddFriend;
