import React, { useState } from 'react';

const Joke = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        destination: '',
        isOverweight: false,
        isAlcohol: false,
        isSmoking: false,
    });

    const handleChange = event => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setForm({ ...form, [name]: checked });
        } else setForm({ ...form, [name]: value });
    };

    /*
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [destination, setDestination] = useState('');
    const [restrictions, setRestrictions] = useState({
        isOverweight: false,
        isAlcohol: false,
        isSmoking: false,
    });

    const f = {
        firstName: setFirstName,
        lastName: setLastName,
        age: setAge,
        gender: setGender,
        destination: setDestination,
        restrictions: setRestrictions,
    };

    const test = (a, b) => {
        f[a](b);
    };

    const handleChange = event => {
        const { name, value, type, checked } = event.target;

        test(name, value);
    };
    */
    /*
    const [form, setForm] = useState({ firstName: '', lastName: '' });

    const handleChange = event => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    };
    */

    return (
        <main>
            <form>
                <input
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={form.firstName}
                />
                <br />
                <input
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={form.lastName}
                />
                <br />
                <input name="age" placeholder="Age" onChange={handleChange} value={form.age} />
                <br />
                <label>
                    <input
                        name="gender"
                        type="radio"
                        value="male"
                        onChange={handleChange}
                        checked={form.gender === 'male'}
                    />
                    male
                </label>
                <label>
                    <input
                        name="gender"
                        type="radio"
                        value="female"
                        onChange={handleChange}
                        checked={form.gender === 'female'}
                    />
                    female
                </label>
                <br />
                <select name="destination" onChange={handleChange} value={form.destination}>
                    <option value="">-- Please Choose a destination --</option>
                    <option value="town1">Town1</option>
                    <option value="town2">Town2</option>
                    <option value="town3">Town3</option>
                </select>
                <br />
                <label>
                    <input
                        name="isOverweight"
                        type="checkbox"
                        checked={form.isOverweight}
                        onChange={handleChange}
                    />
                    overweight
                </label>
                <label>
                    <input
                        name="isAlcohol"
                        type="checkbox"
                        checked={form.isAlcohol}
                        onChange={handleChange}
                    />
                    alcohol
                </label>
                <label>
                    <input
                        name="isSmoking"
                        type="checkbox"
                        checked={form.isSmoking}
                        onChange={handleChange}
                    />
                    smoking
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
            <hr />
            <h2>
                <font color="#3AC1EF">Entered information:</font>
            </h2>
            {form.firstName || form.lastName ? (
                <p>
                    Your name: {form.firstName} {form.lastName}
                </p>
            ) : null}
            {form.age ? <p>Your age: {form.age}</p> : null}
            {form.gender ? <p>Your gender: {form.gender}</p> : null}
            {form.destination ? <p>Your destination: {form.destination}</p> : null}
            <p>
                Your dietary restrictions: <br />
                overweight: {form.isOverweight ? 'Yes' : 'No'} <br />
                alcohol: {form.isAlcohol ? 'Yes' : 'No'} <br />
                smoking: {form.isSmoking ? 'Yes' : 'No'}
            </p>
        </main>
    );
};

export default Joke;
