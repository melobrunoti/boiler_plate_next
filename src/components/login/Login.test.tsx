import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react'
import Login  from './'
import { useRouter } from 'next/navigation';


describe('login module', ()=>{
    
    it('it should be render login component', ()=> {
      

        const { getByText } = render(<Login/>)

        expect( getByText('CDC Bank') ).toBeInTheDocument();
    })
}) 

