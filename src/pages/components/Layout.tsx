import React, {PropsWithChildren} from "react";
import {NextComponentType} from "next";

interface ILayoutProps {
    children: PropsWithChildren<Element>;
}

const Layout: NextComponentType<ILayoutProps> = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export default Layout;