import { mount } from 'enzyme';
import Timer from '.';
import calculateTimeLeft from '../../../helpers/calculateTimeLeft';

describe('Timer component testing', () => {
  test('Timer component shows output correctly', () => {
    const wrapper = mount(<Timer text='Test timer' endDate={new Date('04-02-2022')} />);
    const timer = wrapper.find('p.timer');
    expect(timer).toHaveLength(1);
    expect(timer.text()).toContain('Test timer');
  });
  test('Calculate time left function returns 0 when no time left', () => {
    const endDate = new Date('01-02-2022');
    expect(calculateTimeLeft(endDate)).toBe(0);
  });
  test('Calculate time left function returns correct value', () => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 10);
    endDate.setHours(0, 0, 0, 0);
    expect(calculateTimeLeft(endDate)).toBe(9);
  });
});
