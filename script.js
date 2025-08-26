function getElement(id){
    const element = document.getElementById(id);
    return element;
}

document.getElementById("card-box").addEventListener("click", function (e) {
    if(e.target.className.includes("card-btn")){
        const card = e.target.parentNode.parentNode ;
        const productName = card.children[1].children[1].innerText ;
        const productPrice = card.children[1].children[2].children[0].innerText ;
        const productImg = card.children[0].children[0].src;
        
        const totalPrice = getElement("total-prc").innerText;
        const currentTotal = Number(productPrice) + Number(totalPrice);
        getElement("total-prc").innerText = currentTotal;

        const quantity = getElement("quantity").innerText;
        const currentQuantity = Number(quantity);
        getElement("quantity").innerText = currentQuantity + 1;

        const cardParent = getElement("add-to-card");
        const newChild = document.createElement("div");
        newChild.innerHTML = `
            <div class="bg-[#1111110d] rounded-lg mb-7 p-5 flex justify-between items-center">
                <img src="${productImg}" alt="">
                <div>
                    <h2 class=" font-semibold text-xl mb-5">${productName}</h2>
                    <p class="text-xl opacity-[50%]"><span>${productPrice}</span> TK</p>
                </div>
            </div>
        `;

        cardParent.appendChild(newChild);

        alert("Add to card");
    } 
});


getElement("remove-btn").addEventListener("click", function (e) {
    const card = e.target.parentNode.children[0];
    const lastElement = card.lastElementChild;

    const totalPrice = getElement("total-prc").innerText;
    const lastProductPrice = card.lastElementChild.children[0].children[1].children[1].children[0].innerText;
    console.log(lastProductPrice)
    getElement("total-prc").innerText = Number(totalPrice) - Number(lastProductPrice);

    const quantity = getElement("quantity").innerText;
    const currentQuantity = Number(quantity);
    getElement("quantity").innerText = currentQuantity - 1;

    card.removeChild(lastElement);
    
     alert("Remove from card");
});


getElement("buyBtn").addEventListener("click", function(){
    alert("Order placed successfully")
});