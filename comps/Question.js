import {useState, useEffect} from React;

const Question = props => {
    const [answer, setAnswer] = useState("");


    return(
        <span className="d-block w-100 h1 text-dark">{props.question}</span>
    )
}