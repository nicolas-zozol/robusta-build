export interface Chapter {
  title: string
  content: Story[]
}

export interface Story {
  title: string
  documentation: string
  content: any
}
