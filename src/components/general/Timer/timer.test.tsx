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
  test('Calculate time left function returns correct data', () => {
    const endDate = new Date('04-02-2022');
    const difference = +endDate - +new Date();
    const correctTime = difference > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : 0;
    expect(calculateTimeLeft(endDate)).toBe(correctTime);
  });
});
