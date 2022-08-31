import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactSocials from "./ContactSocials/ContactSocials";

function Contact() {
  return (
    <div className='w-full max-w-[1300px] mx-auto h-full flex flex-col'>
      <div className='h-full w-full flex flex-col mt-10'>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
