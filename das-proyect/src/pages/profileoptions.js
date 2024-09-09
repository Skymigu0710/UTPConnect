import React from 'react';
import styles from '../styles/profileoptions.module.css';

const profileoptions = ({ }) => (
    <>
        <div className={`${styles.space} ${styles.moreinformation}`}>
            <section className={styles.posts}>
                Posts
            </section>
            < section className={styles.contentinfo} >
                Información
            </section>
        </div>
    </>
);
export default profileoptions;