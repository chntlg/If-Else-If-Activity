//prompt the user to input their score

function askGrade(){
    let grade = prompt("Enter your score: ");
    if (grade >= 90 && grade <= 100) {
        alert("Your grade is Excellent.");
    } else if (grade >= 80 && grade < 90) {
        alert("Your grade is Good.");
    } else if (grade >= 70 && grade < 80) {
        alert("Your grade is Fair.");
    } else if (grade >= 1 && grade < 70) {
        alert("Your grade Needs Improvement.");
    } else {
        alert("Invalid input");
    }
}