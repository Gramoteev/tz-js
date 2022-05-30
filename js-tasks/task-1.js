// 1 task
function removeUnique(arr) {
    const map = new Map();
    const newArr = [];
    for (const arrElement of arr) {
        if (map.get(arrElement) === 'checked') {
            newArr.push(arrElement);
            map.set(arrElement, 'added');
        } else if (map.get(arrElement) === 'added'){
            break;
        } else {
            map.set(arrElement, 'checked')
        }
    }
    return newArr;
}

arr = [1, 2, 3, 1, 2, 5, 1];
console.log(removeUnique(arr));


