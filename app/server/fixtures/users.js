if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
    username: 'admin',
    password: 'admin',
    email: 'admin@example.com'
  });
}
