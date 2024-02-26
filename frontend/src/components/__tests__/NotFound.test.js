import { render, screen } from '@testing-library/react'
import NotFound from '../NotFound.jsx'
import { BrowserRouter } from 'react-router-dom'



describe("NotFound test", () => {

    const text1 = () => screen.getByText("404")
    const text2 = () => screen.getByText("Oups! La page que vous demandez n'existe pas.")

    test('404', () => {
        render(<BrowserRouter><NotFound /></BrowserRouter>)
        expect(text1()).toHaveTextContent("404");
        expect(text2().textContent).toBe("Oups! La page que vous demandez n'existe pas.")
    })
})