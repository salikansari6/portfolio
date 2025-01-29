'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { sendEmail } from '../actions'

const initialState = {
  message: '',
  success: false,
}

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendEmail, initialState)

  return (
    <form action={formAction} className="max-w-2xl mx-auto my-8 p-6 bg-dark-light border border-dark-lighter rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-zinc-300 mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full px-4 py-2 bg-dark border border-dark-lighter rounded-md focus:border-primary focus:ring-1 focus:ring-primary text-zinc-100"
          />
        </div>
        {/* Repeat for other form fields */}
      </div>
      
      <div className="mt-6">
        <label className="block text-zinc-300 mb-2">Message</label>
        <textarea
          name="message"
          required
          rows="4"
          className="w-full px-4 py-2 bg-dark border border-dark-lighter rounded-md focus:border-primary focus:ring-1 focus:ring-primary text-zinc-100"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-primary hover:bg-primary-dark text-dark font-medium py-2 px-4 rounded-md transition-colors"
      >
        Send Message
      </button>

      {state.message && (
        <p className={`mt-4 text-center ${state.success ? 'text-primary-light' : 'text-red-400'}`}>
          {state.message}
        </p>
      )}
    </form>
  )
} 