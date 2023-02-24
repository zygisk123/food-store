import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import {useCallback, useEffect, useState} from 'react';

function App() {
  const [cartIsShown, setCartisShown] = useState(false)
  // const [meals, setMeals] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchMealsHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch('https://foodapp-2c7e1-default-rtdb.firebaseio.com/meals.json');
  //     if (!response.ok) {
  //       throw new Error('Something went wrong');
  //     }

  //     const data = await response.json();

  //     const loadedMeals = [];

  //     for (const key in data)
  //     {
  //       loadedMeals.push({
  //         id: key,
  //         name: data[key].name,
  //         description: data[key].description,
  //         price: data[key].price
  //       });
  //     }

  //     setMeals(loadedMeals);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchMealsHandler();
  // }, [fetchMealsHandler]);

  const showCartHandler = () => {
    setCartisShown(true);
  }

  const hideCartHandler = () => {
    setCartisShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

//https://foodapp-2c7e1-default-rtdb.firebaseio.com/