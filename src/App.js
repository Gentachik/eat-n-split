import {FriendList} from "./FriendList";
import {FormAddFriend} from "./Forms/FormAddFriend";
import {Button} from "./Button";
import {FormSplitBill} from "./Forms/FormSplitBill";
import {useState} from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App(){
  const [showAddState, setShowAddState] = useState(false);
  function handleShowAddFriend(){
    setShowAddState(!showAddState);
  }

  return (
      <div className="app">
        <div className="sidebar">
          <FriendList initialFriends={initialFriends}></FriendList>
          {showAddState && <FormAddFriend></FormAddFriend>}
          <Button onClick={handleShowAddFriend}>{showAddState ? 'Close' : 'Add friend'}</Button>
        </div>
        <FormSplitBill></FormSplitBill>
      </div>);
}

