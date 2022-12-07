import React from 'react';
import {InputContainer} from './styles';

const Input = ({value, onChange}) =>  {
  return (
    <InputContainer value={value} onChange={onChange}>
      <input />
    </InputContainer>
  )
}

export default Input;