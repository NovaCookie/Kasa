import Collapse from '../Collapse'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';



//classname => "wrapper " = collapse fermé
//l'espace est important " " car c'est la manière dont il est écrit dans le code

//classname => "wrapper open" = collapse ouverte

describe("collapse test", () => {

    const wrapper = () => screen.getByTestId("divWrapper");
    const text = () => screen.getByTestId("divHeader");

    test('', async () => {
        const user = userEvent.setup()
        render(<Collapse information="" titre="Description" />)

        expect(wrapper().className).not.toBe("wrapper open"); //verifie que la class de wrapper n'est pas "wrapper open"
        expect(wrapper().className).toBe("wrapper ");         //verifie que la class de wrapper est "wrapper ", 

        await act(async () => await user.click(text()));
        await waitFor(() => expect(wrapper().className).not.toBe("wrapper "));     //verifie que la class de wrapper n'est plus "wrapper "
        await waitFor(() => expect(wrapper().className).toBe("wrapper open"));     //verifie que la class de wrapper est "wrapper open

        await act(async () => await user.click(text()));
        await waitFor(() => expect(wrapper().className).not.toBe("wrapper open")); //verifie que la class de wrapper n'est plus "wrapper open"
        await waitFor(() => expect(wrapper().className).toBe("wrapper "));         //verifie que la class de wrapper est "wrapper "
    }
    )
})




