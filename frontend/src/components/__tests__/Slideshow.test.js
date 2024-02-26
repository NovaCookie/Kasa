import { render, screen, waitFor } from '@testing-library/react'
import Slideshow from '../Page_Location/Slideshow'
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

const img = ["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"];

describe("Slideshow test", () => {

    const image = () => screen.getByTestId("imgSlideshow")
    const arrowRight = () => screen.getByTestId("divArrowRight");
    const arrowLeft = () => screen.getByTestId("divArrowLeft");

    test('', async () => {
        const user = userEvent.setup()
        render(<Slideshow pictures={img} />)

        expect(image().src).toContain(img[0]); //img par défaut (0 clic)

        await act(async () => await user.click(arrowRight()))
        await waitFor(() => expect(image().src).toContain(img[1])); //img apres 1 clic sur la fleche de droite

        await act(async () => await user.click(arrowLeft()));
        await act(async () => await user.click(arrowLeft()));
        await waitFor(() => expect(image().src).toContain(img[4]));//img apres 2 clics sur la fleche de gauche
    })


})
