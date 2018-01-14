import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../../src/pages/not-found.page';

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper).toMatchSnapshot();
});