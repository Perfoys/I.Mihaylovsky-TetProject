import { mount } from 'enzyme';
import Participants from '.';
import { initialSprint } from '../../../data/initialSprint';

describe('Participants component testing', () => {
  test('Participants component renders correctly', () => {
    const wrapper = mount(<Participants members={initialSprint.members} />);
    expect(wrapper).toHaveLength(1);
  });
  test('Map method in component displays all of sprint members', () => {
    const wrapper = mount(<Participants members={initialSprint.members} />);
    const members = wrapper.find('p.member');
    expect(members).toHaveLength(3);
  });
});
