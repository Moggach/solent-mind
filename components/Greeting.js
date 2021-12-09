import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { supabase } from '../utils/supabaseClient';

const Greeting = ({ user }) => {
  return (
    <div className="flex flex-row items-center justify-between bg-PURPLE h-12 pl-4 pr-14">
      <div className="rounded-full inline-block bg-WHITE text-DARKPINK mt-10 text-5xl	">
        <CgProfile />
      </div>
      <p className="text-WHITE">
        <p>Hello</p>
        <p>{user}</p>
      </p>
    </div>
  );
};

export default Greeting;
