import React, { useState } from 'react';

const Subscription = {
  FREE: 'free',
  MEDIUM: 'medium',
  PRO: 'pro',
};

export default function FormsPractice() {
  const [value, setValue] = useState('');
  // ! Обязательно передать эти 2 свойства в value input
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [subscription, setSubscription] = useState('');
  const [age, setAge] = useState('');

  const onTextInputChange = (e) => {
    setValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  // ! Один обработчик для 2 инпутов

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(`${name}: ${value}`);

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onAgreedChange = (e) => {
    const checked = e.target.checked;

    setAgreed(checked);
  };

  const handleSubscriptionChange = (e) => {
    const value = e.target.value;
    //! Нужен namе, чтобы сгрупировать елементы и хендлер был универсальным
    const name = e.target.name;

    if (name === 'free') {
      setSubscription(value);
    } else if (name === 'medium') {
      setSubscription(value);
    } else if (name === 'pro') {
      setSubscription(value);
    }
  };

  const handleAgeChange = (e) => {
    const age = e.target.value;
    setAge(age);
  };

  // ! Работа с формами, селектами !!!

  return (
    <div>
      <label htmlFor="">Input</label>
      <input value={value} onChange={onTextInputChange} type="text" />

      <hr />

      <form onSubmit={onFormSubmit}>
        <label htmlFor="">
          email
          <input type="email" name="email" value={email} onChange={onInputChange} />
        </label>

        <label htmlFor="">
          password
          <input type="password" name="password" value={password} onChange={onInputChange} />
        </label>

        <br />
        <label htmlFor="">
          Do you agree with terms of rules ?
          <input type="checkbox" checked={agreed} onChange={onAgreedChange} />
        </label>

        <div role="group">
          <label htmlFor="">
            Free
            <input
              type="radio"
              value={Subscription.FREE}
              onChange={handleSubscriptionChange}
              checked={Subscription.FREE === subscription}
              name="free"
            />
          </label>

          <label htmlFor="">
            Medium
            <input
              type="radio"
              value={Subscription.MEDIUM}
              onChange={handleSubscriptionChange}
              checked={Subscription.MEDIUM === subscription}
              name="medium"
            />
          </label>

          <label htmlFor="">
            Pro
            <input
              type="radio"
              value={Subscription.PRO}
              onChange={handleSubscriptionChange}
              checked={Subscription.PRO === subscription}
              name="pro"
            />
          </label>
        </div>

        <br />

        <label>
          Choose your age
          <select name="age" value={age} onChange={handleAgeChange}>
            <option disabled value="">
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-30">26-30</option>
            <option value="30-45">30-45</option>
          </select>
        </label>

        <button disabled={!agreed} type="submit">
          Sign up as {email}
        </button>
      </form>
    </div>
  );
}
