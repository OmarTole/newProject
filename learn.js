// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];

// function sortStudentsByGroups(arr) {

//     let groupSort = []
//     let group = []
//     let j = 0;
//     arr.sort()

//     for (let i = 0; i < arr.length; i++) {
//         groupSort[j] = arr[i];
//         j++;
//         if (groupSort.length == 3) {
//             group[group.length] = groupSort;
            
//             groupSort = [];
//             j = 0
//         }
        

//     }

//     if (groupSort.length == 0) {
//         group.push('Оставшиеся студенты: - ')
//         return group
//     } else {
//         group.push(`Оставшиеся студенты: ${groupSort}`)
//         return group
//     }


// }

// console.log(sortStudentsByGroups(students));


// Другой проект про ресторан и блюда___________________

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow))


// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + sDish.price.slice(0, -1) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = JSON.parse(JSON.stringify(data));

//     copy.waitors[0] = {name: 'Mike', age: 32};
//     return copy;
// }

// console.log('это с функция', transferWaitors(restorantData));
// console.log('это сам объект', restorantData);


// Задания с рекурсиями

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

console.log(Object.values(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }


        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result);

// Формула факториала

const factorial = (n) => {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
const answer = factorial('');

console.log(answer);