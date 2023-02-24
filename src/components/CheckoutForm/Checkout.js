import classes from './Checkout.module.css';
import useForm from '../../hooks/use-form';

const Checkout = (props) => {
  const {value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameReset} = useForm(value => value.trim() !== '');

  const {value: enteredStreet,
        isValid: streetIsValid,
        hasError: streetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        reset: streetReset} = useForm(value => value.trim() !== '');
        
  const {value: enteredPostal,
        isValid: postalIsValid,
        hasError: postalHasError,
        valueChangeHandler: postalChangeHandler,
        inputBlurHandler: postalBlurHandler,
        reset: postalReset} = useForm(value => value.trim() !== '');

  const {value: enteredCity,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: cityReset} = useForm(value => value.trim() !== '');

  let formIsValid = false;

  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid)
  {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!formIsValid)
    {
      return;
    }

    props.onSubmitHandler({
      name: enteredName,
      street: enteredCity,
      postalCode: enteredPostal,
      city: enteredCity
    });
    
    nameReset();
    streetReset();
    postalReset();
    cityReset();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${nameHasError && classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
      </div>
      <div className={`${classes.control} ${streetHasError && classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' onChange={streetChangeHandler} onBlur={streetBlurHandler} value={enteredStreet}/>
      </div>
      <div className={`${classes.control} ${postalHasError && classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' onChange={postalChangeHandler} onBlur={postalBlurHandler} value={enteredPostal}/>
      </div>
      <div className={`${classes.control} ${cityHasError && classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' onChange={cityChangeHandler} onBlur={cityBlurHandler} value={enteredCity}/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;