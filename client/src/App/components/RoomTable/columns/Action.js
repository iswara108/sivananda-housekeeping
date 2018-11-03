import React from 'react';
import RoomCleanButton from './components/RoomCleanButton';

export default function(context) {
  return {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: '110px',
    align: 'center',
    render: (text, room) => (
      <span>
        <RoomCleanButton room={room} />
      </span>
    ),
  };
}
