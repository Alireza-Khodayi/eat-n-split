import { IFriend } from '../@types/friend.type';
import { Friend } from './Friend';

interface IProps {
  friends: IFriend[];
}
export function FriendsList({ friends }: IProps) {
  return (
    <ul>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
