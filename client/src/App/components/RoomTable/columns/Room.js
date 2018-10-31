import React from 'react';
import { Tooltip } from 'antd';

export default {
  title: 'Room',
  key: 'room',
  render: (text, room) => (
    <Tooltip title={room.lodgingName} placement="right">
      <span>{room.name}</span>
    </Tooltip>
  ),
};