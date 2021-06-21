import { useRef } from 'react'

import classes from './HookForm.module.css'

export default function HookForm(props) {

    const HookInputRef = useRef();
    const NameInputRef = useRef();
    const MessageInputRef = useRef();


    function SendHandler(event) {
        event.preventDefault();
        const hookData = {
            hook:HookInputRef.current.value,
            userName:NameInputRef.current.value,
            message:MessageInputRef.current.value
        }

        props.handler(hookData);

        HookInputRef.current.value = ""
        NameInputRef.current.value = ""
        MessageInputRef.current.value = ""
    }

    return (
    <div className={classes.HookFormContainer}>
        <form onSubmit={SendHandler}>
            <label for="hookInput">Hook:</label>
            <input placeholder="Hook" id="hookInput" type="url" ref={HookInputRef} />
            <label for="nameInput">Hook user Name:</label>
            <input placeholder="Name" id="nameInput" ref={NameInputRef} />
            <label for="messageInput">Message:</label>
            <textarea id="messageInput" rows="3" ref={MessageInputRef}  />

            <button type="submit" className={classes.SendButton}>Send</button>
        </form>
    </div>
    )
}
