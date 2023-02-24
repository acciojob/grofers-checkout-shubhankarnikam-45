const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
getSumBtn.setAttribute("id", "btn")

//creating the last row to find the total.
let lr = document.createElement("tr");
let table = document.querySelector("table");
table.append(lr);
//adding first cell
let td1 = document.createElement("td");
lr.append(td1);
td1.append("Total Price")
//adding second cell.
let td2 = document.createElement("td");
lr.append(td2);

//total price printer
td2.setAttribute("id", "ans");


const getSum = () => {
    //Add your code here
    let total = document.querySelector("#ans");


    let prices = document.querySelectorAll(".price");
    let totalSum = 0;
    for (let i = 0; i < prices.length; i++) {
        let num = prices[i].innerHTML;
        totalSum += Number(num);
    }
    //code
    //adding total sum in the last cell which we add dynamically.

    total.innerHTML = totalSum;

};

getSumBtn.addEventListener("click", getSum);

