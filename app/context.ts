'use client'
import { createContext, useContext } from "react";

import { WebsiteContextType } from "./page";

export const WebsiteContext = createContext<WebsiteContextType | undefined>(undefined);

export function useWebsiteContext(){
    const website = useContext(WebsiteContext);

    if(website == undefined){
        throw new Error("Website context error!")
    }

    return website;
}