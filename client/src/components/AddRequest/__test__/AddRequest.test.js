import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import AddRequest from "../AddRequest.js";

    
    it("should have an request body label input", () => {
        render(<AddRequest />);
        const requestBody = screen.getByTestId("requestBody")
        expect(requestBody).toBeInTheDocument()
    })

    it("should have an add request button label input", () => {
        render(<AddRequest />);
        const addRequestButton = screen.getByTestId("addRequestButton")
        expect(addRequestButton).toBeInTheDocument()
    })