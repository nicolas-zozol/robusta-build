import Link from "next/link";
import styles from '../../styles/posts/First.module.scss'


export default function FirstPost() {
    return (
        <>
            <h1 className={'card bg-blue'}>First Post</h1>
            <h2 className={styles.first}>
                <Link href="/">
                    Back to home
                </Link>
            </h2>
        </>
    )
}
