const fakeUsers = [
  'Kevin',
  'James',
  'Jane',
  'Jacob',
  'Josh',
  'Jason',
  'Brian',
  'Paul',
  'Peter',
  'Mick',
  'Joe',
  'Jim',
]

export async function getFakeUsers(matchString: string) {
  return fakeUsers.filter(user =>
    user.toLowerCase().startsWith(matchString.toLowerCase())
  )
}
