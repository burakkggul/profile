import { useEffect, useState } from "react";
import Page from "./components/Page";

const App = () => {
  const[loaderState,setLoaderState] = useState(true);

  useEffect(() => {
    setLoaderState(false);
  },[])

  return (
    <div>
    {loaderState ? 	<div className="loader"></div> : <Page />}
    </div>
  );
};

export default App;
