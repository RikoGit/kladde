import React, { useState } from 'react';

const Joke = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [destination, setDestination] = useState('');

    const f = {
        firstName: setFirstName,
        lastName: setLastName,
        age: setAge,
        gender: setGender,
        destination: setDestination,
    };

    const test = (a, b) => {
        f[a](b);
    };

    const handleChange = event => {
        const { name, value } = event.target;

        test(name, value);
        // setFirstName(value);
    };

    return (
        <main>
            <form>
                <input
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={firstName}
                />
                <br />
                <input
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={lastName}
                />
                <br />
                <input name="age" placeholder="Age" onChange={handleChange} value={age} />
                <br />
                <label>
                    <input
                        name="gender"
                        type="radio"
                        value="male"
                        onChange={handleChange}
                        checked={gender === 'male'}
                    />
                    male
                </label>
                <label>
                    <input
                        name="gender"
                        type="radio"
                        value="female"
                        onChange={handleChange}
                        checked={gender === 'female'}
                    />
                    female
                </label>
                <br />

                {/* Здесь создайте поле со списком для выбора пункта назначения */}
                <br />

                {/* Здесь создайте флажки для указания диетологических ограничений */}
                <br />

                <button type="submit">Submit</button>
            </form>
            <hr />
            <h2>
                <font color="#3AC1EF">Entered information:</font>
            </h2>
            <p>
                Your name: {firstName} {lastName}
            </p>
            <p>Your age: {age}</p>
            <p>Your gender: {gender}</p>
            <p>Your destination: {destination}</p>
            <p>
                Your dietary restrictions:
                {/* Список диетологических ограничений */}
            </p>
        </main>
    );
};

export default Joke;
