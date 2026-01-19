import { Metadata } from "next"
import { LoginPage } from "@/_pages/login"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to Orfina Porsche Design Archive",
  robots: {
    index: false,
    follow: false,
  },
}

export default function Login() {
  return <LoginPage />
}
