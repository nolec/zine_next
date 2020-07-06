import React, {PropsWithChildren, useContext} from "react";
import {NextComponentType} from "next";
import styled from "styled-components";
import Meta from "../partials/Meta";
import Context from "../contextAPI/context";

const Container = styled.div``;

interface ILayoutProps {
    children: PropsWithChildren<Element>;
}

const Layout: NextComponentType<ILayoutProps> = ({children}) => {
    const {placeData} = useContext(Context);
    return (
        <>
            <Meta title={"home"} data={placeData}/>
            <Container>{children}</Container>
        </>
    )
};

export default Layout;
