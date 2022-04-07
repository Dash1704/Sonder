import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Signupform from "../Signupform.js";

    
    it("should have an email label input", () => {
        render(<Signupform />);
        const emailField = screen.getByTestId("email")
        expect(emailField).toBeInTheDocument()
    })

    it("should have an email label input", () => {
        render(<Signupform />);
        const passwordField = screen.getByTestId("password")
        expect(passwordField).toBeInTheDocument()
    })

    it("should have an email label input", () => {
        render(<Signupform />);
        const signUpButton = screen.getByTestId("signup-button")
        expect(signUpButton).toBeInTheDocument()
    })

 
