import React, {FC} from "react";
import styles from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import {NavLinkComponentType} from "../../types /types";

export const NavLinkComponent: FC<NavLinkComponentType> = ({title, ...props}) => {
    return (
        <li className={styles.item}>
            <NavLink className={({isActive}) => (isActive ? styles.active : undefined)}
                     to={title}>{title}
                {
                    props.friends && props.friends.map(el => {
                            return <div key={el.id} className={styles.sidebarBox}>
                                <img src={el.img}/>
                                <span>{el.name}</span>
                            </div>

                        }
                    )
                }
            </NavLink>

        </li>
    )

}