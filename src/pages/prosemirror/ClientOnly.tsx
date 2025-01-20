import { FC, ReactNode, useEffect, useState } from 'react'

interface Props {
  children?: ReactNode
}
export const ClientOnly: FC<Props> = ({ children }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return <>{children}</>
}
