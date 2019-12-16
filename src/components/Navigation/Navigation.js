import React from 'react';
import {NavLink} from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => (
    <ul className={styles.nav}>
        <li>
            <NavLink exact to={routes.HOME} className={styles.link}
            activeClassName={styles.active}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to={routes.MOVIES}
            className={styles.link}
            activeClassName={styles.active}
            >
                Movies
            </NavLink>
        </li>
    </ul>
);

export default Navigation;