import React from 'react';
import TextAreaInput from '../form-fields/textarea.input';
import TextInput from '../form-fields/text.input';

const Contact = () => {
  const handleChange = (key: string, value: string) => {};
  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <section className="">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 ">
            <h2 className="mb-6 text-3xl font-bold">Contact us</h2>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, modi
              accusantium ipsum corporis quia asperiores dolorem nisi corrupti eveniet
              dolores ad maiores repellendus enim autem omnis fugiat perspiciatis? Ad,
              veritatis.
            </p>
            <p className="mb-2 text-neutral-500 dark:text-neutral-300">
              Jardin Logbaba côté de quatorzième entre Termoin de Jehová
            </p>
            <p className="mb-2 text-neutral-500 dark:text-neutral-300">
              + 237 75 60 19 80
            </p>
            <p className="mb-2 text-neutral-500 dark:text-neutral-300">info@gmail.com</p>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 ">
            <form>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <TextInput
                  // label='Name'
                  placeholder="Name"
                  name="name"
                  value=""
                  onChange={handleChange}
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <TextInput
                  // label='Name'
                  placeholder="Email"
                  name="email"
                  value=""
                  onChange={handleChange}
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <TextAreaInput
                  // label='Name'
                  placeholder="Your message"
                  name="message"
                  value=""
                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
