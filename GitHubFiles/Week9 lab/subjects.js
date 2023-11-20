let numOfMarks = prompt("Please enter the how many subjects");
let formfield = document.getElementById('display');
function init() {

    displayInputs();
}
function displayInputs() {
    let bt = document.createElement('input');;
    for (i = 1; i <= numOfMarks; i++) {

        let newField = document.createElement('input');
        let newBr = document.createElement('br');

        newField.setAttribute('type', 'number');
        newField.setAttribute('name', `subject${i}`);
        newField.setAttribute('class', 'subjectInput');
        newField.setAttribute('id', `subject${i}`);
        newField.setAttribute('placeholder', `subject${i}`);
        formfield.appendChild(newField);
        formfield.appendChild(newBr);

    }
    bt.setAttribute('type', 'submit');
    bt.setAttribute('value', 'Submit');
    formfield.appendChild(bt);

}

function getInput() {
    let marks = [];
    for (i = 0; i < numOfMarks; i++) {
        marks[i] = parseInt(document.getElementById(`subject${i + 1}`).value);
        console.log(marks[i]);
    }
    let out = document.querySelectorAll('.subjectInput');
    remove(out);
    displayMarks(marks);

}

function remove(out) {
    out.forEach(subjectInput => {
        subjectInput.remove();
    });

}
function displayMarks(marks) {
    let avg = 0;
    let divOutput = document.getElementById('displayMarks');
    console.log(marks.length);

    for (i = 0; i < marks.length; i++) {
        let newOutput = document.createElement('h4');
        avg = avg + marks[i];
        console.log(avg);

        newOutput.innerText = `Subject ${i + 1}: ${marks[i]}`;
        divOutput.appendChild(newOutput);

    }
    avg = avg / marks.length;
    console.log(avg);
    let avgMsg = document.createElement('h4');
    avgMsg.innerText = `Your average mark is: ${avg}`;
    divOutput.appendChild(avgMsg);

}
/* <input type="submit" value="Submit"></input> */