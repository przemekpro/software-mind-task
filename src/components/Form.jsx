import { useState } from "react"


export default function Form() {

    const [user, setUser] = useState()
    const [isChecked, setIsChecked] = useState(false)
    const [submitMsg, setSubmitMsg] = useState('')

    const successMsg = 'Pomyślna rejestracja'
    const errorMsg = 'Błąd walidacji'


    function handleChange(e) {
        const {name, value} = e.target
        setUser(prevValue => ({
                ...prevValue,
                [name]: value
            })
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('New user', user)
        setSubmitMsg(successMsg)
        setIsChecked(false)
        setUser()
        e.target.reset()
    }

    function handleInvalid() {setSubmitMsg(errorMsg)}

    return(
        <div className="form__wrapper">

            <h2>Form</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    First name*
                    <input 
                        required
                        name="firstName"
                        id="firstName"
                        data-testid="firstName"
                        type="text"
                        placeholder="e.g. John"
                        onChange={handleChange}
                        onInvalid={handleInvalid}
                        pattern="^[a-zA-Z]{2,}$"
                    />
                </label>
                <br />

                
                <label htmlFor="password">
                    Password*
                    <input 
                        required
                        name="password"
                        id="password"
                        data-testid="password"
                        type="password"
                        placeholder="*****"
                        onChange={handleChange}
                        onInvalid={handleInvalid}
                        minLength={5}
                    />
                </label>
                <br />


                <label htmlFor="newsletter">
                    Do you want to receive our newsletter?
                    <input 
                        name="newsletter"
                        id="newsletter"
                        data-testid="checkbox"
                        type="checkbox"
                        placeholder="e.g. John"
                        aria-checked={isChecked}
                        onChange={() => setIsChecked(prevVal => !prevVal)}
                    />
                </label>
                <br />


                {isChecked && <label htmlFor="email">
                    E-mail*
                    <input 
                        required
                        name="email"
                        id="email"
                        data-testid="email"
                        type="email"
                        placeholder="e.g. john@doe.com"
                        onChange={handleChange}
                        onInvalid={handleInvalid}
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    />
                </label>}
                <br />


                <button>Submit</button>
                <p>* – required field</p>
                {submitMsg && <p>{submitMsg}</p>}
            </form>
        </div>

    )
}