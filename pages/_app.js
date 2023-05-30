import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import "./globals.scss";
export default function Layout({Component, pageProps}){
    return(
        <>
        <Header/>
    
        <NavBar/>
            <Component {...pageProps} />
        </>
    )
}