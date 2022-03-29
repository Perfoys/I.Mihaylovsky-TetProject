import { mount, ReactWrapper } from 'enzyme';
import Participants from '.';
import { initialSprint } from '../../../data/initialSprint';

describe('Participants component testing', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Participants members={initialSprint.members} />);
  });
  test('Participants component renders correctly', () => {
    expect(wrapper).toHaveLength(1);
  });
  test('Map method in component displays all of sprint members', () => {
    const members = wrapper.find('p.member');
    expect(members).toHaveLength(3);
  });
});
