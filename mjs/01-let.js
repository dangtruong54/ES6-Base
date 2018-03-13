/**
 * Created by TruongDX on 3/9/2018.
 */
let elem = document.getElementById("my-content");
elem.style.color = "#234567";

/*
 let name = "Typescript";
 let price = "10";

 //elem.innerHTML = '<div>Course name: <strong style="color: red">' + name + '</strong>, price: <strong style="red">price</strong>' + price + 'USD</div>';
 elem.innerHTML = `<div>Course name: <strong style="color: red"> ${ name } </strong>, price: <strong style="red">price</strong> ${ price } USD</div>`;
 */

let todo = {
    id: 1234,
    name: "play football",
    status: true
}

elem.innerHTML = `<div id="todo-id-${todo.id}">
                    <i class="if(${todo.status}) hidden glyphicon glyphicon-ok"></i>
                    <span class="name">${todo.name}</span>
                </div>`;

// cach viet thu 2 tot hon
// <i class="$(todo.status == true ? "hidden" : "") glyphicon glyphicon-ok"></i>