import '@testing-library/jest-dom';
import { render } from "@testing-library/react"
import SecondaryButton from "."

describe("SecondaryButton module", ()=> { 
    it("shoud be render SecondaryButton",()=>{ 
        const { getByText } = render(<SecondaryButton>teste</SecondaryButton>)
        const button = getByText('teste')
        expect(button).toBeInTheDocument
    })

    it("shoud be render SecondaryButton with props heigth",()=>{ 
        const { getByText } = render(<SecondaryButton height="20%">teste</SecondaryButton>)
        const button = getByText('teste')
        expect(button).toHaveStyle('height: 20%')
    })

    it("shoud be render SecondaryButton with props heigth",()=>{ 
        const { getByText } = render(<SecondaryButton width='20%'>teste</SecondaryButton>)
        const button = getByText('teste')
        expect(button).toHaveStyle('width: 20%')
    })


})