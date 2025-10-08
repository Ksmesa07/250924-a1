import list from "daisyui/components/list";
import {Link} from "react-router-dom";

export default function NavLinks( {
    items,
    isActive,
    onItemClick,
    listClassName,
    listProps,
}){
    return(
        <ul className={"listClassName" + " " + list.menu + " " + list.menuVertical} {...listProps}>
            {items.map((item) => (
                <li key={item.path}>
                    <Link to={item.to}>{item.label}
                    
                    </Link>
                </li>
            ))}
        </ul>
    );
}