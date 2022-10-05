// Expected Result : 
// [
//   { id: '1', name: 'Sherlock', score: 90 },
//   { id: '4', name: 'Budi', score: 85 }
// ]
// Direction :
// Return array of student for score is bigger than mean score (average score)

const students = [
    {
        id: "1",
        name: "Sherlock",
        score: 90
    },
    {
        id: "2",
        name: "Genta",
        score: 75
    },
    {
        id: "3",
        name: "Ai",
        score: 80
    },
    {
        id: "4",
        name: "Budi",
        score: 85
    }
]

function result(student) {
    // Your Code Here
    var total = 0;
    var mean = 0;
    var data = [];
    for (var i = 0; i < student.length; i++) {
        total += student[i].score;
    }
    mean = total / student.length;
    for (var i = 0; i < student.length; i++) {
        if (student[i].score > mean) {
            data.push(student[i]);
        }
    }
    return data;
}

console.log(result(students));