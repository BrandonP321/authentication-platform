import { useEffect } from 'react';
import Home from './Home';

export default function Root() {

  useEffect(() => {
    import("@Utils/ReduxUtils").then(({ ReduxUtils }) => ReduxUtils.initializeStores());

    return () => { import("@Utils/ReduxUtils").then(({ ReduxUtils }) => ReduxUtils.destroyStores()) };
  }, [])

  return (
    <Home/>
  )
}
