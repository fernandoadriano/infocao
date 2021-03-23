import React from 'react';
import PropTypes from 'prop-types';

import Text from 'src/components/Text';

const Status = ({ status }) => (
  <Text as="p" variant="status">{status}</Text>
);

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
