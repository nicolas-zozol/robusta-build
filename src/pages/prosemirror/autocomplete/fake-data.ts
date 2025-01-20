const fakeUsers = [
  'Kevin',
  'James',
  'Jane',
  'Jacob',
  'Josh',
  'Jo Foo',
  'Jo Bar',
  'Jason',
  'Brian',
  'P@ul',
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
