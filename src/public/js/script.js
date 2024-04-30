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
  const calWeight = calculateTotalWeight(data.weight);
  const tWeight = calWeight / 40;
  const mon = Math.trunc(tWeight, 0);
  const kg = ((tWeight - mon) * 40).toFixed(0);
  const totalPrice = (tWeight * Number(data.unitPrice)).toFixed(2);
  totalWeightText.innerText = `মোট ওজন: ${mon} মন ${kg} কেজি`;
  totalPriceText.innerText = `মোট মূল্য: ${totalPrice} টাকা`;

  tableBody.appendChild(generateResult(data.weight));
  console.log(tableBody);
  totalWgt.value = tWeight * 40;
  totalBags.value = tableBody.rows.length;
  clearWeight.value = "";
});

// clear.addEventListener("click", (e) => {
//   e.preventDefault();
//   form.reset();
//   tableBody.innerHTML = "";
//   totalWeightText.innerText = `মোট ওজন: 0 মন 0 কেজি`;
//   totalPriceText.innerText = `মোট মূল্য: 0 টাকা`;
// });

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
  totalWeight += Number(weight);
  return totalWeight;
};

let count = 1;
const serialNum = () => {
  return count++;
};
const convertToMonAndKg = (data) => {
  data = Number(data);
  const weight = data / 40;
  const mon = Math.trunc(weight, 0);
  const kg = ((weight - mon) * 40).toFixed(0);
  return `${mon} মন ${kg} কেজি`;
};

module.exports = { convertToMonAndKg };
