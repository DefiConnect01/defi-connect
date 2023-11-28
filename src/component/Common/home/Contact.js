import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formdata;

  const changeData = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const notify = (mes) => toast(mes);

  const isFormValid = () => {
    return name.trim() !== '' && email.trim() !== '' && message.trim() !== '';
  };

  const submitData = async (e) => {
    e.preventDefault();

    try {
      if (!isFormValid()) {
        notify('Please fill in all the required fields.');
        return;
      }

      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      };

      const response = await axios.post(
        'https://folly-email-n8te.vercel.app/email',
        { name, email, message },
        config
      );

      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        notify(response.data.message);
        console.log('Data submitted successfully');
      } else {
        console.error('Failed to submit data');
        notify(response.data.message);
      }
    } catch (error) {
      notify(`Error: ${error.response.data.message}`);
    }
  };

  return (
    <section className="contactContainer" id="contact">
      <section className="contactContent rounded-5 p-2 p-md-5 w-100 ">
        <Form className="bg-white contactForm" onSubmit={submitData}>
          <h3 className="fw-bold text-center text-primary fs-subhead">
            Contact Us
          </h3>
          <input
            type="text"
            className="black-input mt-3"
            name="name"
            placeholder="Enter your Name"
            onChange={changeData}
            value={name}
            required
          />
          <input
            type="email"
            className="black-input mt-3"
            name="email"
            placeholder="Valid Email Address"
            onChange={changeData}
            value={email}
            required
          />
          <textarea
            className="black-input mt-3"
            name="message"
            placeholder="Message"
            rows="4"
            maxLength="200"
            onChange={changeData}
            value={message}
            required
          />
          <div className="d-flex justify-content-center mt-4">
            <Button type="submit" className="w-50" disabled={!isFormValid()}>
              Submit
            </Button>
          </div>
        </Form>
        <ToastContainer />
      </section>
    </section>
  );
};

export default Contact;



// const submitDataF = async (e) => {
//   e.preventDefault();

//   try {
//     const config = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name, email, message })
//     };

//     const response = await fetch('https://folly-email-n8te.vercel.app/email', config);

//     if (response.ok) {
//       notify();
//       console.log('Data submitted successfully');
//     } else {
//       console.error('Failed to submit data');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   }
// };