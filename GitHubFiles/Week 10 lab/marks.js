let subjects = prompt("How many subjects?", "");
let avg = 0;
let marks = [];
getMarks();
function getMarks() {

    for (let i = 0; i < subjects; i++) {

        marks[i] = parseInt(prompt(`Marks for subject ${i + 1}:`, ""));
        avg = avg + marks[i];
    }
    avg = avg / marks.length;
    display();
}
function display() {
    let placeholder = document.getElementById('display');
    let msg;
    for (let i = 0; i < marks.length; i++) {
        msg = `<p>Subject ${i + 1}: ${marks[i]}</p>`;
        placeholder.innerHTML += msg;
    }
    msg = `<p>The average is: ${avg}</p>`;
    placeholder.innerHTML += msg;

}