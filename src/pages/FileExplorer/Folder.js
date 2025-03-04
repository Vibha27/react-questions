import React, { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { FiFilePlus } from "react-icons/fi";

export const Folder = ({ folderData = {} }) => {
  const [expand, setExpand] = useState(false);

  if (folderData.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {folderData.name}
            <FiFilePlus size={18} className="folder-icons"/>
            <FiFolderPlus   size={20} className="folder-icons"/>
          </span>
        </div>
        {expand && (
          <div style={{ paddingLeft: "20px" }}>
            {folderData.isFolder &&
              folderData.items.map((item) => (
                <Folder folderData={item} key={item.id} />
              ))}
          </div>
        )}
      </div>
    );
  } else {
    return <span style={{ display: "block" }}>📄 {folderData.name}</span>;
  }
};
