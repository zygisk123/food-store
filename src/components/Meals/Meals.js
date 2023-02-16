import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";
import { Fragment } from "react";
const Meals = () =>
{
    return(    
    <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>);
}

export default Meals;