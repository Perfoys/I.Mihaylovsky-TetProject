import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TasksTable from '.';
import store from '../../../redux/store';
import { initialSprint } from '../../../data/initialSprint';

describe('TasksTable component testing', () => {
  test('Tasks table should render 4 columns for tasks', () => {
    const wrapper = mount(
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
          <TasksTable members={initialSprint.members} tasks={initialSprint.tasks} />
        </Provider>
      </DndProvider>
    );
    const columns = wrapper.find('Column');
    expect(columns).toHaveLength(4);
  });
});
