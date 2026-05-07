import "./SubmitButton.css";
import { motion } from "framer-motion"

export default function SubmitButton({ label = "Submit", onClick, type = "button", disabled = false }) {
  return (
    <motion.button
      className="submit__btn"
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15 }}
    >
      {label}
    </motion.button>
  )
}
