Template String trong es6
Binh thuong de ghep chuoi trong js thi ta dung + ten bien +
Nhung trong template string trong es6 thi ta su dung {ten bien} va dau nhay don bao chuoi duoc thay the boi dau cap dau ``
vi du
elem.innerHTML = '<div>Course name: <strong style="color: red">' + name + '</strong>, price: <strong style="red">price</strong>' + price + 'USD</div>';
duoc thay the boi
elem.innerHTML = `<div>Course name: <strong style="color: red">' { name } + '</strong>, price: <strong style="red">price</strong>' { price } 'USD</div>`;

Khi su dung template string nen su dung string tren nhieu dong va bao boc boi ``