import Image from 'next/image';
import React from 'react';


const Spinner = () => {
  return (
    <>
      <Image className='w-[200px] m-auto block' src="https://media.tenor.com/UnFx-k_lSckAAAAC/amalie-steiness.gif" alt='loading..' />
    </>
  );
};
