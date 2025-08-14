import { Header } from "../components/Header"
export function PageNotFound(){

  return(
    <>
    <title>404-Page not found</title>
      <Header />
      <div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "2rem",
          fontWeight: "bold",
        }} >
        PAGE NOT FOUND
      </div>
    </>
  )

}