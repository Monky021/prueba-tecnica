import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/es/styles-compiled.css'
import { useAppSelector } from '../hooks/hooks'

export const Card = () => {

  const { number, cvc, month, name, year, focus } = useAppSelector(state => state.card)
  return (
    <Cards
      number={number}
      name={name}
      expiry={`${year}/${month < 10 ? '0' : ''}${month}`}
      cvc={cvc}
      focused={focus}
    />
    
    
  );
};
