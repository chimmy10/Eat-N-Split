import { useDispatch, useSelector } from "react-redux";
import {
	setBillValue,
	setSplitBill,
	setWhoPay,
	setYourExpense,
} from "./Context";

function Split() {
	const dispatch = useDispatch();
	const billValue = useSelector((state) => state.split.billValue);
	const YourExpense = useSelector((state) => state.split.YourExpense);
	const FriendBill = billValue - YourExpense;
	const WhoPay = useSelector((state) => state.split.WhoPay);
	const { name } = useSelector((state) => state.split.selectedFriend);
	const check = FriendBill < 0 ? true : false;

	return (
		<div className="bg-pink-300 rounded-lg p-3 w-80 sm:w-96 md:w-[500px] lg:w-96">
			<p className="font-bold text-[19px] mb-3">
				SPLIT A BILL WITH {name.toUpperCase()}
			</p>
			<div className="mb-4">
				<p className="font-semibold text-[18px] mb-1">💰 Bill value</p>
				<input
					type="number"
					className="w-full px-4 transition-all duration-300 ease-in-out rounded-md h-7 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300"
					value={billValue}
					onChange={(e) => dispatch(setBillValue(e.target.value))}
				/>
			</div>
			<div className="mb-4">
				<p className="font-semibold text-[18px] mb-1">🧍‍♀️ Your expense</p>
				<input
					type="number"
					className="w-full px-4 transition-all duration-300 ease-in-out rounded-md h-7 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300"
					value={YourExpense}
					onChange={(e) => dispatch(setYourExpense(e.target.value))}
				/>
				{check && (
					<div className="ml-1">
						<p className="text-sm text-red-500">
							It Should not be greater than the bill value
						</p>
					</div>
				)}
			</div>
			<div className="mb-4">
				<p className="font-semibold text-[18px] mb-1">
					👫 {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}'s bill
				</p>
				<input
					type="text"
					className="w-full px-4 transition-all duration-300 ease-in-out rounded-md h-7 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300"
					value={FriendBill}
					disabled={true}
				/>
			</div>
			<div className="mb-4">
				<p className="font-semibold text-[18px] mb-1">
					🤑 Who is paying the bill
				</p>
				<select
					value={WhoPay}
					onChange={(e) => dispatch(setWhoPay(e.target.value))}
					className="w-full px-4 transition-all duration-300 ease-in-out rounded-md h-7 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300"
				>
					<option>You</option>
					<option>
						{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
					</option>
				</select>
			</div>
			<button
				onClick={() => dispatch(setSplitBill())}
				disabled={check}
				className="bg-yellow-400 text-[16px] font-semibold py-1.5 px-10 rounded-xl transition-all duration-300 ease-in-out transform hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-lg"
			>
				Split bill
			</button>
		</div>
	);
}

export default Split;
