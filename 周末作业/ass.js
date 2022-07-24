/**获取ul标签 */
var ul1 = document.getElementsByTagName("ul")[0];
/**定义新增数组 */
var todoArray1 = [];
/**定义数组自增ID */
var nextId1 = 1;
function addTodoList(event) {
    if (!event || event.keyCode === 13) {
        // 首先获取input框的输入内容
        //@ts-ignore
        var inputValue = document.getElementsByClassName("input-todoList")[0].value;
        if (inputValue) {
            addTodoItem(inputValue);
            //@ts-ignore
            document.getElementsByClassName("input-todoList")[0].value = '';
        }
    }
}
function changeCheckboxDate(ele) {
    todoArray1.forEach(function (item) {
        if (item.id == ele.id) {
            item.checked = !item.checked;
        }
    });
    renderHtml(todoArray1, ele.id);
}
/**
 * 新增的方法
 */
function addTodoItem(value) {
    /**获取新增的内容 */
    var inputValue = value;
    if (todoArray1.length > 0) {
        nextId1++;
    }
    var addItemValue = {
        checked: false,
        id: nextId1,
        value: inputValue
    };
    todoArray1.push(addItemValue);
    // 调用渲染方法
    renderHtml(todoArray1, nextId1);
}
/**
 * 删除
 */
function deleteDate(id) {
    var result = todoArray1.filter(function (item) { return item.id !== id; });
    // 调用渲染方法
    renderHtml(result, id);
    todoArray1 = result;
}
/**
 * 勾选
 * 修改原数据,因为本来数据就变化了,不需要在进行保留
 */
function inputChecked(id) {
    todoArray1.forEach(function (item) {
        if (item.id === id) {
            item.checked = !item.checked;
        }
    });
    // 调用渲染方法
    renderHtml(todoArray1, id);
}
/**
 * 渲染html方法
 */
function renderHtml(array, nextIds) {
    ul1.innerHTML = '';
    array.forEach(function (item) {
        // 创建li标签
        var li = document.createElement("li");
        li.className = item.id == nextIds && item.checked ? ' completed ' : item.checked ? "need-completed" : '';
        li.id = "".concat(item.id);
        li.innerHTML = " \n        <div class=\"li-style-div\">\n            <input type=\"checkbox\" class=\"checkbox\" id=".concat(item.id, " ").concat(item.checked ? "checked" : null, " onchange=\"changeCheckboxDate(this)\"></input>\n            <p class=\"li-style-div-content\">").concat(item.value, "</p>\n        </div>\n        <button class= ").concat(item.id == nextIds && item.checked ? ' completed ' : item.checked ? "need-completed button-close " : "button-close", "  id=").concat(item.id, "  onclick=deleteDate(").concat(item.id, ")>X</button>\n      ");
        ul1.append(li);
    });
}
