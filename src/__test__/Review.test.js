import React from 'react';
import {shallow} from 'enzyme';

import Review from '../Components/RouteComponents/ReviewComponent/Review';
import App from '../App';

describe('<Review />', () => {
    it('should call reset state on submit', () => {
        const appWrapper = shallow(<App />);
        const submit = appWrapper.instance().submit;
        const reviewWrapper = shallow(<Review submit={submit} ingredients={['1','2']}/>);
        const button = reviewWrapper.findWhere(h2 => h2.hasClass('order-ticket__btn'));
        button.prop('onClick')();
        expect(appWrapper.state().dough).toEqual('Thin Dough');
        expect(appWrapper.state().ingredients).toEqual([]);
    });
})