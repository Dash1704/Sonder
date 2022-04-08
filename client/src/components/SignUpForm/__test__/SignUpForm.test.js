import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

import SignUpForm from "../SignUpForm.js";

    
    it("should have an email label input", () => {
        render(<SignUpForm />);
        const emailField = screen.getByTestId("email")
        expect(emailField).toBeInTheDocument()
    })

    it("should have an email label input", () => {

        render(<SignUpForm />);
        const passwordField = screen.getByTestId("password")
        expect(passwordField).toBeInTheDocument()
    })

    it("should have an email label input", () => {
        render(<SignUpForm />);
        const signUpButton = screen.getByTestId("signup-button")
        expect(signUpButton).toBeInTheDocument()
    })

 
