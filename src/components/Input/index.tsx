import { InputHTMLAttributes, ReactNode } from 'react'

import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
}

export function Input({ icon, ...props }: InputProps) {
  return (
    <InputContainer>
      <input {...props} />
      {icon}
    </InputContainer>
  )
}
