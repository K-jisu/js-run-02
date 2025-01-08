/**
 * Q: findUserByName 함수
 *
 * - findUserByName을 작성하세요.
 * - 파라미터로 받는 배열에서 name이 일치하는 첫 객체를 반환합니다. (find 사용)
 * - 없다면 null 반환.
 *
 * @param {{name:string}[]} users
 * @param {string} name
 * @returns {{name:string}|null}
 *
 * Q7.6.1: findIndexOf 함수
 *
 * - findIndexOf를 작성하세요.
 * - 파라미터로 받는 배열에서 value와 일치하는 첫 인덱스를 반환합니다. (findIndex 사용)
 * - 값이 없으면 -1을 반환합니다.
 *
 * @param {any[]} arr
 * @param {any} value
 * @returns {number}
 */
const users = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
  { name: "Bob" },
];

// const arr = [10, 20, 30, 20, 40];

// TODO: findUserByName 함수를 작성하세요.
function findUserByName(users, name) {
  if(users.length === 0) return null;
  return users.find((item)=>{
    return item.name === name ? item.name === name : null
  })
}

// TODO: findIndexOf 함수를 작성하세요.
function findIndexOf(arr, value) {
  if(users.length === 0) return null;
  return arr.findIndex((val) => {
    return val === value
  });
}
// console.log(findUserByName(users, "Bob"));
// console.log(findIndexOf(arr, 30));
// export를 수정하지 마세요.
export { findUserByName, findIndexOf };
