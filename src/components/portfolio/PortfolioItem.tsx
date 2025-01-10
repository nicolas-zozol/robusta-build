import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import styled from 'styled-components'

interface Props {
  images: StaticImageData[]
  title?: string
  children?: ReactNode
}

export const PortfolioItem = ({ images, title, children }: Props) => {
  return (
    <Article className={'mt-40'}>
      {title && <h2>{title}</h2>}

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {images.map((img, idx) => (
          <ImageWrapper key={idx}>
            <Div>
              <Image
                key={idx}
                src={img}
                alt={`${title}-${idx}`}
                placeholder="blur"
                height={300}
                style={{ objectFit: 'contain' }}
              />
            </Div>
          </ImageWrapper>
        ))}
      </div>

      {/* Content (children) */}
      {children && <div style={{ marginTop: '1rem' }}>{children}</div>}
    </Article>
  )
}

const Article = styled.article`
  h2 {
    margin-bottom: 1rem;
  }
`

const Div = styled.div`
  height: 300px;
`

export const ImageWrapper = styled.div`
  /* Fixed width/height for demonstration; feel free to adjust */
  //width: 300px;
  height: 300px;

  /* Let the image exceed its own box */
  overflow: visible;
  position: relative;

  /* 
     * By default, each wrapper is "layered" at z-index: 0, 
     * but on hover we bring it to the front:
     */
  z-index: 0;
  &:hover {
    z-index: 10; /* Overlap siblings */
  }

  /* We style the actual <img> (Next.js Image "wrapper") */
  img {
    border: 1px solid #ccc;
    transition: transform 0.3s ease-in-out;
    object-fit: contain; /* or 'cover', or remove for raw scaling */
    width: 100%;
    height: 100%;
    display: block;
  }

  &:hover img {
    transform: scale(2); /* Grow bigger than parent */
  }
`
