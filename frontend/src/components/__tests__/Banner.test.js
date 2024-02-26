import { render, screen } from '@testing-library/react'
import Banner from '../Banner.jsx'

describe("Banner test", () => {

    const text = () => screen.getByTestId("p-banner")
    const img = () => screen.getByAltText("img-banner")

    test('404', () => {
        render(<Banner txt='text au pif' img={"/la_source"} />)
        expect(text()).toHaveTextContent('text au pif');
        expect(img().src).toBe("http://localhost/la_source")
    })
})