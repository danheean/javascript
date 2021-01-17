// Callback Hell example
class UserStorage {
  loginUser(id, password){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(
          (id === 'jurepi' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ){
           resolve(id);
        }
        else{
          reject(new Error('not found'));
        }
      }, 200);
    });
  };

  getRoles(user)
  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(user === 'jurepi')
        {
          resolve({name: 'jurepi', role: 'admin'});
        }
        else
        {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}
const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// const id = 'jurepi';
// const password = 'dream';
const id = 'jurep';
const password = 'dream';

userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role}`))
;





























