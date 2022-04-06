import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import AddRequest from "../AddRequest.js";

    
    it("should have an requestbody label input", () => {
        render(<AddRequest />);
        const requestBody = screen.getByTestId("requestBody")
        expect(requestBody).toBeInTheDocument()
    })

    it("should have an email label input", () => {
        render(<AddRequest />);
        const addRequestButton = screen.getByTestId("addRequestButton")
        expect(addRequestButton).toBeInTheDocument()
    })

    // it("should have an email label input", () => {
    //     render(<Signupform />);
    //     const signUpButton = screen.getByTestId("signup-button")
    //     expect(signUpButton).toBeInTheDocument()
    // })