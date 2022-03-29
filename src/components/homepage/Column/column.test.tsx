import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from '.';
import { initialSprint } from '../../../data/initialSprint';
import { status } from '../../../constants/status';
import store from '../../../redux/store';
import { changeTaskOrder } from '../../../redux/reducers/sprintReducer';

describe('Column component testing', () => {
  test('Column component renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <Column title={status.INPROGRESS} titleStyle='inProgress' tasks={initialSprint.tasks} />
        </DndProvider>
      </Provider>
    );
    expect(wrapper).toHaveLength(1);
  });
  test('Task order changes when action changeTaskOrder is calling', () => {
    const firstTask = initialSprint.tasks[1];
    const secondTask = initialSprint.tasks[2];
    store.dispatch(changeTaskOrder({ dragIndex: secondTask.id, hoverIndex: firstTask.id }));
    const state = store.getState();
    expect(state.sprint.tasks[1]).toBe(secondTask);
    expect(state.sprint.tasks[2]).toBe(firstTask);
  });
});
