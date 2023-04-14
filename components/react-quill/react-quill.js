import React, { useEffect, useState } from 'react';

export let ActiveReactQuill;
export let icons;

type Props = {
  value: any,
  handleChange: Function,
  placeholder?: String,
  handleBlur?: Function,
};

const ReactQuill = (props: Props) => {
  const { value, handleChange, placeholder, handleBlur } = props;
  const [showReactQuill, setShowReactQuill] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      ActiveReactQuill = require('react-quill');
      setShowReactQuill(true);
    }
  }, []);
  return (
    <React.Fragment>
      {showReactQuill ? (
        <ActiveReactQuill
          className="quill-css"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          onBlur={handleBlur}
          bounds="#quill-editor"
        />
      ) : null}
    </React.Fragment>
  );
};

ReactQuill.defaultProps = {
  placeholder: '',
};

export default ReactQuill;
