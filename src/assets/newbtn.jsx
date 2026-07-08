import { useState } from 'react';
import './newbtn.css';

function NewBtn({ children }) {
  const [isWhite, setIsWhite] = useState(true);

  const toggleColor = () => {
    setIsWhite(!isWhite);
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: isWhite ? '#ffffff' : '#1e293b',
        color: isWhite ? '#111827' : '#f8fafc',
      }}
    >
      <button className="change-btn" onClick={toggleColor} type="button">
        {isWhite ? 'Switch to Dark' : 'Switch to Light'}
      </button>
      <div className="app-content">{children}</div>
    </div>
  );
}

export default NewBtn;