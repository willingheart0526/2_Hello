// 用id設定元素
var setElement = (id) => document.getElementById(id);

// 取得遠端JSON物件
var getJson = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setElement('info').innerText = JSON.stringify(json))
};

// 上傳JSON物件
var postJson = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => setElement('info').innerText = JSON.stringify(json))
};

// 更新JSON物件 PUT
var putJson = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => setElement('info').innerText = JSON.stringify(json))
};

// 更新JSON物件 PATCH
var patchJson = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo'
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => setElement('info').innerText = JSON.stringify(json))
};

// 刪除JSON物件
var deleteJson = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    })
        .then(() => setElement('info').innerText = "已刪除")
};

// 篩選JSON物件
var filterJson = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(json => setElement('info').innerText = JSON.stringify(json))
};

// 使用一級嵌套路由篩選JSON物件
var nestJson = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => response.json())
        .then(json => setElement('info').innerText = JSON.stringify(json))
};