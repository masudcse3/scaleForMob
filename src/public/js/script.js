/** @format */

const form = document.querySelector("#formCustomer");
const totalWeightText = document.querySelector("#totalWeight");
const totalWgt = document.querySelector("#totalWgt");
const totalBags = document.querySelector("#totalBags");
const totalPriceText = document.querySelector("#totalPrice");
const tableBody = document.querySelector("#tbody");
const clearWeight = document.querySelector("#weight");

const add = document.querySelector("#add");
add.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const tWeight = calculateTotalWeight(data.weight);
  const mon = Math.trunc(tWeight, 0);
  const kg = (Number(tWeight - mon) * 40).toFixed(0);
  const totalPrice = (tWeight * Number(data.unitPrice)).toFixed(2);
  totalWeightText.innerText = `মোট ওজন: ${mon} মন ${kg} কেজি`;
  totalPriceText.innerText = `মোট মূল্য: ${totalPrice} টাকা`;
  tableBody.appendChild(generateResult(data.weight));
  totalWgt.value = (tWeight * 40).toFixed(2);
  totalBags.value = tableBody.rows.length;
  clearWeight.value = "";
});

const generateResult = (data) => {
  const tr = document.createElement("tr");
  const serial = document.createElement("td");
  const weight = document.createElement("td");
  serial.textContent = serialNum();
  weight.textContent = convertToMonAndKg(data);

  tr.appendChild(serial);
  tr.appendChild(weight);

  return tr;
};

let totalWeight = 0;
const calculateTotalWeight = (weight) => {
  const mon = weight.split(".")[0] || 0;
  const kg = weight.length > 1 ? weight.split(".")[1] : 0;
  return (totalWeight += Number(mon) + Number(kg) / 40);
};

let count = 1;
const serialNum = () => {
  return count++;
};
const convertToMonAndKg = (data) => {
  const mon = data.split(".")[0] || 0;
  const kg = data.length > 1 ? data.split(".")[1] : 0;
  return `${mon} মন ${kg} কেজি`;
};
