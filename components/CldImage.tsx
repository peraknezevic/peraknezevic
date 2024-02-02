"use client"

import { CldImage as CldImageDefault, CldImageProps } from "next-cloudinary"
import { useState } from "react"

const CldImage = (props: CldImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <CldImageDefault
      {...props}
      className={`
  duration-700 ease-in-out group-hover:opacity-75
  ${isLoading ? "blur-3xl grayscale" : "blur-0 grayscale-0"})`}
      onLoad={() => setLoading(false)}
    />
  )
}

export default CldImage
