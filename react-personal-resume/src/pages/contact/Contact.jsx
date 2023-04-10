import { Header } from '../../components'
import styles from './Contact.module.css'
export function Contact() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.contact} id="contact">
          <h1 className={styles.heading}>contact me</h1>
          <div className={styles.row}>
            <form action="">
              <input
                type="text"
                className={styles.box}
                placeholder="first name"
              />
              <input
                type="text"
                className={styles.box}
                placeholder="last name"
              />
              <input
                type="email"
                className={styles.box}
                placeholder="your email"
              />
              <input
                type="text"
                className={styles.box}
                placeholder="your project"
              />
              <textarea
                name=""
                id=""
                cols="60"
                rows="10"
                className={[`${styles.box}`,`${styles.message}`].join(' ')}
                placeholder="message"
              ></textarea>
              <input type="submit" value="message" className={styles.btn} />
            </form>
            <div className={styles.content}>
              <div className={styles.icons}>
                <h3>
                  <i className="fas fa-map-marker-alt"></i> address{' '}
                </h3>
                <p>mumbai, india 400104</p>
              </div>
              <div className={styles.icons}>
                <h3>
                  <i className="fas fa-envelope"></i> email{' '}
                </h3>
                <p>shaikh@gmail.com</p>
              </div>
              <div className={styles.icons}>
                <h3>
                  <i className="fas fa-phone"></i> phone{' '}
                </h3>
                <p>+123-456-7890</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
