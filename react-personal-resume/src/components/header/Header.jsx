import { Link } from 'react-router-dom';
import styles from  './Header.module.css';
export  function Header() {
  return (
    <header>
      <div className={styles.user}>
        <img src={process.env.PUBLIC_URL+'/assets/images/pic.jpg'}  alt="" />
        <h3 className={styles.name}>Li Yuan</h3>
        <p className={styles.post}>front end developer</p>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="home">首页</Link>
          </li>
          <li>
            <Link to="about">个人信息</Link>
          </li>
          <li>
            <Link to="service">个人作品集</Link>
          </li>
          <li>
            <Link to="education">教育经历</Link>
          </li>
          <li>
            <Link to="contact">联系方式</Link>
          </li>      
        </ul>
      </nav>
    </header>
  )
}
