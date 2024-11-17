import styles from "@/styles/components/Loader.module.css";

export default function Loader() {
  return (
    <div id="loader" className={styles.loader}>
      <h3>Tomorrow's</h3>
      <h3>Brand</h3>
      <h3>Today</h3>
    </div>
  );
}
