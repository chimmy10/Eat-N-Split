import { useSelector } from "react-redux";
import AddFriend from "./AddFriend";
import Display from "./Display";
import Split from "./Split";

function App() {
	const addFriend = useSelector((state) => state.split.addFriend);
	const selectedFriend = useSelector((state) => state.split.selectedFriend);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-16 px-2 py-24 lg:flex lg:flex-row bg-slate-200">
			<div>
				<Display />
				{addFriend && <AddFriend />}
			</div>
			{selectedFriend && <Split />}
		</div>
	);
}

export default App;
