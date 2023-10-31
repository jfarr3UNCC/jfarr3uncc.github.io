let persons = [Brooke, Hannah, Jacob];
let salaries = [400000, 300000, 60000];

function displayResults() {
    var averageSalary = calculateAverageSalary(salaries);
    var highestSalary = Math.max(salaries);

    var output = "The average salary: " + averageSalary + ", " + "The highest salary: " + highestSalary

    const para = document.createElement("p");
    const node = document.createTextNode("Test");
    para.appendChild(node);
    const element = document.getElementById("results");
    element.appendChild(para);
    
}




