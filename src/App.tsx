import { useState } from 'react';
import { AddFriendForm, FriendsList, SplitBillForm } from './components';
import { Button } from './components/UI';
import { initialFriends } from './data/friends';
import { IFriend } from './@types/friend.type';

function App() {
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [friends, setFriends] = useState<IFriend[]>(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<null | IFriend>(null);

  function handleShowAddFriend() {
    setShowAddFriend(showAddFriend => !showAddFriend);
  }

  function handleAddFriend(friend: IFriend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend: IFriend) {
    setSelectedFriend(selected => (selected?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && <SplitBillForm selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
