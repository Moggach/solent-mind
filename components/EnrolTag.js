import React from 'react';

const EnrolTag = ({ enroll }) => {
  return (
    <div className="text-WHITE">
      {!enroll ? (
        <span className="bg-DARKPINK rounded-md  p-4">Book</span>
      ) : (
        <span className="bg-BLUE rounded-md p-4">Enrolled</span>
      )}
    </div>
  );
};

export default EnrolTag;
