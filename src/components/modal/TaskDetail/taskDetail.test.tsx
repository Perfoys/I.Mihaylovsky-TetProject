import { mount } from 'enzyme';
import TaskDetail from '.';
import { initialSprint } from '../../../data/initialSprint';

describe('TaskDetail modal component testing', () => {
  test('Task Detail modal component renders correctly', () => {
    const closeModal = jest.fn();
    const wrapper = mount(<TaskDetail task={initialSprint.tasks[0]} isModalOpen={true} closeModal={closeModal}/>);
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
});
