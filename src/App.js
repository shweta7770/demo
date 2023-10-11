
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setfirstNameError] = useState({})
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState({})
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState({})
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState({});

  const validateMobile = (mobileNumber) => {
    //  const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const regex = /^\d{10}$/
    if (mobileNumber.match(regex)) {
      setMobileError({ msg: "done" })
    }
    else {
      setMobileError({ msg: "invalid mobile num" })
    }
  }

  const validateEmail = (email) => {
    // const isValidEmail  =/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (email.length <= 0) {
      setEmailError({ msg: "Email is required." })
    }
    if (email.match(isValidEmail)) {
      setEmailError({ msg: "" })
    } else {
      setEmailError({ msg: " Please enter valid mail" })
    }
  }

  function handlePassword(password) {
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (password.length <= 0) {
      setPasswordError({ msg: "Please enter Password" });
    } else if (!password.match(lowerCase)) {
      setPasswordError({ msg: "Password should contains lowercase letters!" });
    } else if (!password.match(upperCase)) {
      setPasswordError({ msg: "Password should contain uppercase letters!" });
    } else if (!password.match(numbers)) {
      setPasswordError({ msg: "Password should contains numbers also!" });
    } else if (password.length < 4) {
      setPasswordError({ msg: "Password length should be more than 4." });
    } else {
      setPasswordError({ msg: "done" });
    }
  }

  const formValidation = () => {
    if (firstName.length <= 0) {
      setfirstNameError({ msg: "First name is required." })
    }
    else {
      setfirstNameError({ msg: "done" })
    }
    validateEmail(email)
    handlePassword(password)
    validateMobile(mobileNumber)
    if (firstNameError.msg == "done" && mobileError.msg == "done" &&
      emailError.msg == "done" && passwordError.msg == "done") {
      alert("form submited sucessfully")
    }
  }

  return (
    <div className="App">
      <h1>Registration Form (Validation)</h1>
      <div>
        <form >
          {/* row */}
          <div className="row">
            {/* column 1 */}
            <div className="column">
              <input type="text" placeholder="enter first name"
                onChange={(e) => { setFirstName(e.target.value) }} value={firstName} />
              <label style={{ fontWeight: 'bold', color: 'red' }}>{firstNameError.msg}</label>
              <input type="text" placeholder="enter last name"
                onChange={(e) => { setLastName(e.target.value) }} value={lastName} />
              <input type="text" placeholder="enter mobile number"
                onChange={(e) => { setMobileNumber(e.target.value) }} value={mobileNumber} />
              <label style={{ color: 'red' }}>{mobileError.msg}</label>
            </div>
            {/* column 1 */}
            <div className="column">
              <input type="number" placeholder="enter age"
                onChange={(e) => { setAge(e.target.value) }} value={age} />
              <input type="email" placeholder="enter email"
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError({ msg: "" })
                  
                }} value={email} />
              <label style={{ fontWeight: 'bold', color: 'red' }}>{emailError.msg}</label>
              <input type="password" placeholder="enter password"
                onChange={(e) => { setPassword(e.target.value) }} value={password} />
              <label style={{ fontWeight: 'bold', color: 'red' }}>{passwordError.msg}</label>
            </div>
          </div>
          {/* button */}
          <input type="button" value="Submit" className="button" onClick={(e) => {
            e.preventDefault()
            formValidation()
          }} />
        </form>
      </div>
    </div>
  );
}

export default App;
