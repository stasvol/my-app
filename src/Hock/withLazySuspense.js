import React, {Suspense} from 'react'

import {LoadingConst} from "../Constants/PathConst";

export const withLazySuspense = Component => (
    props => (
        <Suspense fallback={LoadingConst}>
            <Component {...props}/>
        </Suspense>
    )
)