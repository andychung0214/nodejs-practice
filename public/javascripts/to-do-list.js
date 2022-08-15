let todoContext = document.getElementById('todoContext');
let btnSubmit = document.getElementById('btnSubmit');
let displayItemList = document.getElementById('displayItemList');

btnSubmit.addEventListener('click', function (e) {
    let str = todoContext.value;
    let xhr = new XMLHttpRequest();
    xhr.open('post', "/to-do-list/add-item");
    xhr.setRequestHeader('Content-type', "application/json")
    let todo = JSON.stringify({ "content": str });
    xhr.send(todo);
    xhr.onload = function () {
        var originalData = JSON.parse(xhr.responseText);
        if (originalData.success === false) {
            alert(originalData.message);
            return;
        }
        let data = originalData.result;
        let str = '';
        for (item in data) {
            str += '<li>' + data[item].content + '</li>'
        }
        displayItemList.innerHTML = str;
    }
    let apiUrl = '/to-do-list/add-item';

    // $.ajax({
    //     type: 'GET',
    //     url: apiUrl,
    //     success: function (serverResponse) {
    //         let str = todoContext.value;
    //         alert('btn clicked');

    //     },
    //     complete: function () {}
    // });
})

displayItemList.addEventListener('click', function (e) {
    if (e.target.nodeName !== 'INPUT') {
        return;
    }

    let id = e.target.dataset.id;

    let xhr = new XMLHttpRequest();
    xhr.open('post', '/to-do-list/remove-item');
    xhr.setRequestHeader('Content-type', 'application/json');
    let removeToDo = JSON.stringify({ "id": id });
    xhr.send(removeToDo);
    xhr.onload = function () {
        var originalData = JSON.parse(xhr.responseText);
        var data = originalData.result;
        let str = '';
        for (const item in data) {
            str += '<li>' + data[item].content + '<input type="button" value="刪除" data-id="' + item + '"/></li>'
        }
        displayItemList.innerHTML = str;
    }
})