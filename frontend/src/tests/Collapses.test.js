import { isOpen } from '../components/Collapse'

test('Collapse function', () => {
    const isOpen = true;
    expect(isOpen)
}
)
import { formatJobList } from './'
 
test('Ceci est mon premier test', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
})