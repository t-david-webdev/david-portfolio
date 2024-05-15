import React from 'react';
import './btn.css';

function MyBtn({ btnText, href }) {
  return (
    <>

    <a href={href}>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{btnText}</span>
      </button>
      </a>

    </>
  );
}

export default MyBtn;
