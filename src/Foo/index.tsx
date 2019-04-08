import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Size = 'large' | 'small'
interface IProps {
  size: Size,
  children: React.ReactChild,
}

interface ButtonProps {
  fontSize: Size
}
const Button = styled.button`
  font-size: ${({ fontSize }: ButtonProps) =>
    fontSize === 'large'
      ? '40px'
      : fontSize === 'small'
        ? '30px'
        : '20px'
  }
`

export default class Foo extends PureComponent<IProps, {}> {
  render () {
    const { size, children } = this.props
    return (
      <Button fontSize={size}>
        {children}
      </Button>
    )
  }
};
