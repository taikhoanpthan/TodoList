const tasks = [];
let currentIndex = null;

function addNewTask(){
    const inputElement = document.getElementById('name');
    const value = inputElement.value;
    //constuctor
    //khi mà không có index => add new task
    if (currentIndex == null){
        tasks.push({
            id: 1,
            name: value,
            status: "Processing",    
        });
    }else {
        //khi mà không có index =>update task
       const task = tasks[currentIndex]
       task.name = value;
       currentIndex = null;
    }

    inputElement.value ='';
    renderList();
}
function renderList(){
    // Từ cái Array tasks -> html trong tbody
    // =>mỗi cái tasks -> 1 cái tr
    let html='';
    const taskTable = document.getElementById('task-Table');

    for (let i = 0; i < tasks.length; i++){
        //Tasks;
        // tr
        html += `
        <tr>
            <td class="align-middle">${i + 1}</td>
            <td class="align-middle">${tasks[i].name}</td>
            <td class="align-middle">${tasks[i].status}</td>
            <td class="align-middle">
            <button class="btn btn-info" onclick="updateTask(${i})">
                    Update
                </button>
                <button class="btn btn-danger" onclick="deleteTask(${i})">
                    Delete
                </button>
            </td>
        </tr>`;
    }
    //$ để truyền tham số
    //inner html => bỏ HTML vào bụng tbody
    taskTable.innerHTML = html;
}
function deleteTask(index){
    //Cung cấp thứ tự task muốn xóa
    console.log("Xóa task "+index);
    // xóa 1 phần tử trong array trong js
    tasks.splice(index, 1);
    //splice xóa phần tử bắt đầu
    renderList();
}
function updateTask(index){
    //index: vị trí của task trong tasks 
    //=> lấy ra task tại vị trí thứ index
    const task = tasks [index];
    //khi ấn vào update
    // cập nhât giá trị ô input
    const inputElement = document.getElementById('name');
    inputElement.value = task.name;

    //update current index
    currentIndex = index;
}