import Counter from "./Counter";
// import Batsman from './Batsman';
import Users from "./Users";
import Friends from "./Friends";

import "./App.css";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
);

const fetchFriends = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}

function App() {
    function handleClick() {
        console.log("Clicked first button");
    }

    const handleSecond = () => {
        console.log("Clicked second button");
    };

    const handleAdding = (num) => {
        console.log(num + 5);
    };

    const friendsPromise = fetchFriends();

    return (
        <>
            <Suspense fallback={<h3>Friends are coming...</h3>}>
                <Friends friendsPromise={friendsPromise}></Friends>
            </Suspense>

            <Suspense fallback={<h3>Loading...</h3>}>
                <Users fetchUsers={fetchUsers}></Users>
            </Suspense>
            {/* <Batsman></Batsman> */}
            <Counter></Counter>
            <button onClick={handleClick}>First btn</button>
            <button onClick={handleSecond}>Second btn</button>
            <button onClick={() => handleAdding(10)}>Add 5 to 10 </button>
        </>
    );
}

export default App;
