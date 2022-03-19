import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import styles from "./hero.module.scss"

const Hero: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hero | Doctor Strange</title>
      </Head>

      <Header />

      <main className="main">
        <section className={styles.heroBanner}>
          <figure>
            <Image
              src="/assets/images/drstrangebanner.jpg"
              width="1920"
              height="540"
              alt="Doctor Strange"
            />
          </figure>

          <article className={styles.heroBio}>
            <h3>Stephen Strange</h3>
            <h1 className={styles.heroName}>Doctor Strange</h1>
            <p>Formerly a renowned surgeon, Doctor Stephen Strange now serves as the Sorcerer Supreme—Earth’s foremost protector against magical and mystical threats.</p>
          </article>
        </section>

        <section className="container">
          <article className={`${styles.heroSkills} p1`}>
            <div className={styles.heroSkill}>
              <div className={styles.skillPower}>
                <div className="skillBar"></div>
                <span>3</span>
              </div>

              <div className="skillName">
                <h3>DURABILITY</h3>
              </div>
            </div>

            <div className={styles.heroSkill}>
              <div className={styles.skillPower}>
                <div className="skillBar"></div>
                <span>6</span>
              </div>

              <div className="skillName">
                <h3>ENERGY</h3>
              </div>
            </div>

            <div className={styles.heroSkill}>
              <div className={styles.skillPower}>
                <div className="skillBar"></div>
                <span>3</span>
              </div>

              <div className="skillName">
                <h3>FIGHTING SKILLS</h3>
              </div>
            </div>

            <div className={styles.heroSkill}>
              <div className={styles.skillPower}>
                <div className="skillBar"></div>
                <span>4</span>
              </div>

              <div className="skillName">
                <h3>INTELLIGENCE</h3>
              </div>
            </div>

            <div className={styles.heroSkill}>
              <div className={styles.skillPower}>
                <div className="skillBar"></div>
                <span>7</span>
              </div>

              <div className="skillName">
                <h3>SPEED</h3>
              </div>
            </div>

            <div className={styles.heroSkill}>
              <div className={styles.skillPower}>
                <div className="skillBar"></div>
                <span>2</span>
              </div>

              <div className="skillName">
                <h3>STRENGTH</h3>
              </div>
            </div>
          </article>
        </section>

        <section className="container">
          <article className={styles.heroBiograph}>
            <aside className={styles.left}>
              <h2>Biography</h2>
            </aside>

            <article className={styles.content}>
              <p>As Earth’s Sorcerer Supreme, Doctor Strange wields arcane spells and mystical artifacts to defend the planet against malevolent threats.</p>
              <h3>With These Hands</h3>
              <p>Recognized the world over as one of the most brilliant neurosurgeons, Stephen Strange’s arrogance and self-centered nature grew alongside his skill until his ego far outweighed his career, proceeding to close himself off from only the most wealthy and influential patients. Everything changed for the man one fateful night when a near-fatal car crash left Strange with severely damaged nerves in both hands and a diagnosis of never being able to operate again.</p>
              <p>Knowing his reliance on his medical abilities to support his affluent lifestyle, Strange began to seek a source of healing for his hands until the quest drained him of his resources and he faced a dark and uncertain future. Having crossed off all grounded cures from his list, he followed a path of rumor and legend to Tibet for a more esoteric shelter. There, high in the mountains, he met the Ancient One, a master mystic, and caught his first glimpse of a much larger universe.</p>
              <p>Strange embarked on a journey to learn the art of magic under the Ancient One’s tutelage when he realized that the art of medicine would remain closed off from him forever. The former medico excelled at his lessons and grew to be as adept at spells and sorcery as he once was at surgery. The Ancient One saw in Strange a most gifted pupil and after years of schooling him, presented him with powerful artifacts with which to protect the Earth from many and varied menaces.</p>
              <p>Returning to the West, Strange set up a new practice in New York City, and settled into his destined role as a sage, an occult advisor, and a Master of the Mystic Arts.</p>
            </article>

            <aside className={styles.right}>
              <article className={styles.heroInfos}>
                <div className={styles.heroInfo}>
                  <h4>HEIGHT</h4>
                  <strong>6'2 1/2''</strong>
                </div>

                <div className={styles.heroInfo}>
                  <h4>WEIGHT</h4>
                  <strong>180 lbs.</strong>
                </div>

                <div className={styles.heroInfo}>
                  <h4>GENDER</h4>
                  <strong>Male</strong>
                </div>
              </article>

              <article className={styles.heroInfos}>
                <div className={styles.heroInfo}>
                  <h4>EYES</h4>
                  <strong>Grey</strong>
                </div>

                <div className={styles.heroInfo}>
                  <h4>HAIR</h4>
                  <strong>Black, white at temples</strong>
                </div>
              </article>
            </aside>
          </article>
        </section>

        <section className="container">
          <article className={styles.heroGallery}>
            <h3>Gallery</h3>

            <div className={styles.gallery}>
              <div className={styles.galleryItem}>
                <figure>
                  <Image
                    src="/assets/images/gallery01.jpg"
                    width="540"
                    height="285"
                  />
                </figure>

                <article>
                  infos
                </article>
              </div>

              <div className={styles.galleryItem}>
                <figure>
                  <Image
                    src="/assets/images/gallery02.jpg"
                    width="540"
                    height="285"
                  />
                </figure>

                <article>
                  infos
                </article>
              </div>

              <div className={styles.galleryItem}>
                <figure>
                  <Image
                    src="/assets/images/gallery03.jpg"
                    width="540"
                    height="285"
                  />
                </figure>

                <article>
                  infos
                </article>
              </div>

              <div className={styles.galleryItem}>
                <figure>
                  <Image
                    src="/assets/images/gallery04.jpg"
                    width="540"
                    height="285"
                  />
                </figure>

                <article>
                  infos
                </article>
              </div>

              <div className={styles.galleryItem}>
                <figure>
                  <Image
                    src="/assets/images/gallery05.jpg"
                    width="540"
                    height="285"
                  />
                </figure>

                <article>
                  infos
                </article>
              </div>

              <div className={styles.galleryItem}>
                <figure>
                  <Image
                    src="/assets/images/gallery06.jpg"
                    width="540"
                    height="285"
                  />
                </figure>

                <article>
                  infos
                </article>
              </div>

              <div className={styles.galleryItem}>
                <figure>
                  <Image
                    src="/assets/images/gallery07.jpg"
                    width="540"
                    height="285"
                  />
                </figure>

                <article>
                  infos
                </article>
              </div>

              <div className={styles.galleryItem}>
                <figure>
                  <Image
                    src="/assets/images/gallery08.jpg"
                    width="540"
                    height="285"
                  />
                </figure>

                <article>
                  infos
                </article>
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Hero