import { IFriend } from '../@types/friend.type';
import { Friend } from './Friend';

interface IProps {
  friends: IFriend[];
  onSelection: (friend: IFriend) => void;
  selectedFriend: IFriend | null;
}
export function FriendsList({ friends, onSelection, selectedFriend }: IProps) {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
