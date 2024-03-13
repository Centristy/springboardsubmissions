function App() {
    return (
        <div>
        <Person
            name="Christopher-Robin"
            age={20}
            hobbies={["talking to his stuffed animals", "reading", "dancing"]}
        />
        <Person name="Winney The Pooh" age={6} hobbies={["bothering", "eating honey"]} />
        <Person name="Eeyore" age={6} hobbies={["reading", "saxophone", "eating vegetables"]}/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));