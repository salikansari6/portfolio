import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import SnackbarContext from "../../contexts/SnackbarContext";

const Contact = () => {
  const snackbarCtx = useContext(SnackbarContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmitForm = (values) => {
    snackbarCtx.showSnackbar({
      title: "Pending",
      message: "Sending message...",
      status: "pending",
    });

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          reset();
        } else {
          return res.json().then((err) => {
            throw Error(err.message);
          });
        }
        return res.json();
      })
      .then((data) => {
        snackbarCtx.showSnackbar({
          title: "Success!",
          message: "Message sent successfully",
          status: "success",
        });
      })
      .catch((err) => {
        console.error(err.message);
        snackbarCtx.showSnackbar({
          title: "Error",
          message: err.message || "Something went wrong",
          status: "error",
        });
      });
  };
  return (
    <div className="flex flex-col lg:mt-24 justify-center items-center">
      <Head>
        <title>Salik Ansari - Contact Me</title>
      </Head>
      <div className="text-2xl bg-purple-50 border border-purple-500 rounded shadow p-2 font-bold text-purple-800">
        Contact Me
      </div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="m-5 shadow bg-purple-50 border border-purple-500 rounded  p-5 text-md lg:text-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="input-group my-2 ">
            <label htmlFor="first-name">First Name : </label>
            <input
              required
              {...register("firstName")}
              type="text"
              name="firstName"
              id="firstName"
              className="shadow-sm border border-purple-400 rounded my-2 p-2 w-full"
            />
          </div>
          <div className="input-group my-2">
            <label htmlFor="lastName">Last Name : </label>
            <input
              required
              {...register("lastName")}
              type="text"
              name="lastName"
              id="lastName"
              className="shadow-sm border border-purple-400 rounded my-2 p-2 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="input-group my-2 ">
            <label htmlFor="email">Email : </label>
            <input
              required
              {...register("email")}
              type="email"
              name="email"
              id="email"
              className="shadow-sm border border-purple-400 rounded my-2 p-2 w-full"
            />
          </div>
          <div className="input-group my-2">
            <label htmlFor="phone">Phone : </label>
            <input
              {...register("phone")}
              type="text"
              name="phone"
              id="phone"
              className="shadow-sm border border-purple-400 rounded my-2 p-2 w-full"
            />
          </div>
        </div>
        <div className="input-group my-2">
          <label htmlFor="message">Message</label>
          <textarea
            required
            {...register("message")}
            name="message"
            id="message"
            className="w-full border border-purple-400 shadow-sm rounded my-2 p-2"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-600 rounded text-white p-3 shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
