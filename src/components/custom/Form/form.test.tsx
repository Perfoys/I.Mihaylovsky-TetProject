import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import React, { FormEvent } from 'react';
import Form from '.';
import store from '../../../redux/store';

describe('Form component testing', () => {
  let wrapper: ReactWrapper<any, React.Component>;
  const handleSubmit = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Form handleSubmit={handleSubmit} ><h1>test</h1></Form>
      </Provider>
    );
  });
  test('Form component renders properly', () => {
    expect(wrapper).toHaveLength(1);
  });
  test('Form component calls handleSubmit on submit', () => {
    const form = wrapper.find('form');
    const submitHandler = form.invoke('onSubmit');
    if (submitHandler) {
      submitHandler({} as FormEvent);
    }
    expect(handleSubmit).toBeCalledTimes(1);
  });
});
