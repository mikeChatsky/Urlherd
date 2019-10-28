import React from 'react';

import style from './App.scss';
import LinkForm from "./links-form/LinkForm";

const App: React.FC = () => {
  return (
    <div className={style.app}>
      <LinkForm onSubmit={}></LinkForm>
    </div>
  );
};

export default App;
