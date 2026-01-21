const bcrypt = require('bcrypt');

async function run() {
  const passwords = [
    { email: 'alice.dupont@mail.com', pwd: 'password1' },
    { email: 'bob.martin@mail.com', pwd: 'password2' },
    { email: 'claire.durand@mail.com', pwd: 'password3' },
  ];

  for (const item of passwords) {
    const hash = await bcrypt.hash(item.pwd, 10);
    console.log(item.email, '=>', hash);
  }
}

run();
