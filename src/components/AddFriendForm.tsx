import { useState } from 'react';
import { Button } from './UI';
import { IFriend } from '../@types/friend.type';

interface IProps {
  onAddFriend: (friend: IFriend) => void;
}
export function AddFriendForm({ onAddFriend }: IProps) {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('https://i.pravatar.cc/48');

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    setImage(e.target.value);
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmitForm}>
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input
        type='text'
        placeholder="Enter friend's Name..."
        value={name}
        onChange={handleChangeName}
      />

      <label>🖼️ Image URL</label>
      <input
        type='text'
        placeholder='Enter image URL...'
        value={image}
        onChange={handleChangeImage}
      />

      <Button>Add</Button>
    </form>
  );
}
