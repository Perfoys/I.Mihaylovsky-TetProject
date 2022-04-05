import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import Input from '.';

describe('Input component testing', () => {
  const handleChange = jest.fn();
  const value = 'test input value';
  let wrapper: ReactWrapper<any, React.Component>;
  let focusHandler: React.FocusEventHandler<object> | undefined;
  beforeEach(() => {
    wrapper = mount(
      <Input inputType='text' inputName='test' placeholder='test input' handleChange={handleChange} value={value} />
    );
    focusHandler = wrapper.find('input').invoke('onFocus');
  });
  test('Input component render props correctly', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.props().value).toEqual('test input value');
    expect(wrapper.props().placeholder).toEqual('test input');
  });
  test('Input component calls handleChange function', () => {
    const changeHandler = wrapper.find('input').invoke('onChange');
    if (changeHandler) {
      changeHandler({} as React.FormEvent);
    }
    expect(handleChange).toBeCalledTimes(1);
  });
  test('Error message shows if value is empty and input is focused', () => {
    wrapper.setProps({ value: '' });
    if (focusHandler) {
      focusHandler({} as React.FocusEvent);
    }
    expect(wrapper.find('span.error')).toHaveLength(1);
  });
  test('Error message shows if email value is incorrect', () => {
    wrapper.setProps({ inputType: 'email' });
    wrapper.setProps({ value: 'uncorrect.com' });
    if (focusHandler) {
      focusHandler({} as React.FocusEvent);
    }
    expect(wrapper.find('span.error')).toHaveLength(1);
  });
  test('Error message shows if number value is negative', () => {
    wrapper.setProps({ inputType: 'number' });
    wrapper.setProps({ value: '-1' });
    if (focusHandler) {
      focusHandler({} as React.FocusEvent);
    }
    expect(wrapper.find('span.error')).toHaveLength(1);
  });
  test('Error message shows if password value length is less than 6', () => {
    wrapper.setProps({ inputType: 'password' });
    wrapper.setProps({ value: 'qwer' });
    if (focusHandler) {
      focusHandler({} as React.FocusEvent);
    }
    expect(wrapper.find('span.error')).toHaveLength(1);
  });
  test('Error message disappears when input is blured', () => {
    wrapper.setProps({ value: '' });
    if (focusHandler) {
      focusHandler({} as React.FocusEvent);
    }
    const blurHandler = wrapper.find('input').invoke('onBlur');
    if (blurHandler) {
      blurHandler({} as React.FocusEvent);
    }
    expect(wrapper.find('span.error')).toHaveLength(0);
  });
});
