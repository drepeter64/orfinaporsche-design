"use client"

import Cookies from "js-cookie"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"
import { hash } from "immutable"
import { useRouter } from "next/navigation"

const setMyCookie = (value: string) => {
  Cookies.set("auth_token", value, { expires: 7, path: "/" })
}
export function LoginPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const [loading, setLoading] = useState(false)
  const [unvalid, setValid] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true)
    if (data.password === "Orfina7177") {
      setMyCookie(String(hash(data.password)))
      router.push("/")
    } else {
      setValid(true)
    }
    setLoading(false)
  }

  return (
    <div className="bg-white min-h-screen flex justify-between flex-col">
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-3xl font-light text-white mb-8 uppercase tracking-wider">
            Please insert your password
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <input
                  {...register("password")}
                  placeholder="•••••••••"
                  type="password"
                  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                />
                {errors.password && <span className="text-white">This field is required</span>}
                {unvalid && <span className="text-white">This is not valid password</span>}
              </div>
              <button
                type="submit"
                className="bg-white text-black px-8 py-4 font-sans font-normal text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
                disabled={loading}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-sans text-2xl font-normal text-black mb-8 uppercase tracking-wide">
              Our Vision
            </h2>
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
              This collection represents more than just timepieces; it embodies the pursuit of
              perfection that defines both Porsche engineering and Swiss horological craftsmanship.
              Our mission is to document, preserve, and share the rich heritage of these remarkable
              instruments with enthusiasts worldwide.
            </p>
            <p className="font-sans text-lg text-gray-700 leading-relaxed">
              Through meticulous research, detailed photography, and comprehensive documentation, we
              aim to create the definitive resource for collectors, historians, and anyone
              passionate about the intersection of automotive and horological excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-3xl font-light text-white mb-8 uppercase tracking-wider">
            Get In Touch
          </h2>
          <p className="font-sans text-xl text-gray-300 mb-12 leading-relaxed">
            You can reach out via the contact form below or message Drew directly on Instagram at
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.instagram.com/BFMOTORCLUB"
              target={"_blank"}
              className="bg-white text-black px-8 py-4 font-sans font-normal text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              @BFMOTORCLUB
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

type Inputs = {
  password: string
}
