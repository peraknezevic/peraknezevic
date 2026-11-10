"use client"

import { CldImage as CldImageDefault, CldImageProps } from "next-cloudinary"
import { useState } from "react"

const CldImage = ({ className = "", ...props }: CldImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <CldImageDefault
      {...props}
      className={`duration-700 ease-in-out group-hover:opacity-75 ${
        isLoading ? "blur-3xl grayscale" : "blur-0 grayscale-0"
      } ${className}`}
      onLoad={() => setLoading(false)}
    />
  )
}

export default CldImage
