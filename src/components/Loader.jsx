import React, { useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

function Loader() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#ffffff');

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Color of the loader"
      />

      <ClipLoader
        color={color}
        loading={loading}
        css={override} // Use 'css' instead of 'cssOverride'
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
