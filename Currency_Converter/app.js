// ✅ Base URL for the Currency API
const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

// ✅ Select all dropdowns and form elements
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// ✅ Loop through each dropdown and add currency options
for (let select of dropdowns) {
  for (let currCode in countryList) {
    // Create a new <option> tag for each currency code
    let newOption = document.createElement("option");
    newOption.innerText = currCode; // What user sees
    newOption.value = currCode;     // Actual value used in API

    // Set default selections
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    // Add this option to the dropdown
    select.append(newOption);
  }

  // ✅ Change flag image when currency is selected
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// ✅ Function to update the exchange rate when user clicks the button
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input"); // Get user input
  let amtVal = amount.value;

  // ✅ If user leaves amount empty or enters value < 1, default to 1
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  // ✅ Get selected currency codes in lowercase (API format)
  const from = fromCurr.value.toLowerCase(); // e.g., "usd"
  const to = toCurr.value.toLowerCase();     // e.g., "inr"

  // ✅ Build API URL like: https://.../usd.json
  const URL = `${BASE_URL}/${from}.json`;

  try {
    // ✅ Fetch data from the API
    const response = await fetch(URL);
    const data = await response.json();

    // ✅ Get exchange rate for selected "to" currency
    const rate = data[from][to];

    // ✅ Calculate the final converted amount
    const finalAmount = amtVal * rate;

    // ✅ Show result on screen
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
  } catch (error) {
    // ✅ If fetch fails or JSON breaks
    msg.innerText = "Error fetching exchange rate!";
    console.error("Fetch Error:", error);
  }
};

// ✅ Function to update country flag based on selected currency
const updateFlag = (element) => {
  let currCode = element.value;              // Currency code (e.g., "USD")
  let countryCode = countryList[currCode];   // Country code for flag (e.g., "US")
  let img = element.parentElement.querySelector("img"); // Get <img> tag
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`; // Update flag URL
};

// ✅ Add click event listener to the "Get Exchange Rate" button
btn.addEventListener("click", (evt) => {
  evt.preventDefault();    // Prevent page from reloading on button click
  updateExchangeRate();    // Fetch and show exchange rate
});

// ✅ Automatically get exchange rate when page loads
window.addEventListener("load", () => {
  updateExchangeRate();    // Show conversion for default USD to INR
});

