import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import StatusSelector from '.';
import { initialSprint } from '../../../data/initialSprint';
import { changeTaskStatus } from '../../../redux/reducers/sprintReducer';
import store from '../../../redux/store';

describe('StatusSelector component testing', () => {
  test('Status selector component renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <StatusSelector task={initialSprint.tasks[0]} />
      </Provider>
    );
    expect(wrapper.find('Select')).toHaveLength(1);
  });
  test('Change status action works and update task status', () => {
    const task = initialSprint.tasks[0];
    store.dispatch(changeTaskStatus({ item: task, title: 'Done' }));
    const state = store.getState();
    const taskStatus = state.sprint.tasks[0].status;
    expect(taskStatus).toEqual('Done');
  });
});
