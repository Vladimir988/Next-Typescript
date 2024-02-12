import {FC} from 'react';
import Link from "next/link";
import scc from '../styles/Navbar.module.scss';

const Navbar: FC = () => {
    return (
        <nav className={scc.navbar}>
            <div className={scc.list}>
                <Link className={scc.link} href="/">Home</Link>
                <Link className={scc.link} href="/posts">Posts</Link>
            </div>
        </nav>
    );
};

export default Navbar;