import { shallow } from 'enzyme';
import App from '../App';

test('render App component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div.App')).toHaveLength(1);
});
