import React from 'react'
import { shallow } from 'enzyme'
import Foo from './index'

describe('<Foo />', () => {
  it('render Foo', () => {
    const wrapper = shallow(<Foo size="large">hello, umi</Foo>)
    expect(wrapper.children().text()).toEqual('hello, umi')
  })
})
