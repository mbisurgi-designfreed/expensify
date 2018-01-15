import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import DotEnv from 'dotenv';

Enzyme.configure({
    adapter: new Adapter()
});

DotEnv.config({ path: '.env.test' });