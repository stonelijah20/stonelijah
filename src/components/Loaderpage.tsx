import React from 'react';
import './Loaderpage.css'
import ReactLoading from 'react-loading'

const Loaderpage = () => {
  return <div>
      <div className="loaderpage">
           <ReactLoading type={'cubes'} color={'gray'} height={200} width={200} />
        </div>
  </div>;
};

export default Loaderpage;
