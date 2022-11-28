import React from "react";
import { fireEvent, render } from "@testing-library/react"
import Form from "./Form"


test('first name input should be empty when render', () => {
    const { getByTestId } = render(<Form />)
    const firstNameInput = getByTestId('firstName')
    expect(firstNameInput.value).toBe('')
})

test('password input should be empty when render', () => {
    const { getByTestId } = render(<Form />)
    const passwordInput = getByTestId('password')
    expect(passwordInput.value).toBe('')
})

test('email input should be hidden when render', () => {
    const { queryByTestId } = render(<Form />)
    const emailInput = queryByTestId('email')
    expect(emailInput).toBeNull()
})

test('email input should be visible when newsletter box checked and input should be empty', () => {
    const { getByTestId } = render(<Form />)
    const checkboxInput = getByTestId('checkbox')

    fireEvent.click(checkboxInput)
    expect(checkboxInput.checked).toEqual(true)

    const emailInput = getByTestId('email')
    expect(emailInput.value).toBe('')
})

test('first name input should change', () => {
    const { getByTestId } = render(<Form />)
    const firstNameInput = getByTestId('firstName')
    const testName = 'John'

    fireEvent.change(firstNameInput, {target: {value: testName}})
    expect(firstNameInput.value).toBe(testName)
})

test('password input should change', () => {
    const { getByTestId } = render(<Form />)
    const passwordInput = getByTestId('password')
    const testPassword = 'John'

    fireEvent.change(passwordInput, {target: {value: testPassword}})
    expect(passwordInput.value).toBe(testPassword)
})

test('email input should change', () => {
    const { getByTestId } = render(<Form />)
    const checkboxInput = getByTestId('checkbox')
    const testEmail = 'john@doe.com'

    fireEvent.click(checkboxInput)
    expect(checkboxInput.checked).toEqual(true)
    
    const emailInput = getByTestId('email')
    fireEvent.change(emailInput, {target: {value: testEmail}})
    expect(emailInput.value).toBe(testEmail)
})
