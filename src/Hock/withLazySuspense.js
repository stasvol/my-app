import React, { Suspense } from 'react';

import { LoadingConst } from '../Constants/PathConst';

export const withLazySuspense = Component => ({ ...props }) => {
  return (
    <Suspense fallback={LoadingConst}>
      <Component {...props} />
    </Suspense>
  );
};
