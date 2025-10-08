export const NAV_LINKS=[
    {path:"/",label:"首頁",icon:"💒"},
    {path:"/Menu",label:"點餐菜單",icon:"🍔"},
    {path:"/about",label:"關於我們",icon:"🎎"},
    {path:"/contact",label:"聯絡我們",icon:"☎"},
];

export const isPathActive=(currentPath,targetPath)=>{
    if(currentPath==="/" && targetPath==="/") return true;
    return currentPath!=="/"&& currentPath.startsWith(targetPath);
};