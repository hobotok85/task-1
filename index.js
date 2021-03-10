// Задача 1.1
function getType (a) {
    return typeof a;
};
console.log (getType(false));

// Задача 1.2
function isExist (b) {
  if (b != null || b!= undefined) {
    return true;
  }
};
console.log (isExist (false));

// Задача 1.3
function isNumberInRange (x , y ,z) {
  if (z <= y) {
    return 'Неправильно указаны границы диапазона: верхняя граница не может быть меньше нижней';
  };
  if ((y && z) === undefined) {
    return 'Не указаны границы диапазона';
  };
  if (x >= y && x <= z) {
  console.log (true);
  } else {
    console.log (false);
    return ' Значение не введено или находится не в пределах диапазона';
  };
  /* if (x < y || x > z || x === undefined) { 
  console.log (false);
  } если не использовать else */
};
isNumberInRange (undefined, 1, 3);

// Задача 1.4
function isArrayLength (arr1, min, max) {
  if (max <= min) {
    return 'Неправильно указаны границы диапазона: верхняя граница не может быть меньше нижней';
  };
  if ((min && max) === undefined) {
    return 'Не указаны границы диапазона';
  };
  let nums = [2,3,4,4,5,6,7,7,8,8,,9,9,9,,9];
  let arr = nums.length;
  console.log (arr);
    if (arr >= min && arr <= max) {
  console.log (true);
  } else {
    console.log (false);
    return ' Значение не введено или не находится в пределах диапазона';
  };
};
    isArrayLength (arr ,1 ,20);
    // Задача 1.5
    function isStringLength (str , y ,z) {
      if (z <= y) {
        return 'Неправильно указаны границы диапазона: верхняя граница не может быть меньше нижней';
      };
      if ((y && z) === undefined) {
        return 'Не указаны границы диапазона';
      };
      let str = String;
      if (str !== String) {
        return 'Введите строку';
      };
      let strLeng = str.length;
      if (strLeng >= y && strLeng <= z) {
      console.log (true);
      } else {
        console.log (false);
        return ' Значение не введено или находится не в пределах диапазона';
      };
    };
    isStringLength ('Hello', 1, 3)