import React from 'react';
import PropTypes from 'prop-types';

const withClass = (props) => {
    return <div className={props.classes}>{props.children}</div>;
}

// Props validation; Used in development mode to catch errors if wrong types are added to props
withClass.propTypes = {
    classes: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
  }

export default withClass;