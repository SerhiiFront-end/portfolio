import { Link } from "react-router-dom"
import styles from "./header.module.css"

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navigation}>
				<ul className={styles.listMenu}>
					<Link className={styles.LinkItem} to={"/"}>
						<li className={styles.ListItem}>Main Page</li>
					</Link>
					<Link className={styles.LinkItem} to={"/projects"}>
						<li className={styles.ListItem}>Projects</li>
					</Link>
					<Link className={styles.LinkItem} to={"/skills"}>
						<li className={styles.ListItem}>Skills</li>
					</Link>
					<Link className={styles.LinkItem} to={"/biography"}>
						<li className={styles.ListItem}>Biography</li>
					</Link>
				</ul>
			</nav>
		</header>
	)
}
