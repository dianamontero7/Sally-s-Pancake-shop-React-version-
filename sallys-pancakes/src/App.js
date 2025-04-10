import "./App.css";
import { useState } from "react";
function App() {
  // PART 2
  // This is an array of strings that represent orders
  // var orders = ["pancakes", "coffee", "coffee", "pancakes"]

  const [orders, setOrders] = useState (
    [
      "pancakes",
      "coffee",
      "coffee",
      "pancakes"
    ]
  );

  function createOrder (order){
    const newOrders = [...orders, order]
    setOrders(newOrders);
    console.log(newOrders);
  }

  function removeOrder(indexToRemove) {
    const newOrders = orders.filter((_, index) => index !== indexToRemove);
    setOrders(newOrders);
    console.log(newOrders);
  }



  var ordersHTMLArray = [];

  for(let i = 0; i < orders.length; i++) {
    var order = orders[i];

    if(order === "pancakes") {

      var pancakesOrderHTMLElement = <div className="order">
                                      <img src="./pancakes.png" alt="pancake" />
                                      <button onClick={()=>
                                        removeOrder(i)
                                      }>Ready</button>
                                    </div>
      ordersHTMLArray.push(pancakesOrderHTMLElement);

    } else if(order === "coffee") {

      var coffeeOrderHTMLElement = <div className="order">
                                     <img src="./coffee.png" alt="coffee" />
                                     <button onClick={()=> 
                                      removeOrder(i)
                                     }>Ready</button>
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
          {ordersHTMLArray}

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
                  createOrder("pancakes")
               
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
                  createOrder("coffee")
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
