const App = () => (
    <div>  

    <Tweet username="Jackattack1" name="Jack Daniels" date="Oct-12-2002" message="Hello World, how's it going!" />
    <hr></hr>
    <Tweet/>
    <hr></hr>
    <Tweet/>
    <hr></hr>

    </div>


);

ReactDOM.render(<App/>, document.getElementById("root"));