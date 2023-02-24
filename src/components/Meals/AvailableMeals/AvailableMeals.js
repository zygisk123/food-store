import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import { useCallback, useEffect, useState } from "react";
const AvailableMeals = () =>
{
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async() => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://foodapp-2c7e1-default-rtdb.firebaseio.com/meals.json'); // fetch returns promise then is trigered when fetch gets response
      const data = await response.json(); // returns object

      const loadedMeals = []; 
      for (const key in data) // key is an id of individual objects that we are fetching
      {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }

      setMeals(loadedMeals);

    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []); // fetch data when page is loaded

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);
    const mealsList = meals.map(meal =>  (
        <MealItem 
            key={meal.id} 
            id={meal.id}    
            name={meal.name} 
            description={meal.description} 
            price={meal.price} />));

    let content = <p>Found no meals.</p>;
    if (meals.length > 0) {
      content = <Card><ul>{mealsList}</ul></Card>;
    }
  
    if (error) {
      content = <p>{error}</p>;
    }
  
    if (isLoading) {
      content = <Card><p>Loading...</p></Card>;
    }
    return(
        <section className={classes.meals}>
          {content}
        </section>
    );
}

export default AvailableMeals;
