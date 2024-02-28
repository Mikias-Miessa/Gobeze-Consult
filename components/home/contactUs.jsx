'use client';
import { useState } from 'react';

const ContactUs = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleBlur = (fieldName) => {
    // Clear the error message associated with the field on blur
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length === 0) {
      console.log(subject, email, name, message);
      // If no errors, you can proceed with form submission
    } else {
      setErrors(errors);
    }
  };

  return (
    <div
    className='bg-cover bg-center bg-no-repeat flex justify-center items-center h-screen w-full'
    style={{ backgroundImage: `url("/contactBg/contactBG.png")` }}
  >
    <div className='backdrop-filter backdrop-blur-xl'>
      <div className='w-full max-w-7xl md:p-8 p-16 rounded-lg shadow-lg border'>
        <div className='relative'>
          <h1 className='text-4xl text-center text-white font-bold mb-8 pb-2'>
            Contact Us
          </h1>
          <div className='absolute w-14 h-1 bg-orange-500 bottom-0 left-1/2 transform -translate-x-1/2 ml-1'></div>
        </div>
        <form onSubmit={handleSubmit} className='md:px-20'>
          <div className='mb-4 md:flex gap-2'>
            <div className="w-full md:w-1/2"> {/* Set input field width to full for small screens */}
              <input
                className={`w-full px-4 py-2 border bg-transparent border-gray-300 text-white focus:outline-none mb-4 md:mb-0 ${
                  errors.name && 'border-red-500'
                }`}
                type='text'
                placeholder='Name'
                name='name'
                onChange={(e) => setName(e.target.value)}
                onBlur={() => handleBlur('name')}
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name}</p>
              )}
            </div>
            <div className="w-full md:w-1/2"> {/* Set input field width to full for small screens */}
              <input
                className={`w-full px-4 py-2 border bg-transparent border-gray-300 text-white focus:outline-none ${
                  errors.email && 'border-red-500'
                }`}
                type='email'
                placeholder='Email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur('email')}
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email}</p>
              )}
            </div>
          </div>
          <div className='mb-4'>
            <input
              className={`w-full px-4 py-2 border bg-transparent border-gray-300 text-white focus:outline-none ${
                errors.subject && 'border-red-500'
              }`}
              type='text'
              placeholder='Subject'
              name='subject'
              onChange={(e) => setSubject(e.target.value)}
              onBlur={() => handleBlur('subject')}
            />
            {errors.subject && (
              <p className='text-red-500 text-sm'>{errors.subject}</p>
            )}
          </div>
          <div className='mb-4'>
            <textarea
              className={`w-full px-4 py-2 border bg-transparent border-gray-300 text-white focus:outline-none ${
                errors.message && 'border-red-500'
              }`}
              rows='5'
              placeholder='Message'
              name='message'
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => handleBlur('message')}
            ></textarea>
            {errors.message && (
              <p className='text-red-500 text-sm'>{errors.message}</p>
            )}
          </div>
          <div className='text-start'>
            <button
              className='px-9 py-2 bg-gradient-to-r from-gray-400 to-orange-500 rounded-md text-white focus:outline-none'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default ContactUs;
