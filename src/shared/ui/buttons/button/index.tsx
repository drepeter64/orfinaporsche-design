"use client"

import React from "react"
import { IButtonProps } from "./props"
import css from "./styles.module.scss"

export const Button: React.FC<IButtonProps> = ({ children, type, ...props }) => {
  return (
    <button
      className={css.button}
      type={type ?? "button"}
      {...props}
    >
      {children}
    </button>
  )
}
