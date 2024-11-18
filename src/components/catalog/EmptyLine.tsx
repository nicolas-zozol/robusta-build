import { FC } from 'react'

interface Props {
  small?: boolean
  size?: number
  block?: boolean
}
export const EmptyLine: FC<Props> = ({
  small = false,
  size,
  block = false,
}) => {
  let padding = 20
  if (small) {
    padding = 10
  }
  if (block) {
    size = 4
  }
  if (size) {
    padding *= size
  }

  const style = {
    paddingTop: `${padding}px`,
  }
  return <div style={style} />
}
