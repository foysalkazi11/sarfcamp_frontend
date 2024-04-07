import React from 'react'

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
    label?: string
}
const Input = ({label="",...rest}:InputProps) => {
  return (
    <div>
        {label && <label>{label}</label>}
        <input {...rest} />

    </div>
  )
}

export default Input