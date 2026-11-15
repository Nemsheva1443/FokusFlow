import styles from "./listitem.module.css";

export function ListItem({ content, link }) {
  return (
  

 <li className={styles.item}>
      <a className={styles.link} href={link}>
        {content}
      </a>
    </li>

  
   
  );
}