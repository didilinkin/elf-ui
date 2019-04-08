import React from 'react'

interface IProps {
  size: 'large' | 'small',
  children: React.ReactChild,
}

export default (props: IProps) => (
  <button
    style={{
      fontSize: props.size === 'large'
        ? 40
        : props.size === 'small'
          ? 30
          : 20,
    }}
  >
    {props.children}
  </button>
)
