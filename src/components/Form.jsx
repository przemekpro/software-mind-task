import { useState } from "react"

export default function Form() {

    const [user, setUser] = useState()
    const [isChecked, setIsChecked] = useState(false)
    const [submitMsg, setSubmitMsg] = useState('')

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
        console.log(user)
        setSubmitMsg('Pomyślna rejestracja')
        setIsChecked(false)
        setUser()
        e.target.reset()
    }

    function handleInvalid() {
        setSubmitMsg('Błąd walidacji')
    }

    console.log(user)

    return(
        <div className="form__wrapper">

            <h2>Form</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    First name:
                    <input 
                        required
                        name="firstName"
                        id="firstName"
                        type="text"
                        placeholder="e.g. John"
                        onChange={handleChange}
                        onInvalid={handleInvalid}
                    />
                </label>

                
                <label htmlFor="password">
                    Password:
                    <input 
                        required
                        name="password"
                        id="password"
                        type="password"
                        placeholder="*****"
                        onChange={handleChange}
                        onInvalid={handleInvalid}
                    />
                </label>

                <label htmlFor="newsletter">
                    Newsletter
                    <input 
                        name="newsletter"
                        id="newsletter"
                        type="checkbox"
                        placeholder="e.g. John"
                        checked={isChecked}
                        onChange={() => setIsChecked(prevVal => !prevVal)}
                    />
                </label>

                {isChecked && <label htmlFor="email">
                    E-mail:
                    <input 
                        required
                        name="email"
                        id="email"
                        type="email"
                        placeholder="e.g. john@doe.com"
                        onChange={handleChange}
                        onInvalid={handleInvalid}
                    />
                </label>}

                <button>Submit</button>
                {submitMsg && <p>{submitMsg}</p>}
            </form>
        </div>

    )
}