import React from "react";
import {Fragment} from 'react';
import classes from "./Header.module.css";
import mealsImage from "../../../assets/mealsIMG.jpeg";
import CartButton from "./HeaderCartButton/HeaderCartButton";

const Header = (props) =>
{
    return (
        <Fragment>
            <header className = {classes.header}>
                <h1>ReactMeals</h1>
                <CartButton onClick={props.onShowCart}>Cart</CartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table of food"/>
            </div>
        </Fragment>
    );
}

export default Header;