import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  images: StaticImageData[]
  title: string
  children: ReactNode
}

export const PortfolioItem = ({ images, title, children }: Props) => {
  return (
    <article className={'mt-40'}>
      <h2>{title}</h2>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`${title}-${idx}`}
            placeholder="blur"
            // Provide your desired dimensions
            // or `fill` / `responsive` if you prefer
            width={300}
            height={200}
            style={{ objectFit: 'cover', border: '1px solid #ccc' }}
          />
        ))}
      </div>

      {/* Content (children) */}
      <div style={{ marginTop: '1rem' }}>{children}</div>
    </article>
  )
}
