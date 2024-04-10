import { InputValidationObjType } from '@/types/inputValidationObjType';
import React from 'react'
import { useFormContext } from 'react-hook-form';

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
    label?: string
    variant?:"beige"
    validationObj?: InputValidationObjType;
}
const Input = ({label="",className="",name="",variant="beige",validationObj={},...rest}:InputProps) => {
  const formContext = useFormContext();
  let register: any = () => {};
  if (formContext && name) {
    register = formContext.register;
  }
  return (
    <div className="inputContainer">
        {label && <label htmlFor={name} className='copy'>{label}</label>}
        <input className={`input input__${variant} ${className}`} {...register(name,validationObj)} {...rest} />
      {formContext?.formState?.errors?.[name] && (
            <span className={"inputContainer__errorMessage"}>
              {formContext.formState.errors[name]?.message as string || "Required*"}
            </span>
          )}
    </div>
  )
}

export default Input