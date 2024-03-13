const Tweet = (props) => {
    return ( 
    <div class="tweet">
        <p>Username: {props.username}</p>
        <p>Name: {props.name}</p>
        <p>Date: {props.date} </p>
        <p class="message" >{props.message}</p>

    </div>)
}
