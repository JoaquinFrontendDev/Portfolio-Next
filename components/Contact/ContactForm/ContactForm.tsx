import emailjs from "@emailjs/browser";
import { Label, TextInput } from "flowbite-react";
import { useRef } from "react";
import ContactSocials from "../ContactSocials/ContactSocials";

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  let templateParams = {
    user_name: "Jhon Doe",
    message: "Sample Subject",
    user_email: "test@gmail.com",
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "gmail",
        "template_s81qanc",
        templateParams,
        "user_24SJYE3PaQuFQ3EbM9Y3X"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    e?.target?.reset();
  };
  return (
    <div className='my-10 sm-mx-auto sm:w-full px-4 lg:flex'>
      <ContactSocials />
      <div className='bg-white border border-gray-200 dark:bg-black py-8 px-6 shadow-lg dark:shadow-slate-100 dark:shadow-sm rounded-lg sm-px-10 max-w-[650px] flex-1 mx-auto'>
        <div className='w-full flex justify-center'>
          <h2 className='inline-block mx-auto text-[2em] lg:text-[2.5em] mb-8 pb-[10px] border-b-4 border-b-blue-700'>
            Say Hello 🙋‍♂️
          </h2>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='mt-4'>
            <label htmlFor='user_name' className='block text-sm font-medium'>
              Name
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='user_name'
                id='user_name'
                autoComplete='user'
                required
                className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700'
              />
            </div>
          </div>
          <div className='mt-4'>
            <label htmlFor='user_email' className='block text-sm font-medium'>
              Email
            </label>
            <div className='mt-1'>
              <input
                type='email'
                name='user_email'
                id='user_email'
                autoComplete='email'
                required
                className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700'
              />
            </div>
          </div>
          <div className='mt-4'>
            <label htmlFor='message' className='block text-sm font-medium'>
              Subject
            </label>
            <div className='mt-1'>
              <textarea
                name='message'
                id='message'
                autoComplete='message'
                rows={4}
                required
                className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700'
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-full py-2 mt-4 text-white btn-gradient font-semibold rounded-md'
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
