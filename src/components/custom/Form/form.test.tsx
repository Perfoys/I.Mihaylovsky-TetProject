import { shallow } from 'enzyme';
import Form from '.';

describe('Form component testing', () => {
  const handleSubmit = jest.fn();
  test('Form component renders properly', () => {
    const wrapper = shallow(<Form handleSubmit={handleSubmit} ><h1>test</h1></Form>);
    expect(wrapper).toHaveLength(1);
  });
  test('Form component calls handleSubmit on submit', () => {
    const wrapper = shallow(<Form handleSubmit={handleSubmit} ><h1>test</h1></Form>);
    wrapper.invoke('onSubmit')();
    expect(handleSubmit).toBeCalledTimes(1);
  });
});
