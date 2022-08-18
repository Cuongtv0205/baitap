let productList = ['Iphone 11','Iphone 12','Iphone 13','Iphone 14'];
//ten ham: showAllProduct
// ds tham so: khong co
// du lieu tra ve: ko co
// chuc nang: lap danh sach san pham,dien vao trong the có id la:products
function showAllProduct(){
let content="";
for (let i = 0;i< productList.length;i++){
    content += '<tr>\n' +
        '        <td>'+productList[i]+'</td>\n' +
        '        <td><button onclick="editProduct('+i+')">Sửa</button></td>\n' +
        '        <td><button onclick="deleteProduct('+i+')">Xóa</button></td>\n' +
        '    </tr>'
}
document.getElementById('products').innerHTML = content;
document.getElementById('sumOfProduct').innerHTML = productList.length + " Sản phẩm ";
}
showAllProduct();
//ten ham: creatNewProduct
// ds tham so: khong co
// du lieu tra ve: ko co
// chuc nang:
//Lấy dữ liệu
//Push vào mảng
// Hiển thị lại dữ liệu
function creatNewProduct(){
    // let newP = prompt('Mời bạn nhập tên sản phẩm mới:');
    let newP = document.getElementById('newP').value;
    productList.push(newP);
    showAllProduct();
    document.getElementById('newP').value = "";
}
//ten ham: deleteProduct
// ds tham so: tryền index
// du lieu tra ve: ko co
// chuc nang: xóa sản phẩm theo index
// hiển thị lại danh sách
function deleteProduct(index){
productList.splice(index,1);
showAllProduct();
}
//ten ham: editProduct
// ds tham so: tryền index
// du lieu tra ve: ko co
// chuc nang: sửa sản phẩm theo index
//cho người dùng nhập vào sản phẩm mới
// gán lại sản mới cho sp cũ
// hiển thị lại danh sách
function editProduct(index){
    let newValue = prompt('Mời bạn nhập vào tên sản phẩm mới',productList[index]);
    productList[index]= newValue;
    showAllProduct();
}