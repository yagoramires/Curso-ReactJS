import React from 'react'
import { Link } from 'react-router-dom'

import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <h2>Sobre o Mini<span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com React no front-end e Firebase no back-end</p>
      <Link to='posts/create' className='btn btn-dark'>Criar Post</Link>
    </section>
  )
}

export default About