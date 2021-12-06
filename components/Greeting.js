import React from 'react';
import { CgProfile } from 'react-icons/Cg';
import { supabase } from '../utils/supabaseClient';

const Greeting = () => {
  const user = supabase.auth.user();

  return (
    <div>
      <CgProfile />
      <p>Hello {user.id}</p>
      <p>My courses</p>
    </div>
  );
};

export default Greeting;
