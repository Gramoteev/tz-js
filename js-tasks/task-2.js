// 2 task
function isValidDate(string) {
    let [day, month, year] = string.split('.');
    return !isNaN(Date.parse(`${year}-${month}-${day}`));
}

console.log(isValidDate('17.10.2012')); // true
console.log(isValidDate('17-10-2012')); // false
