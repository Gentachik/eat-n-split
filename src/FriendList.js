import {Friend} from "./Friend";

export function FriendList( {initialFriends}){
    const friends = initialFriends;
    return <ul>
        {friends.map(friend => (
            <Friend friend={friend} key={friend.id}></Friend>
        ))}
    </ul>
}