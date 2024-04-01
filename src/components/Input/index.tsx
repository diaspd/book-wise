import { InputHTMLAttributes, ReactNode } from 'react'

import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
}

export const Input = ({ icon, ...props }: InputProps) => {
  return (
    <InputContainer>
      <input {...props} />
      {icon}
    </InputContainer>
  )
}
