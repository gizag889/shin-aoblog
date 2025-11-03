import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { ReactNode } from "react";

const Layout = ({ children, hidePt = false }: {
    children: ReactNode
    hidePt?: boolean 
}) => {
    return (
        <div> 
            <Header/>
                    <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout