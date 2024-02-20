import Header from "../header/header"

export const Layout = ({ children }) => {

    return <>
        <Header />
        {children}
    </>
}