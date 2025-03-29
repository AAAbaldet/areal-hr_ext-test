document.addEventListener('DOMContentLoaded', function() {
    loadData();

    // Добавляем обработчики событий для кнопок
    document.getElementById('saveButton').addEventListener('click', function() {
		const data = document.getElementById('lastName').value + ' ' + 
                 document.getElementById('firstName').value + ' ' + 
                 document.getElementById('middleName').value;
        if (data) {
            localStorage.setItem('savedData', data);
            alert('Данные сохранены!');
        } else {
			dataDisplay.textContent = 'Нет сохраненных данных.';
		}
    });
});

const form = document.getElementById('employeeForm');
const employeeList = document.getElementById('employeeList');
let editId = null; // Переменная для хранения ID редактируемого сотрудника

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const employee = {
        id: editId ? editId : Date.now(), // Если редактируем, используем существующий ID
        lastName: document.getElementById('lastName').value,
        firstName: document.getElementById('firstName').value,
        middleName: document.getElementById('middleName').value,
        dob: document.getElementById('dob').value,
        passport: document.getElementById('passport').value,
        address: document.getElementById('address').value,
        work: document.getElementById('work').value
    };

    if (editId) {
        updateEmployee(employee);
        editId = null; 
    } else {
        addEmployee(employee);
    }

    form.reset();
});

function loadData() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.forEach(renderEmployee);
}

function addEmployee(employee) {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    refreshEmployeeList();
}

function updateEmployee(employee) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees = employees.map(emp => emp.id === employee.id ? employee : emp);
    localStorage.setItem('employees', JSON.stringify(employees));
    refreshEmployeeList();
}

function renderEmployee(employee) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${employee.lastName} ${employee.firstName} ${employee.middleName}</span>
        <button class="editEmployee" onclick="editEmployee(${employee.id})">Редактировать</button>
        <button class="viewEmployee" onclick="viewEmployee(${employee.id})">Просмотр информации</button>
        <button class="deleteEmployee" onclick="deleteEmployee(${employee.id})">Удалить</button>
    `;
    employeeList.appendChild(li);
}

function editEmployee(id) {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        document.getElementById('lastName').value = employee.lastName;
        document.getElementById('firstName').value = employee.firstName;
        document.getElementById('middleName').value = employee.middleName;
        document.getElementById('dob').value = employee.dob;
        document.getElementById('passport').value = employee.passport;
        document.getElementById('address').value = employee.address;
        document.getElementById('work').value = employee.work;
        editId = id; // Сохраняем ID редактируемого сотрудника
    }
}

function viewEmployee(id) {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        alert(`
            Фамилия: ${employee.lastName}
            Имя: ${employee.firstName}
            Отчество: ${employee.middleName}
            Дата рождения: ${employee.dob}
            Паспорт: ${employee.passport}
            Адрес: ${employee.address}
            Дата принятия на работу: ${employee.work}
        `);
    }
}

function deleteEmployee(id) {
    let employees = JSON.parse(localStorage.getItem
('employees')) || [];
    employees = employees.filter(employee => employee.id !== id);
    localStorage.setItem('employees', JSON.stringify(employees));
    refreshEmployeeList();
}

function refreshEmployeeList() {
    employeeList.innerHTML = '';
    loadData();
}

document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value;
    const bodyText = document.body.innerHTML;

    document.body.innerHTML = bodyText.replace(/<span class="highlight">(.*?)<\/span>/g, '\$1');

    if (searchTerm) {
        const regex = new RegExp(searchTerm, 'gi');
        document.body.innerHTML = bodyText.replace(regex, '<span class="highlight">$&</span>');
    }
});

