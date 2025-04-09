import "./App.css";
import { useState } from "react";
function App() {
  // PART 2
  // This is an array of strings that represent orders
  var orders = ["pancakes", "coffee", "coffee"]


  var ordersHTMLArray = [];

  for(let i = 0; i < orders.length; i++) {
    var order = orders[i];

    if(order === "pancakes") {

      var pancakesOrderHTMLElement = <div className="order">
                                      <img src="./pancakes.png" alt="pancake" />
                                    </div>
      ordersHTMLArray.push(pancakesOrderHTMLElement);

    } else if(order === "coffee") {

      var coffeeOrderHTMLElement = <div className="order">
                                     <img src="./coffee.png" alt="coffee" />
                                  </div>
      ordersHTMLArray.push(coffeeOrderHTMLElement);
      
    }
  }

  return (
    <div className="App">
      <div id="ordersSection">
        <h1>Orders</h1>
        <div id="orders">
          {/* PART 1 */}
          {/* Embed the array of order elements here */}

        </div>
      </div>

      <div id="orderCreation">
        <h1>Menu</h1>
        <div id="foodoptions">
          <div className="foodoption">
            <img src="./pancakes.png" alt="pancake" />
            <h2>Pancakes</h2>
            <button
              onClick={function () {
                {/* PART 3 & PART 4 */}
                //Create a new order for pancakes

              }}
            >
              Create Order
            </button>
          </div>

          <div className="foodoption">
            <img src="./coffee.png" alt="coffee" />
            <h2>Coffee</h2>
            <button
              onClick={function () {
                {/* PART 3 & PART 4 */}
                //Create a new order for coffee

              }}
            >
              Create Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
