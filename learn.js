const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];

function sortStudentsByGroups(arr) {

    let groupSort = []
    let group = []
    let j = 0;
    arr.sort()

    for (let i = 0; i < arr.length; i++) {
        groupSort[j] = arr[i];
        j++;
        if (groupSort.length == 3) {
            group[group.length] = groupSort;
            
            groupSort = [];
            j = 0
        }
        

    }

    if (groupSort.length == 0) {
        group.push('Оставшиеся студенты: - ')
        return group
    } else {
        group.push(`Оставшиеся студенты: ${groupSort}`)
        return group
    }


}

console.log(sortStudentsByGroups(students));

