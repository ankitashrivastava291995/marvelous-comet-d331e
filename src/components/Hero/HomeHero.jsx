import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export const HomeHero = () => {
  return (
    <div>
      <StaticImage
      src="../images/Industries.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    </div>
  )
}
export default HomeHero