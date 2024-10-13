import React from "react";

export default function NestedList(){
	const [open, setOpen] = React.useState(true);
	
	const handleClick = () => {
		setOpen(!open);
	};
    
    const setListNested = (list:any) => {
        return list.map((item:any, index:any) => {
            if (item.subItems) {
                return (
                    <li key={index}>
                        {item.name}
                        {item.children && item.children.length > 0 && (
                            <ul>
                                {setListNested(item.children)}
                            </ul>
                        )}
                    </li>
                );
            };
        });
    };
}