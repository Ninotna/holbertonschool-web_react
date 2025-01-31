interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Richard",
    lastName: "CoeurdeLion",
    age: 33,
    location: "England"
};

let student2: Student = {
    firstName: "Jeanne",
    lastName: "d'Arc",
    age: 19,
    location: "France"
};

let studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
