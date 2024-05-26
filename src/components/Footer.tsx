import styles from "../styles/footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className="justify-center text-center text-base text-gray-300 font-sans font-normal">
        <a href="https://discord.gg/ErFmSgzMkt">Discord</a>
        <a> | </a>
        <a href="https://github.com/genkuqq">@genku</a>
      </p>
    </div>
  );
}
