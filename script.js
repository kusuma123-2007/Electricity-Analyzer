let appliances = [];

function addItem(){

    const name = document.getElementById("name").value;
    const watt = parseFloat(document.getElementById("watt").value);
    const hours = parseFloat(document.getElementById("hours").value);

    if(!name || !watt || !hours){
        alert("Fill all fields");
        return;
    }

    appliances.push({name,watt,hours});
    display();
    calculate();

    document.getElementById("name").value="";
    document.getElementById("watt").value="";
    document.getElementById("hours").value="";
}

function display(){
    const list = document.getElementById("list");
    list.innerHTML="";

    appliances.forEach(a=>{
        const li = document.createElement("li");
        li.innerText = `${a.name} — ${a.watt}W, ${a.hours}h/day`;
        list.appendChild(li);
    });
}

function calculate(){

    let totalUnits = 0;

    appliances.forEach(a=>{
        totalUnits += (a.watt * a.hours * 30)/1000;
    });

    const rate = 6; // ₹ per unit
    const bill = totalUnits * rate;

    document.getElementById("units").innerText =
        totalUnits.toFixed(2) + " Units";

    document.getElementById("bill").innerText =
        "₹" + bill.toFixed(2);
}