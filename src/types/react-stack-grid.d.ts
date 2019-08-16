
declare module 'react-stack-grid' {
  import * as React from 'react';

  type PropTypes = {
    className?: string
    columnWidth: number | string,
    gutterWidth?: number,
    gutterHeight?: number,
    monitorImagesLoaded?: boolean,
  }

  class StackGrid extends React.Component<PropTypes> { }

  export default StackGrid;
}