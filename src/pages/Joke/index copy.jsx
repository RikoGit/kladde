import React, { useState } from 'react';

const Joke = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [text, setText] = useState('');
    const [isFriendly, setIsFriendly] = useState(true);
    const [gender, setGender] = useState('');
    const [favColor, setFavColor] = useState('blue');

    const handleChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'firstName': {
                setFirstName(value);
                break;
            }
            case 'lastName': {
                setLastName(value);
                break;
            }
            case 'text': {
                setText(value);
                break;
            }
            case 'isFriendly': {
                setIsFriendly(!isFriendly);
                break;
            }
            case 'gender': {
                setGender(value);
                break;
            }
            case 'favColor': {
                setFavColor(value);
                break;
            }
            default:
        }
    };

    return (
        <form>
            <input
                type="text"
                value={firstName}
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                value={lastName}
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />
            <div>
                <textarea name="text" onChange={handleChange} value={text} />
            </div>
            <label>
                <input
                    name="isFriendly"
                    type="checkbox"
                    checked={isFriendly}
                    onChange={handleChange}
                />
                isFrendly?
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleChange}
                />{' '}
                Male
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleChange}
                />{' '}
                Female
            </label>
            <br />
            <label>Favorite Color:</label>
            <select value={favColor} onChange={handleChange} name="favColor">
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
            </select>

            <h1>
                {firstName} {lastName}
            </h1>
            <p>{text}</p>
            <p>isFriendly? {isFriendly ? 'Yes' : 'No'}</p>
            <p>Gender {gender}</p>
            <p>Favorite Color: {favColor}</p>
        </form>
    );
};

export default Joke;
