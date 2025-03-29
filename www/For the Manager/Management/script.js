document.addEventListener('DOMContentLoaded', function() {
    loadData();

    // Загружаем сохраненные данные и отображаем их
    const savedData = localStorage.getItem('savedData');
    const dataDisplay = document.getElementById('dataDisplay');

    if (savedData) {
        dataDisplay.textContent = savedData;
    } else {
        dataDisplay.textContent = 'Нет сохраненных данных.';
    }
});

const form = document.getElementById('crudForm');
const dataList = document.getElementById('dataList');
let editId = null; // Переменная для хранения ID редактируемого сотрудника

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const position = document.getElementById('position').value;
	const personal = document.getElementById('personal').value;

    const data = {
        id: editId ? editId : Date.now(), // Если редактируем, используем существующий ID
        name,
        department,
        position,
		personal
    };

    if (editId) {
        updateData(data);
        editId = null;
    } else {
        addData(data);
    }

    form.reset();
});

function loadData() {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    data.forEach(item => {
        renderItem(item);
    });
}

function addData(data) {
    const currentData = JSON.parse(localStorage.getItem('data')) || [];
    currentData.push(data);
    localStorage.setItem('data', JSON.stringify(currentData));
    renderItem(data);
}

function updateData(data) {
    let currentData = JSON.parse(localStorage.getItem('data')) || [];
    currentData = currentData.map(item => item.id === data.id ? data : item);
    localStorage.setItem('data', JSON.stringify(currentData));
    refreshDataList();
}

function renderItem(item) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${item.name}. ${item.department}, ${item.position} - ${item.personal}</span>
        <button onclick="editData(${item.id})">Редактировать</button>
        <button onclick="deleteData(${item.id})">Удалить</button>
    `;
    dataList.appendChild(li);
}

function deleteData(id) {
    let currentData = JSON.parse(localStorage.getItem('data')) || [];
    currentData = currentData.filter(item => item.id !== id);
    localStorage.setItem('data', JSON.stringify(currentData));
    refreshDataList();
}

function refreshDataList() {
    dataList.innerHTML = '';
    loadData();
}

function editData(id) {
    const currentData = JSON.parse(localStorage.getItem('data')) || [];
    const itemToEdit = currentData.find(item => item.id === id);
    
    if (itemToEdit) {
        document.getElementById('name').value = itemToEdit.name;
        document.getElementById('department').value = itemToEdit.department;
        document.getElementById('position').value = itemToEdit.position;
		document.getElementById('personal').value = itemToEdit.personal;
        editId = id; // Сохраняем ID редактируемого сотрудника
    }
}

document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value;
    const bodyText = document.body.innerHTML;

    // Удаляем предыдущие выделения
    document.body.innerHTML = bodyText.replace(/<span class="highlight">(.*?)<\/span>/g, '\\$1');

    if (searchTerm) {
        const regex = new RegExp(searchTerm, 'gi'); // 'g' для глобального поиска, 'i' для нечувствительности к регистру
        document.body.innerHTML = bodyText.replace(regex, '<span class="highlight">{{input}}</span>');
    }
});