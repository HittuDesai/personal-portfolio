import { useState } from 'react';
import { GrSend } from 'react-icons/gr'
import { ImCheckmark, ImCross } from 'react-icons/im'

function ContactPage () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sendStatus, setSendStatus] = useState(0);
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const emailData = {
            name,
            email,
            subject,
            message,
        }
        const jsonEmailData = JSON.stringify(emailData);

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: jsonEmailData,
        });

        if(res.status === 200 && res.statusText === "OK")
            setSendStatus(1);
        else
            setSendStatus(2);
        
        var inputElements = document.getElementsByClassName("formInput");
        var inputElementsArray = [...inputElements];
        inputElementsArray.forEach(inputElement => {
            inputElement.value = "";
        });
    }
    

    return (
        <section id="contact">
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <input type="text" placeholder="Name" className="formInput senderName" onChange={e => setName(e.target.value)}></input>
                <input type="email" placeholder="Email" className="formInput senderEmail" onChange={e => setEmail(e.target.value)}></input>
                <input type="text" placeholder="Subject" className="formInput senderSubject" onChange={e => setSubject(e.target.value)}></input>
                <textarea type="text" placeholder="Message" rows="12" className="formInput senderMessage" onChange={e => setMessage(e.target.value)}></textarea>
                <button type="submit" id="sendMessage">
                    {sendStatus === 0 && <>Send<GrSend /></>}
                    {sendStatus === 1 && <>Sent<ImCheckmark color='green'/></>}
                    {sendStatus === 2 && <>Error<ImCross color='red'/></>}
                </button>
            </form>
        </section>
    );
}

export default ContactPage;