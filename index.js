// Task 1:
function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

// Example usage:
console.log(findLargestNumber([10, 5, 20, 8])); // Output: 20

// Task 2:
function countPositiveNumbers(numbers) {
    let count = 0;
    for (let num of numbers) {
        if (num > 0) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countPositiveNumbers([-1, 2, 5, -7])); // Output: 2

// Task 3:
function squareNumbers(numbers) {
    return numbers.map(num => num * num);
}

// Example usage:
console.log(squareNumbers([2, 3, 4])); // Output: [4, 9, 16]

//Task 4:
function filterAndSumDivisibleByThree(numbers) {
    const filtered = numbers.filter(num => num % 3 === 0);
    const sum = filtered.reduce((acc, num) => acc + num, 0);
    console.log(filtered, 
sum
=, sum);
    return filtered;
}

// Example usage:
filterAndSumDivisibleByThree([3, 5, 9, 12, 14]); // Output: [3, 9, 12] , sum = 24

//Task 5:
function filterLongStrings(strings) {
    return strings.filter(str => str.length > 5);
}

// Example usage:
console.log(filterLongStrings([apple, banana, kiwi, watermelon])); // Output: [banana, watermelon]

//Task 6: 
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome(racecar)); // Output: true

//Task 7: 
function processEvenIndexedStrings(strings) {
    return strings
        .filter((_, index) => index % 2 === 0)
        .map(str => str.toUpperCase().split('').reverse().join(''));
}

// Example usage:
console.log(processEvenIndexedStrings([apple, banana, cherry])); // Output: [ELPPA, YRREHC]

//Task 8:
// Task 8:
const students = [{name: Ahmed,score: 68,},{name: Ali,score: 24,},{name: Mariam,score: 85,},{name: Amr,score: 54,},{name: Sara,score: 99,}];

function assignGrades(students) {
    return students.map(student => {
        let grade;
        if (student.score < 50) grade = 'F';
        else if (student.score < 60) grade = 'D';
        else if (student.score < 70) grade = 'C';
        else if (student.score < 80) grade = 'B';
        else grade = 'A';
        
        return {
            ...student,
            grade
        };
    });
}

function printStudentsWithGrades(students) {
    const gradedStudents = assignGrades(students);
    
    // Print each student
    gradedStudents.forEach(student => {
        console.log(Name: , Grade: );
    });
    
    // Bonus: Sort by grade in descending order
    const gradeOrder = { 'A': 5, 'B': 4, 'C': 3, 'D': 2, 'F': 1 };
    const sortedStudents = [...gradedStudents].sort((a, b) => 
        gradeOrder[b.grade] - gradeOrder[a.grade] || b.score - a.score
    );
    
    console.log(\nStudents
sorted
by
grade:);
    console.log(sortedStudents);
}

// Example usage:
printStudentsWithGrades(students);
