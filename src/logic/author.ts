export interface Author {
  name: string
  imageUrl: string
  bio: string
  twitter?: string
  linkedIn?: string
  stackOverflow: string
  git: string
  nickname: string
  email: string
  phone: string
}
export const authors: Author[] = [
  {
    name: 'Nicolas Zozol',
    imageUrl: '/images/nicolas-zozol-picture.jpg',
    bio: 'Former science teacher, almost serial entrepreneur and currently hard-core coder',
    twitter: 'https://twitter.com/RobustaCode',
    linkedIn: 'https://www.linkedin.com/in/robustacode/',
    stackOverflow: 'https://stackoverflow.com/users/flair/968988.png',
    git: 'https://github.com/nicolas-zozol',
    nickname: 'nicolas',
    phone: '+33 6 33 91 85 04',
    email: 'nicolas@robusta.build',
  },
  {
    name: 'Jane Doe',
    imageUrl: '/images/fabrique-medium.jpg',
    bio: 'Jane is a back-end developer, she specializes in security and her favourite stack is the MERN stack',
    twitter: 'https://www.twitter.com/',
    linkedIn: 'https://www.linkedin.com/',
    stackOverflow: 'https://stackoverflow.com/',
    git: 'https://github.com/',
    nickname: 'jane',
    phone: '0123456789',
    email: 'jane_doe@gmail.com',
  },
]
export const nicolas = authors[0]

export function findAuthor(frontmatterAuthor: string): Author {
  let byName = authors.find(
    author =>
      author.name &&
      author.name.toLowerCase() === frontmatterAuthor.trim().toLowerCase()
  )
  if (byName) {
    return byName
  }

  let byNickname = authors.find(
    author =>
      author.nickname &&
      author.nickname.toLowerCase() === frontmatterAuthor.trim().toLowerCase()
  )
  if (byNickname) {
    return byNickname
  }

  return nicolas
}
