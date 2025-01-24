import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	friends: [],
	billValue: "",
	YourExpense: "",
	FriendBill: 0,
	FriendName: "",
	ImageUrl: "https://i.pravatar.cc/48",
	WhoPay: "You",
	addFriend: false,
	closeAddFriend: false,
	selectedFriend: null,
};

const splitSlice = createSlice({
	name: "split",
	initialState,
	reducers: {
		setBillValue(state, action) {
			state.billValue = Number(action.payload);
		},
		setYourExpense(state, action) {
			state.YourExpense = Number(action.payload);
		},
		setWhoPay(state, action) {
			state.WhoPay = action.payload;
		},
		setFriendName(state, action) {
			state.FriendName = action.payload;
		},
		setAddFriend(state, action) {
			state.addFriend = action.payload;
		},
		setOpenFriend(state, action) {
			const selectedFriend = state.selectedFriend;
			const newSelectedFriend = action.payload;

			if (selectedFriend && selectedFriend.id === newSelectedFriend.id) {
				state.selectedFriend = null; // Deselect if it's the same friend
			} else {
				state.selectedFriend = newSelectedFriend; // Select the new friend
			}
		},
		setAdd(state, action) {
			state.friends = [...state.friends, action.payload];
			state.addFriend = false;
			state.FriendName = "";
			state.selectedFriend = null;
		},
		setSplitBill(state) {
			if (state.selectedFriend) {
				const totalAmount = state.billValue;
				const yourExpense = state.YourExpense;
				const friendId = state.selectedFriend.id;

				// If you are paying
				if (state.WhoPay === "You") {
					const amountOwedByFriend = totalAmount - yourExpense;
					state.friends = state.friends.map((friend) =>
						friend.id === friendId
							? { ...friend, balance: friend.balance + amountOwedByFriend }
							: friend
					);
				}
				// If the friend is paying
				else {
					const amountOwedByYou = yourExpense;
					state.friends = state.friends.map((friend) =>
						friend.id === friendId
							? { ...friend, balance: friend.balance - amountOwedByYou }
							: friend
					);
				}
			}
			state.billValue = "";
			state.YourExpense = "";
			state.FriendBill = 0;
			state.WhoPay = "You";
		},
	},
});

export const {
	setBillValue,
	setYourExpense,
	setFriendBill,
	setWhoPay,
	setFriendName,
	setAddFriend,
	setOpenFriend,
	setAdd,
	setSplitBill,
} = splitSlice.actions;

export default splitSlice.reducer;
