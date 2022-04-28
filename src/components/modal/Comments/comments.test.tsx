import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import Comments from '.';
import { initialSprint } from '../../../data/initialSprint';
import { addComment } from '../../../redux/reducers/sprintReducer';
import store from '../../../redux/store';

describe('Comments component testing', () => {
  let wrapper: ReactWrapper;
  const task = initialSprint.tasks[0];
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Comments task={task} />
      </Provider>
    );
  });
  test('Comments component renders correctly', () => {
    expect(wrapper.find('div.commentSection')).toHaveLength(1);
  });
  test('Action on dispatching works correctly', () => {
    const comment = {
      taskId: task.id,
      author: task.member,
      text: 'test comment'
    };
    store.dispatch(addComment(comment));
    const state = store.getState();
    const newComment = state.sprint.tasks[0].comments[1].text;
    expect(newComment).toEqual('test comment');
  });
  test('Comments history shows previous comments', () => {
    const comment = wrapper.find('div.comment');
    expect(comment).toHaveLength(1);
    expect(comment.childAt(1).text()).toEqual(task.comments[0].text);
  });
});
