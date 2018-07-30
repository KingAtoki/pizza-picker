import {fetchDoughs} from '../APIs/DoughAPI';
import {fetchIngredients} from '../APIs/IngredientsAPI';

describe('<DoughAPI />', () => {
    it('Should fetch 2 dough types', () => {
        expect(fetchDoughs().length).toEqual(2)
    });
})

describe('<IngredientsAPI />', () => {
    it('Should fetch 8 ingredients', () => {
        expect(fetchIngredients().length).toEqual(8)
    });
})

