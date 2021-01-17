// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if(
        (id === 'jurepi' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ){
         onSuccess(id);
      }
      else{
        onError(new Error('not found'));
      }
    });
  };

  getRoles(user, onSuccess, onError)
  {
    setTimeout(() => {
      if(user === 'jurepi')
      {
        onSuccess({name: 'ellie', role: 'admin'});
      }
      else
      {
        onEorror(new Error('no access'));
      }
    })
  }
}

const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
const id = 'jurepi';
const password = 'dream';

userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role}`
        );
      }, 
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);



































