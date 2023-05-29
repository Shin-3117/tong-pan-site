import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Layout({Component, pageProps}){
    return(
        <>
        <Header/>
    
        <NavBar/>
            <Component {...pageProps} />
        </>
    )
}