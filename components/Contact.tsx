'use client'
import { useState } from "react";
import { toast } from "react-hot-toast"

  const Contact = () => {
    const [data, setData] = useState({
       name:"",
       email:"",
       phone:"",
       subject:"",
       message:""

    });

    const sendEmail = async(e) =>{
      e.preventDefault();
      const response = await fetch('/api/send',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if(response.status === 200) {
        setData({})
        toast.success(`Hey ${data.name}, Your message has been sent successfully!`)
      }
    };


  }
  
 
  export default Contact;