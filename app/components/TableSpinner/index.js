import React from 'react';
import { CircularProgress } from 'material-ui';

class TableSpinner extends React.PureComponent {
  render() {
    return (
      <tr>
        <td style={{ textAlign: 'center', overflow: 'hidden', padding: '10px 0px 10px 0px' }}>
          <CircularProgress size={1} />
        </td>
      </tr>
    );
  }
}

export default TableSpinner;
