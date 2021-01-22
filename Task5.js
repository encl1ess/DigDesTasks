// Создать массив;
// Заполнить массив рандомными целыми числами (например от -100 до 100);
// Заменить все отрицательные числа нулем;
// После каждого второго элемента, равного нулю, вставить элемент равный -1.

var arr = new Array(10);

function fillArray(min, max) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(arr);
}

function replaceFromArray() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            arr[i] = 0;
    }
    console.log(arr);
}

function addToArray() {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            count++;
            if (count == 2) {
                arr.splice(++i, 0, -1)
                count = 0;
            }
        }
    }
    console.log(arr);
}

fillArray(-100, 100);
replaceFromArray();
addToArray();