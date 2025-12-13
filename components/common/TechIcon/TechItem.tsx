import styles from "./TechItem.module.css";

interface Props {
  name: string;
  icon: string;
}

export default function TechItem({ name, icon }: Props) {
  return (
    <div
      className={`glassBase px-2 py-2 flex items-center gap-2 ${styles.wrapper}`}
    >
      <img
        src={icon}
        alt={name}
        width="40"
        height="40"
        className={styles.icon}
      />

      <span className={`${styles.text} text-lg font-medium pr-2`}>{name}</span>
    </div>
  );
}
