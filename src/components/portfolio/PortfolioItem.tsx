import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  images: StaticImageData[]
  title?: string
  children?: ReactNode
}

export const PortfolioItem = ({ images, title, children }: Props) => {
  return (
    <article className={'mt-40'}>
      {title && <h2>{title}</h2>}

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`${title}-${idx}`}
            placeholder="blur"
            height={300}
            style={{ objectFit: 'contain', border: '1px solid #ccc' }}
          />
        ))}
      </div>

      {/* Content (children) */}
      {children && <div style={{ marginTop: '1rem' }}>{children}</div>}
    </article>
  )
}
