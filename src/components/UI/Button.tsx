interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export function Button({ children, onClick }: IProps) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}
