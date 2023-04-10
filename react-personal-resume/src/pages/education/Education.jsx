import { Header } from '../../components'
import styles from './Education.module.css'
export function Education() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.education} id="education">
          <h1 className={styles.heading}>my education</h1>

          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <div className={styles.year}>2017 - 2018</div>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore ut quis nam eos deserunt veritatis adipisci, beatae odio
                rerum doloribus?
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.year}>2018 - 2019</div>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore ut quis nam eos deserunt veritatis adipisci, beatae odio
                rerum doloribus?
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.year}>2019 - 2020</div>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore ut quis nam eos deserunt veritatis adipisci, beatae odio
                rerum doloribus?
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.year}>2020 - 2021</div>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore ut quis nam eos deserunt veritatis adipisci, beatae odio
                rerum doloribus?
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
