import { useState } from 'react';
import { IFriend } from '../@types/friend.type';
import { Button } from './UI';
interface IProps {
  selectedFriend: IFriend;
  onSplitBill: (value: number) => void;
}
enum PayingUser {
  'user',
  'friend',
}
export function SplitBillForm({ selectedFriend, onSplitBill }: IProps) {
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const [whoIsPaying, setWhoIsPaying] =
    useState<keyof typeof PayingUser>('user');

  const paidByFriend = bill - paidByUser;

  function handlechangeBill(e: React.ChangeEvent<HTMLInputElement>) {
    setBill(Number(e.target.value));
  }

  function handlechangePayed(e: React.ChangeEvent<HTMLInputElement>) {
    setPaidByUser(
      Number(e.target.value) > bill ? paidByUser : Number(e.target.value),
    );
  }

  function handleChangeWhoPaying(e: React.ChangeEvent<HTMLSelectElement>) {
    setWhoIsPaying(e.target.value as keyof typeof PayingUser);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵 Bill value</label>
      <input type='number' value={bill} onChange={handlechangeBill} />

      <label>🧍‍♂️ Your expense</label>
      <input type='number' value={paidByUser} onChange={handlechangePayed} />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type='number' value={paidByFriend} disabled />

      <label>🤑 Who is paying the bill</label>
      <select value={whoIsPaying} onChange={handleChangeWhoPaying}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
