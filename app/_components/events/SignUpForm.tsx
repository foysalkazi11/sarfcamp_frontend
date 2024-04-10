"use client"
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import validateEmail from "@/utils/emailValidation.utils";
import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/participants`
type TSingUpFormInput = {
  firstName: string
  lastName: string
  email:string,
  phone: string
  
}

const defaultValues: TSingUpFormInput ={
  firstName: "",
  lastName: "",
  email: "",
  phone: ""
}

type PricingProps = {
  singlePrice?:number
  sharedPrice?:number
}

type SignUpFormProps = {
  width: string
  btnText?:string
  pricing?:PricingProps
  eventId?:string
}

const SignUpForm = ({width,btnText="Stay in touch",pricing,eventId}:SignUpFormProps) => {
  const methods = useForm({defaultValues})
  const [loading,setLoading] = useState(false)
  const [confirmation,setConfirmation] = useState(false)
  const [error,setError] = useState("")
  

  const submit = async (data:TSingUpFormInput) =>{

    let payload :any = {...data,isGeneralInterest:true}
    if (eventId) {
      payload = {...payload,isGeneralInterest:false,event:{connect:[parseInt(eventId)]}}
    }

    try {
      setLoading(true)
       await axios.post(API_URL,{data:payload})
      setLoading(false)
      setConfirmation(true)
       setError("")
      
    } catch (error:any) {
      console.log(error.response?.data?.error?.message);
      setError(error.response?.data?.error?.message || "Error occurred")
      
      setLoading(false)
    }
  }
  return <section className="signUpForm" style={{width:width+"%"}}>
    
    {confirmation ? <h4>Thank you for signing up. We will get in touch soon!</h4> : <FormProvider {...methods}>
      <form action="" className="signUpForm__inputContainer" onSubmit={methods.handleSubmit(submit)}>
        <div className="signUpForm__nameInputContainer">
          <Input validationObj={{required:true}} label="First Name" name="firstName" />
        <Input validationObj={{required:true}} label="Last Name" name="lastName" />
        </div>
        <Input  validationObj={{required:true, validate:validateEmail || "Envalid email"
        }} label="Your e-mail address" name="email" />
         <Input label="Your telephone number" name="phone" />
         <div style={{position:"relative"}}>
          {error && <p className="copy signUpForm__errorMessage">{error}</p>}
          <Button  type="submit" text={loading ? "Loading..." : btnText} size="medium" style={{width:"28.5rem"}} />
         </div>
         
         
      </form>
    </FormProvider> }
    {pricing && <Pricing sharedPrice={pricing.sharedPrice} singlePrice={pricing.singlePrice} />}
   
  </section>
};


const Pricing = ({ sharedPrice=0,singlePrice=0}:PricingProps) =>{
  return(

    <div className="signUpFormPricing">
    <h3>Pricing</h3>
   <div>
     {
    singlePrice && <h5> <span className="signUpFormPricing__pricePrefix">Single Room : </span> {singlePrice}$ each person</h5>}
     { sharedPrice && <h5> <span className="signUpFormPricing__pricePrefix">Shared Room : </span>  { sharedPrice}$ each person</h5>
     }
   </div>

  </div>
  )
}

export default SignUpForm;
