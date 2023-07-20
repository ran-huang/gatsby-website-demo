import React from 'react';

export const insertBreaks = (text) => {
  return (
    <>
      {
      text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
      }
    </>

  )
}