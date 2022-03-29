import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ReactModal from 'react-modal';
import TaskDetail from '.';
import { initialSprint } from '../../../data/initialSprint';
import store from '../../../redux/store';

ReactModal.setAppElement(document.createElement('div'));
describe('TaskDetail modal component testing', () => {
  test('Task Detail modal component renders correctly', () => {
    const closeModal = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <TaskDetail task={initialSprint.tasks[0]} isModalOpen={true} closeModal={closeModal}/>
      </Provider>
    );
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
});
