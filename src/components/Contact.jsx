import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Address */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3"
        >
          <MapPin className="w-6 h-6 text-blue-500" />
          <p className="text-lg">{CONTACT.address}</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3"
        >
          <Phone className="w-6 h-6 text-green-500" />
          <p className="text-lg">{CONTACT.phoneNo}</p>
        </motion.div>

        {/* Email */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3"
        >
          <Mail className="w-6 h-6 text-red-500" />
          <a
            href="mailto:sahildeore1234@gmail.com"
            className="text-lg border-b hover:text-blue-500 transition-colors"
          >
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
