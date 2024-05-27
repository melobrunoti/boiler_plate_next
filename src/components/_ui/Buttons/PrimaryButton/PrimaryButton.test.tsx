import '@testing-library/jest-dom';
import { render } from "@testing-library/react"
import PrimaryButton from "."

describe("PrimaryButton module", ()=> { 
    it("shoud be render PrimaryButton",()=>{ 
        const { getByText } = render(<PrimaryButton>teste</PrimaryButton>)
        const button = getByText('teste')
        expect(button).toBeInTheDocument
    })

    it("shoud be render PrimaryButton with props heigth",()=>{ 
        const { getByText } = render(<PrimaryButton height="20%">teste</PrimaryButton>)
        const button = getByText('teste')
        expect(button).toHaveStyle('height: 20%')
    })

    it("shoud be render PrimaryButton with props heigth",()=>{ 
        const { getByText } = render(<PrimaryButton width='20%'>teste</PrimaryButton>)
        const button = getByText('teste')
        expect(button).toHaveStyle('width: 20%')
    })


})