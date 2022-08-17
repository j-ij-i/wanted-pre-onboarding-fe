import * as React from 'react';
import { RecoilRoot } from 'recoil';
import Router from 'routes/Router';
export default function App() {
  return (
    <>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </>
  );
}
