// ## **Part 3**

// Create a component called *Person*. Inside of this component, render a *p* tag which displays “Learn some information about this person”. Each person should have name and age properties.

// If the person is over 18 years old, display an additional *h3* that says “please go vote!”. Otherwise, display an *h3* that says “you must be 18”. If the person’s name is longer than 8 characters, only display the first six characters of their name.

// Add a property called hobbies to your *Person* component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an *li*.

// Add an *App* component that renders at least three copies of the *Person* component on the page.



function Person({ age, hobbies, name }) {
    const voteText = age >= 18
        ? "please go vote!"
        : "you must be 18 t0 vote!";

    const hob = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
            <li>Name: {name.slice(0,8)}</li>
            <li>Age: {age}</li>
            <ul>
                Hobbies:
                {hob}
            </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}


