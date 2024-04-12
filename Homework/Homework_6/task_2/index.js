const a = 17;
const b = 5;
a > b; // true, 17 больше 5
a <= b; // false, 17 не меньше и не равно 5
a == b; // false, 17 не равно 5
a != b; // true, 17 не равно 5
'a' < 'b'; // true, 'a' меньше 'b' в алфавитном порядке
'ab' > 'a'; // true, 'ab' больше 'a' в алфавитном порядке
'17' > 1; // true, строка '17' преобразуется в число 17, которое больше 1
17 === 1; // false, 17 не равно 1
17 === 17; // true, 17 равно 17
17 === '17'; // false, 17 не равно '17', так как типы разные
17 === true; // false, 17 не равно true
'0' === ''; // false, '0' не равно ''
true === false; // false, true не равно false
true === true; // true, true равно true
null === undefined; // false, null не равно undefined
false === 0; // false, false не равно 0
17 == '17'; // true, '17' преобразуется в число 17, которое равно 17
'0' == ''; // false, '0' не равно ''
0 == ''; // true, '' преобразуется в число 0, которое равно 0
null == undefined; // true, null и undefined равны при абстрактном сравнении
false == 0; // true, false преобразуется в число 0, которое равно 0
undefined == null; // true, undefined и null равны при абстрактном сравнении
undefined == 0; // false, undefined не равно 0
null == 0; // false, null не равно 0
undefined < 0; // false, undefined не меньше 0
undefined > 0; // false, undefined не больше 0
