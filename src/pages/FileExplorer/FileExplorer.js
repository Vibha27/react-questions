import React from "react";
import data from "./data";
import { Folder } from "./Folder";

export const FileExplorer = () => {
    return <Folder folderData={data} />
}