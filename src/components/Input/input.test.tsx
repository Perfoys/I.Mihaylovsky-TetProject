import { mount, shallow } from 'enzyme';
import Input from '.';

describe('Input component testing', () => {
  const handleChange = jest.fn();
  const value = 'test input value';
  test('Input componentn render props correctly', () => {
    const wrapper = mount(<Input inputName='test' placeholder='test input' handleChange={handleChange} value={value} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.props().value).toEqual('test input value');
    expect(wrapper.props().placeholder).toEqual('test input');
  });
  test('Input component calls handleChange function', () => {
    const wrapper = shallow(<Input inputName='test' placeholder='test input' handleChange={handleChange} value={value} />);
    wrapper.invoke('onChange')();
    expect(handleChange).toBeCalledTimes(1);
  });
});
