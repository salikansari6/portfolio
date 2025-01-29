import ContactForm from './ContactForm'
import { sendEmail } from '../actions'

export const metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me',
}

export default function Contact() {
  return (
    <div className="px-5 py-5 md:px-16 lg:px-24 xl:px-48 2xl:px-52">
      <div className="text-2xl bg-purple-50 border border-purple-500 rounded shadow p-2 font-bold text-purple-800">
        Contact Me
      </div>
      <ContactForm />
    </div>
  )
} 