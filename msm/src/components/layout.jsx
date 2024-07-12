import { Navbar } from "./navbar"
import { Footer } from "./footer"

export const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
    <main>{children}</main>
    <Footer/>
    </>
  )
}


