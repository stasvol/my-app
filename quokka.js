const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function arrMet() {
  const arrData = arr.map(el => el ** 2);
  console.log(arrData);
}

arrMet();

let sum = 0;
const element = () => {
  console.log(sum++);
  if (sum === 5) return;
  element();
};
element();

let fac = 1;

function factFunc(n) {
  if (n === 0) return;
  fac *= n;
  factFunc(n - 1);
}

factFunc(5);
console.log(fac);

let factor = 1;
const factorFunc = n => {
  if (n === 6) return;
  factor *= n;
  factorFunc(n + 1);
};
factorFunc(1);
console.log(factor);

const forData = [];
const forDataFunc = () => {
  for (let i = 0; i < arr.length; i++) {
    console.log(forData.push(i));
    console.log(forData.map(el => Math.sqrt(el)));
  }
  return console.log(forData.map(el => el ** 2));
};
forDataFunc();

function times() {
  const timeNew = new Date().getTime();
  console.log(timeNew);
  console.log(Date.now().toLocaleString());
}

times();

(function() {
  let count = 0;

  function countData() {
    count++;
    console.log(count);
  }

  countData();
  countData();
  countData();
  countData();
})();

function randomData() {
  const min = 100;
  const max = 300;
  const randomNumeric = Math.ceil(min + Math.random() * (max + 1 - min));
  console.log(randomNumeric);
  if (randomNumeric === 300) return;
  randomData();
}

randomData();

const sumFunct = (a, b, c = 50) => {
  console.log(a * b + c);
};
sumFunct(10, 20, '-Strong');

function sumFunction(a, b, c = 50) {
  console.log(a * b + c);
  // eslint-disable-next-line prefer-rest-params
  console.log(arguments);
}

sumFunction(10, 20, '-Strong');

function sumArg(...args) {
  const summ = args.reduce((accum, el) => accum * el);
  console.log(summ);
  console.log(args);
}

sumArg(10, 20, 30);

const sumArg2 = (...args) => {
  const summ = args.map(el => el / 2);
  console.log(summ);
  console.log(args);
};
sumArg2(10, 20, 30);

// functions -> arguments argFunct
const argFunct = result => {
  console.log(result);
};
// const argData = (res, funcOne) => {
//   funcOne(res);
// };
// argData(99, argFunct);
const argData = (funcOne, ...res) => {
  funcOne(res);
};
argData(argFunct, 20, 40, 60, 90);

// const arr3 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let summa = 0;
// for (let i = 0; i < arr3.length; i++) {
//   // eslint-disable-next-line no-unused-vars
//   summa += arr3[i];
//   // summa.push(...arr3[i]);
// }
// console.log(summa);

(() => {
  const arrRet = [
    [2, 5, 7],
    [1, 3, 8],
    [4, 6, 9],
  ];
  console.log(arrRet.length);

  const arrFilter = arrRet.filter(el => sumArrFunc(el) % 2 === 0);
  console.log(arrFilter);

  function retFunc() {
    let sum = 0;
    for (let i = 0; i < arrRet.length; i++) {
      sum += sumArrFunc(arrRet[i]);
      // sum += arrRet[i];
    }
    return sum;
  }

  console.log(retFunc());

  function sumArrFunc(arr) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
      summ += arr[i];
    }
    return summ;
  }

  const sumFunct = () => {
    return sumArrFunc;
  };
  const num = sumFunct();
  console.log(num([10, 20, 40, 80]));
})();
// стрелочные ф-ции
(() => {
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arrFunc3 = () => {
    const filterArr = arr1.filter((item, index) => index % 2 === 0);
    return console.log(filterArr);
  };
  arrFunc3();

  const arrFunc4 = (...arg) => {
    console.log(arg);
  };
  arrFunc4(3, 3);
})();
// callback
(() => {
  const callbFunc = arr => {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
      out += `${arr[i]}*`;
    }
    return console.log(out);
  };
  const arr1 = [1, 2, 3, 4, 5, 6];
  const outFunc = (arr, myFunc, ...arg) => {
    arr[4] *= 2;
    myFunc(arr1);
    console.log(arr);
    console.log(arg);
  };
  outFunc(arr1, callbFunc, 'qwerty', 1, 5, 6, 0.999);

  const powFunct = item => item ** 2;
  const arrMap = arr1.map(powFunct);
  callbFunc(arrMap);
  console.log(arrMap);

  const getUsers = async callback => {
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // callback(data);
    // const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => callback(json))
    const data = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    };
    callback(data);
  };
  const usersFunc = data => {
    console.log('Request');
    console.log(data);
    console.log('Answer');
  };
  getUsers(usersFunc);
})();
// this
(() => {
  const f = (a, b) => {
    console.log(a + b);

    console.log(this);
  };
  f(2, 3);

  function f1(a = 9, b = 10) {
    const sum = a + b;
    const user = {
      name: 'Vlad',
      age: 20,
      getUser() {
        console.log(this.name, this.age);
        return (this.name = 'ivan');
      },
    };
    console.log(sum);
    console.log(user.name);
    console.log(user.getUser());
    console.log(user.name);
  }

  f1();
})();
// функції вищого порядку
(() => {
  const user = {
    password: 'qwerty',
    age: 20,
    isCheck: true,
  };
  console.log(user.password.length);

  const getPassword = user => {
    return user.password.length >= 6;
  };
  // console.log(getPassword(user));
  const getAge = user => {
    return user.age >= 18;
  };
  // console.log(getAge(user));

  const getCheck = user => {
    return user.isCheck;
  };
  // console.log(getCheck(user));

  const valid = (obj, ...arg) => {
    // arg.forEach(el => el === false);
    for (let i = 0; i < arg.length; i++) {
      if (arg[i](obj) === false) return false;
    }
    console.log(obj, arg);
    return true;
  };
  valid(user, getPassword, getAge, getCheck);

  const validateFunction = (...arg) => {
    const propsFunc = obj => {
      for (let i = 0; i < arg.length; i++) {
        if (arg[i](obj) === false) return false;
      }
      console.log(obj, arg);
      return true;
    };
    return propsFunc;
  };
  const validate1 = validateFunction(getPassword, getAge, getCheck);
  console.log(validate1(user));
})();

(() => {
  // eslint-disable-next-line consistent-return
  const fibanFunc = n => {
    if (n <= 1) return n;
    return fibanFunc(n - 1) + fibanFunc(n - 2);
  };
  console.log(fibanFunc(10));

  function fibanacci(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      // const c = a + b;
      // a = b;
      // b = c;
      [a, b] = [b, a + b];
    }
    return console.log(b);
  }
  fibanacci(10);
})();
