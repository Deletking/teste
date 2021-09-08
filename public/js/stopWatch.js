function StopWatch() {
  const productSold = document.querySelector("#productSold");
  const satisfiedCustomers = document.querySelector("#satisfiedCustomers");
  const infoProduct = document.querySelector("#infoProduct");

  SetCounter(productSold, 1558);
  SetCounter(satisfiedCustomers, 860);
  SetCounter(infoProduct, 354);
}

function SetCounter(element, value, counter = 0) {
  const timer = setInterval(() => {
    if (counter === value) {
      clearInterval(timer);
    }
    element.textContent = `+ ${counter}`;
    counter++;
  }, 0);
}

StopWatch();
