/**
 * Created by TruongDX on 3/9/2018.
 * var la bien toan cuc
 * let la bien cuc bo
 */
function drawShape() {
    var m_content = document.getElementById("my-content");
        m_content.innerHTML = ""; // chu y la dung m_content = "" rôi hoi lỗi sinh ra ở đâu
    for(let i = 1; i <= 10; i++) { // cho nay hoc hiem: su khac biet cua let va var khi alert(i), dung let thi alert dung con var thi sai
        var ElmP = document.createElement("p");
            ElmP.innerHTML = i;
            ElmP.onclick = function () {
                alert(i);
            }
        m_content.appendChild(ElmP);
    }
}

function clearShape() {
    var m_content = document.getElementById("my-content");
        m_content.innerHTML = "";
}