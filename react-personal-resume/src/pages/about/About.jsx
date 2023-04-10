import { Header } from '../../components'
import styles from './About.module.css'
export function About() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.about} id="about">
          <h1 className={styles.heading}>about me</h1>

          <div className={styles.content}>
            <h3 className={styles.name}>
              我叫 <span>Li Yuan</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quos ipsam, temporibus veritatis sed dignissimos. Ratione
              consequuntur sapiente reiciendis dolorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              iusto hic neque illo dolorem facere laborum quam inventore
              architecto voluptates totam quo corrupti assumenda nihil
              voluptatum optio ullam cupiditate excepturi?
            </p>
          </div>

          <div className={styles.skills}>
            <div className={styles.progress}>
              <h3>
                html <span>95%</span>
              </h3>
              <div className={styles.bar}>
                <span></span>
              </div>
            </div>
            <div className={styles.progress}>
              <h3>
                css <span>85%</span>
              </h3>
              <div className={styles.bar}>
                <span></span>
              </div>
            </div>
            <div className={styles.progress}>
              <h3>
                javascript <span>65%</span>
              </h3>
              <div className={styles.bar}>
                <span></span>
              </div>
            </div>
            <div className={styles.progress}>
              <h3>
                photoshop <span>70%</span>
              </h3>
              <div className={styles.bar}>
                <span></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
