import * as React from 'react'

export interface IProps {
  /**
   * 缺省值: 20px, large: 40px, small: 30px
   * @default '20px'
   */
  size: 'large' | 'small',
  children: React.ReactChild,
}

const Foo: React.SFC<IProps> = ({ size, children }) => (
  <button
    style={{
      fontSize:
        size === 'large' ? 40 : size === 'small' ? 30 : 20,
    }}
  >
    {children}
  </button>
)

export default Foo
