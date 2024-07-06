import { useState } from 'react';
import { AddFriendForm, FriendsList, SplitBillForm } from './components';
import { Button } from './components/UI';
import { initialFriends } from './data/friends';
import { IFriend } from './@types/friend.type';

function App() {
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [friends, setFriends] = useState<IFriend[]>(initialFriends);

  function handleShowAddFriend() {
    setShowAddFriend(showAddFriend => !showAddFriend);
  }

  function handleAddFriend(friend: IFriend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} />
        {showAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      <SplitBillForm />
    </div>
  );
}

export default App;
