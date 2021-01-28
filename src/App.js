import React, { Suspense, useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { initHeader } from "./profileInit";
const Page = React.lazy(() => import("./components/Page"));

const App = () => {
  const[loaderState,setLoaderState] = useState(true);
  const [headerStore] = useState(initHeader);

  useEffect(() => {
    setLoaderState(false);
  },[])

  return (
    <div>
    {loaderState ? 	<div className="loader"></div> : 
    (<div className="page">
    <Header {...headerStore}/> <Suspense fallback={<div id="loader"></div>}><Page /></Suspense> <Footer /></div>)}
    </div>
  );
};

export default App;
