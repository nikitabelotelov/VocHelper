import styles from './layout.module.css'

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: LayoutProps) {
  return <div className={styles.container}>{children}</div>;
}
