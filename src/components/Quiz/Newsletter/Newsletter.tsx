import React, {useContext, useEffect, useRef, useState} from "react";
import {getRandomInt, helpFetch} from "../../util";
import {Logo} from "../../Logo";
import './index.css';

// "http://newsletter.staging.ippen.space/swagger-ui.html"
// "http://newsletter.production.ippen.space/swagger-ui.html"
// "POST {{nl-host}}/api/subscription/"

const url = "http://newsletter.production.ippen.space/swagger-ui.html"

export const Newsletter = ({text, buttonText = "Zum Newsletter anmelden ➞", subtext, ...props}) => {
    const [email, setEmail] = useState('');
    const [completed, setCompleted] = useState(false);

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const inputRef = useRef();

    useEffect(() => {
        inputRef && inputRef.current.focus();
    }, []);

    const form = useRef(null)
    const handleChange = (event) => {
        // console.log(event)
        let email = event.target.value
        setEmail(email);
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
        event.preventDefault();
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        if (!isValid) {
            setMessage('Korrekte Email bitte!');
            return
        }
        // const data = new FormData(form.current);
        // console.log(data.values())
        // console.log(state.name)

        const body = {
            "client": "client-alias", // required if clientId is missing (client alias from cms)
            "clientId": 123, // this is the preferred parameter to define the brand. Optional when client is defined.
            "recipientList": "daily", // required (name of the mailing list the user is subscribing to)
            "email": email, // required (the email address of the subscriber)
            "provider": "apester", // required (provider identifier – e.g. pinpoll, fanmatics etc.)
            "created": "2021-01-01T14:37:00.000",
            "campaign": "test", // optional campaign name
            "ipAddress": "127.0.0.1",
            "userAgent": "Firefox",
            "referer": "test", // site the poll was shown on
            "doiEmailContent": "", // can be empty
            "userId": "", // optional, set if available
            "agbAccepted": true,
            "sendDoiEmail": true, // true, the subscription service will send a DOI Mail to the user.  Should be false if the newsletter service should not send a DOI message because the provider has sent a DOI message.
        }
        // if (await helpFetch(url, null, body)) {
        //     setCompleted(true)
        // }
        setCompleted(true)
    }


    const render = () => {
        if (completed) {
            return <div
                style={{
                    color: "#84BF03",
                    paddingTop: 30,
                    marginBottom: 55,
                    fontSize: 35
                }}
            >Danke!</div>;
        } else {
            return <div>
                <form onSubmit={handleSubmit} ref={form}
                      style={{
                          margin: "0 auto"
                      }}
                >
                    <label>
                        <div className={`message ${isValid ? 'success' : 'error'}`}>
                            {message}
                        </div>
                        <input type="text" value={email} name="email" onChange={handleChange}
                               ref={inputRef}
                               className="email-input"
                               placeholder="Ihre E-Mail-Adresse"
                        />
                    </label>
                    <input className="button"
                           style={{
                               width: '100%',
                               margin: '0 auto',
                               display: 'block'
                           }}
                           type="submit" value={buttonText}
                    />
                </form>
                <input className="button transparent"
                       type="submit" value={"Nein, danke! ➞"}
                />
            </div>
        }
    }

    return (
        <div
            style={{
                width: 355,
                margin: '0 auto'
            }}
        >
            <h4
                style={{
                    marginBottom: 5,
                    fontFamily: 'Roboto'
                }}
            >{text}</h4>
            <p
            >{subtext}</p>
            {render()}


            {/*<p></p>*/}
            {/*<button className="button"></button>*/}
            {/*<button className="button">Nein, danke. ➞</button>*/}
            <Logo/>
        </div>
    )
}