export default function Tabs({ children, buttons, containerType }) {
    const ContainerType = containerType || 'div';
    return (
        <>
            <ContainerType>
                {buttons}
            </ContainerType>
            {children}
        </>
    );
}

