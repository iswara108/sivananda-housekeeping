import React from 'react';
import { StarFilled } from '@ant-design/icons';

const GuestName = ({ guest }) => (
  <span>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://sivanandabahamas.secure.retreat.guru/wp-admin/admin.php?registration=${guest.id}&page=registrations&action=edit`}
    >
      {guest.name}
    </a>
    {guest.isSpecial ? (
      <StafFilled
        theme="twoTone"
        twoToneColor="yellow"
        style={{ marginLeft: '2px' }}
      />
    ) : null}
  </span>
);

export default GuestName;
