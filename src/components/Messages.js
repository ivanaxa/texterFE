import axios from 'axios';
import {useState, useEffect} from 'react';

function Messages(){

    let [messages, setMessages] = useState('');
    const apiKey = process.env.REACT_APP_APIKEY_MESSAGES;
    const url = process.env.REACT_APP_URL_MESSAGES;
    
    const getMessages =()=>{
        axios({
            method:'get',
            url:url,
            headers:{
                'x-api-key':apiKey
            },
        }).then((r) => {
            console.log(r.data)
            let listOfMessages = r.data;
            let listItems = listOfMessages.map((message) => <li key={message.id}>{message.outgoing_phone} - {message.send_time}- {message.display_name} - {message.message} </li>);
            setMessages(messages = listItems)
        });
    }

    useEffect(() => getMessages(), []);


    return(
        <div>
            {messages}
        </div>
    );
}

export default Messages;