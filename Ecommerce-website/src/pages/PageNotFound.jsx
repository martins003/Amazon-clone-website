import { Header } from "../components/Header";
import './pageNotFound.css';
export function PageNotFound({cart }){

  return(
    <>
    <title>404-Page not found</title>
    <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart}/>
      <div className="not-found-message">
        PAGE NOT FOUND
      </div>
    </>
  )

}