import React from 'react';
import { Tooltip } from 'antd';

// Colors from: https://ant.design/docs/react/customize-theme
export default function(context) {
  return {
    title: 'Status',
    key: 'status',
    width: '100px',
    filterMultiple: false,
    filters: [
      {
        text: 'Dirty',
        value: 'dirty',
      },
      {
        text: 'Clean',
        value: 'clean',
      },
    ],
    onFilter: (value, room) => {
      if (value === 'dirty') {
        return !room.cleaned;
      }
      if (value === 'clean') {
        return room.cleaned;
      }
      return true;
    },
    render: (text, room) => (
      <div>
        <div>
          <Tooltip
            placement="bottom"
            title={
              room.cleanedAt
                ? `Last cleaned ${room.cleanedAt} by ${room.cleanedBy}`
                : 'Never cleaned'
            }
          >
            {room.cleaned ? (
              <span style={{ color: '#52c41a' }}>Clean</span>
            ) : (
              <span style={{ color: '#f5222d' }}>Dirty</span>
            )}
          </Tooltip>
        </div>
      </div>
    ),
  };
}
