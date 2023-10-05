document.addEventListener("DOMContentLoaded", function () {

    const courseList = document.getElementById("byoForm");
    const addCourseButton = document.getElementById("addCourseButton");

    addCourseButton.addEventListener("click", addCourse);

    function addCourse() {
        
        const courseEntry = document.createElement("div");
        courseEntry.classList.add("byoForm");

        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.placeholder = "Enter course name";
        courseEntry.appendChild(courseInput);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => {
            courseList.removeChild(courseEntry);
        });
        courseEntry.appendChild(deleteButton);

        courseList.appendChild(courseEntry);
    }
});