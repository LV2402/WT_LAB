var stock={
Laptop:10,
Mobile:15,
Headphones:20
};

function addItem(product,price){

if(stock[product]<=0){
alert("Out of stock");
return;
}

stock[product]--;
document.getElementById(product+"-stock").innerText=stock[product];

updateCart(product,"add",price);
}


function removeItem(product,price){
updateCart(product,"remove",price);
}


function updateCart(product,action,price){

fetch("CartServlet",{
method:"POST",
headers:{
"Content-Type":"application/x-www-form-urlencoded"
},
body:`productId=${product}&action=${action}&price=${price}`
})
.then(res=>res.json())
.then(data=>renderCart(data));

}


function loadCart(){

fetch("CartServlet")
.then(res=>res.json())
.then(data=>renderCart(data));

}


function renderCart(data){

let cartDiv=document.getElementById("cartSection");

if(!cartDiv) return;

let html="<table>";

html+="<tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th><th>Action</th></tr>";

let total=0;

data.items.forEach(item=>{

let t=item.qty*item.price;

total+=t;

html+=`
<tr>
<td>${item.name}</td>
<td>Rs.${item.price}</td>
<td>${item.qty}</td>
<td>Rs.${t}</td>
<td>
<button onclick="addItem('${item.name}',${item.price})">+</button>
<button onclick="removeItem('${item.name}',${item.price})">-</button>
</td>
</tr>
`;

});

html+=`<tr><td colspan="3"><b>Total</b></td><td colspan="2">Rs.${total}</td></tr>`;

html+="</table>";

cartDiv.innerHTML=html;

}