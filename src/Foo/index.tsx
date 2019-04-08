import * as React from 'react';

interface IProp {
  size: 'large',
  children: React.ReactChild,
}

export default function (props: IProp) {
  return (
    <button
      style= {{
        fontSize: props.size === 'large' ? 40 : 20,
      }}
    >
      { props.children }
    </button>
  );
}
