let fee = 500;
let selectedMonths = 0;

function selectMonth(btn){
    btn.classList.toggle("active");

    if(btn.classList.contains("active")){
        selectedMonths++;
    } else {
        selectedMonths--;
    }

    document.getElementById("count").innerText = selectedMonths;
    updateTotal();
}

function updateTotal(){
    let total = fee * selectedMonths;
    document.getElementById("total").innerText = total;
    document.querySelector(".paybtn").innerText = "Pay ₹" + total;
}

function selectPay(el){
    let all = document.querySelectorAll(".pay");
    all.forEach(e => e.classList.remove("active"));
    el.classList.add("active");
}

function payNow(){
    let name = document.getElementById("name").value;

    if(name == "" || selectedMonths == 0){
        alert("Please fill all details!");
        return;
    }

    alert("Payment Successful 🎉");
}