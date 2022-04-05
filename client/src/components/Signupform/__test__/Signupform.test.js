import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Signupform from "../Signupform.js";

describe("Signupform", () => {
    
    it("should have an email label input", () => {

        render(<Signupform />)
            const emailField = screen.getByLabelText("email")
            expect(emailField).to.beTruthy
    })

})
