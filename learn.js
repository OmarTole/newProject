const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng', 'kz'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            python: '40%',
        },
        exp: '1 month'
    },
    showAgeAndLangs: () => {
        let {age} = personalPlanPeter;
        let {languages} = personalPlanPeter['skills'];
        let result = `Мне ${age} и я владею языками: `

        for(let item of languages) {
            result += `${item} `.toUpperCase()
        }

        return result;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// function showExperience(plan) {
    
//     let {exp} = personalPlanPeter['skills'];

//     console.log(exp);
    
// }
// showExperience(personalPlanPeter)

function showProgrammingLangs(plan) {
    let {programmingLangs} = personalPlanPeter['skills']
    let result = ''
    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]} \n`
    }

    return result
}

console.log(showProgrammingLangs(personalPlanPeter));



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

let arr = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let result = 'Доступные валюты:'
    for (let item of arr) {
        if (missingCurr != item) {
            result += `\n ${item}`
        }
    }

    return result;
}

console.log(availableCurr(arr, 'CNY'));




