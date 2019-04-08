import React from 'react'

interface IProps {
  size: 'large' | 'small',
  children: React.ReactChild,
}

export default class Foo extends React.PureComponent<IProps, {}> {
  render () {
    const { size } = this.props
    return (
      <button
        style={{
          fontSize:
            size === 'large' ? 40 : size === 'small' ? 30 : 20,
        }}
      >
        {this.props.children}
      </button>
    )
  }
}
