import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import AdditionSection from '.';
import { initialSprint } from '../../../data/initialSprint';
import store from '../../../redux/store';

describe('AdditionSection component testing', () => {
  test('Addition section component renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <AdditionSection task={initialSprint.tasks[0]} />
      </Provider>
    );
    expect(wrapper.find('div.additionSection')).toHaveLength(1);
    const image = wrapper.find('img.image');
    expect(image).toHaveLength(1);
  });
});
