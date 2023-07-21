import React from 'react';

export const insertBreaks = (text) => {
  return (
    <>
      {
      text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          <div style={{marginBottom: ".4em"}}>
          {line}
          </div>
        </React.Fragment>
      ))
      }
    </>

  )
}