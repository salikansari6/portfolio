import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl bg-purple-50 shadow p-2 font-bold text-purple-800">
        Contact Me
      </div>
      <form className="m-5 shadow bg-purple-50 rounded p-5 text-md lg:text-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="input-group my-2 ">
            <label htmlFor="first-name">First Name : </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="shadow rounded my-2 p-2 w-full"
            />
          </div>
          <div className="input-group my-2">
            <label htmlFor="last-name">Last Name : </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="shadow rounded my-2 p-2 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="input-group my-2 ">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow rounded my-2 p-2 w-full"
            />
          </div>
          <div className="input-group my-2">
            <label htmlFor="phone">Phone : </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="shadow rounded my-2 p-2 w-full"
            />
          </div>
        </div>
        <div className="input-group my-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="messgae"
            id="message"
            className="w-full shadow rounded my-2 p-2"
            rows="5"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
