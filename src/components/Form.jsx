import { useState } from "react"

export default function Form() {

const [isChecked, setIsChecked] = useState(false)

    return(
        <div className="form__wrapper">
            <h1>Form</h1>
            <form>
                <label htmlFor="firstName">
                    First name:
                    <input 
                        required
                        name="firstName"
                        id="firstName"
                        type="text"
                        placeholder="e.g. John"
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
                    />
                </label>}

                <button>Submit</button>
            </form>
        </div>

    )
}