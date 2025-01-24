import { useDispatch, useSelector } from "react-redux";
import { setAddFriend, setOpenFriend } from "./Context";

function Display() {
	const dispatch = useDispatch();
	const addFriend = useSelector((state) => state.split.addFriend);
	const friends = useSelector((state) => state.split.friends);
	const selectedFriend = useSelector((state) => state.split.selectedFriend);

	return (
		<div className="w-80 sm:w-96 md:w-[500px] lg:w-96">
			<h1 className="mb-4 text-3xl font-bold text-center text-blue-900">
				Welcome to <hr></hr>Eat and Split!
			</h1>
			<p className="mb-6 text-lg text-center text-blue-700">
				Manage your expenses and split bills with friends easily.
			</p>
			{friends.map((s) => (
				<div
					className="flex items-center justify-between p-2 mb-3 bg-pink-200 rounded-lg"
					key={s.id}
				>
					<div className="flex items-center gap-5">
						<img
							className="object-cover w-12 h-12 rounded-full"
							src={s.image}
							alt="something"
						/>
						<div>
							<p className=" text-[16px] font-bold">
								{s.name.charAt(0).toUpperCase() + s.name.slice(1).toLowerCase()}
							</p>
							<p
								className={`text-[14px] font-semibold ${
									s.balance < 0
										? "text-red-500"
										: s.balance > 0
										? "text-green-500"
										: "text-black"
								}`}
							>
								{s.balance < 0
									? `You owe ${
											s.name.charAt(0).toUpperCase() +
											s.name.slice(1).toLowerCase()
									  } ${Math.abs(s.balance)}`
									: s.balance > 0
									? `${
											s.name.charAt(0).toUpperCase() +
											s.name.slice(1).toLowerCase()
									  } owes you ${s.balance}`
									: `You and ${
											s.name.charAt(0).toUpperCase() +
											s.name.slice(1).toLowerCase()
									  } are even`}
							</p>
						</div>
					</div>
					<button
						onClick={() => dispatch(setOpenFriend(s))}
						className="bg-yellow-400 text-[15px] font-semibold py-1 px-3 rounded-xl hover:bg-yellow-500 transition-all duration-300 ease-in-out"
					>
						{selectedFriend && selectedFriend.id === s.id ? "Close" : "Select"}
					</button>
				</div>
			))}
			{!addFriend && (
				<button
					onClick={() => dispatch(setAddFriend(true))}
					className="bg-yellow-400 mt-2 text-[15px] font-semibold py-1.5 px-4 rounded-xl transition-all duration-300 ease-in-out transform hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-lg"
				>
					Add Friend
				</button>
			)}
		</div>
	);
}

export default Display;
