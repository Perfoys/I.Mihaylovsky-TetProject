import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import MainSection from '.';
import { initialSprint } from '../../../data/initialSprint';
import store from '../../../redux/store';

describe('MainSection component testing', () => {
  test('Main Section component renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MainSection task={initialSprint.tasks[0]}/>
      </Provider>
    );
    expect(wrapper.find('div.mainSection')).toHaveLength(1);
  });
  test('Main Section component shows right title and description task', () => {
    const task = initialSprint.tasks[0];
    const wrapper = mount(
      <Provider store={store}>
        <MainSection task={initialSprint.tasks[0]}/>
      </Provider>
    );
    const title = wrapper.find('div.title');
    const description = wrapper.find('div.description');
    expect(title.text()).toEqual(task.title);
    expect(description.text()).toEqual(task.description);
  });
});
