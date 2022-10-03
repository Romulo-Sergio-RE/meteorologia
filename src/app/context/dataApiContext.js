import React, { useEffect, useState } from "react";

export const DataApiContext = React.createContext({});

export const DataApiProvider = (props) =>{

    return(
        <DataApiContext.Provider >
            { props.children }
        </DataApiContext.Provider>
    )
}