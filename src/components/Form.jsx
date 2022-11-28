import { useState } from "react"

export default function Form() {

    const [user, setUser] = useState()
    const [isChecked, setIsChecked] = useState(false)

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
    }

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
                    />
                </label>}

                <button>Submit</button>
            </form>
        </div>

    )
}