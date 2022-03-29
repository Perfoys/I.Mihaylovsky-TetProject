import { mount } from 'enzyme';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskCard from '.';
import { initialSprint } from '../../../data/initialSprint';

describe('TaskCard component testing', () => {
  test('Task Card component renders correctly', () => {
    const wrapper = mount(
      <DndProvider backend={HTML5Backend}>
        <TaskCard task={initialSprint.tasks[0]} moveCard={() => false} />
      </DndProvider>
    );
    expect(wrapper.find('div.card')).toHaveLength(1);
  });
});
