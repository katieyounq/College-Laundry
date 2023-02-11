import React from 'react';
import cn from 'classnames';

import styles from './Test.module.scss';

export default function Test(props) {
  return (
    <div className={cn(styles.root, 'test')}>
      <div className={styles.rect} />

      <div className={styles.flexCol}>
        <div className={styles.flexCol1}>
          <div className={styles.flexCol2}>
            <h3 className={styles.subtitle}>Good morning</h3>

            <div className={styles.flexCol3}>
              <div className={styles.flexRow}>
                <div className={styles.rect1} />
                <div className={styles.flexRow__spacer} />
                <div className={styles.rect1} />
              </div>

              <div className={styles.flexRow1}>
                <div className={styles.rect1} />
                <div className={styles.flexRow1__spacer} />
                <div className={styles.rect1} />
              </div>

              <div className={styles.flexRow1}>
                <div className={styles.rect1} />
                <div className={styles.flexRow1__spacer1} />
                <div className={styles.rect1} />
              </div>
            </div>
          </div>

          <div className={styles.flexRow2}>
            <div className={styles.rect2} />
            <div className={styles.flexRow2__spacer} />

            <div className={styles.flexCol4}>
              <div className={styles.info}>#SPOTIFY WRAPPED</div>
              <h3 className={styles.subtitle1}>Your 2022 in review</h3>
            </div>
          </div>

          <div className={styles.flexRow3}>
            <div className={styles.content_box}>
              <div className={styles.flexCol5}>
                <div className={styles.rect7} />

                <div className={styles.flexCol6}>
                  <div className={styles.rect8} />
                  <div className={styles.rect9} />
                </div>
              </div>
            </div>

            <div className={styles.flexRow3__spacer} />

            <div className={styles.flexRow4}>
              <div className={styles.rect3} />
              <div className={styles.flexRow4__spacer} />
              <div className={styles.rect4} />
            </div>

            <div className={styles.flexRow3__spacer} />
            <div className={styles.flexRow3__item}>
              <img
                src={require('assets/d60049c7b93e7d9c0bc7f4c0b49cedc2.png')}
                alt="alt text"
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <div className={styles.flexCol7}>
          <div className={styles.rect6} />

          <div className={styles.flexRow5}>
            <div className={styles.flexRow5__item}>
              <img
                src={require('assets/c0df978d6be5df7efb9d8d9aa0fb8d17.png')}
                alt="alt text"
                className={styles.icon1}
              />
            </div>
            <div className={styles.flexRow5__spacer} />
            <div className={styles.flexRow5__item}>
              <img
                src={require('assets/8d41573dbeb4e06fcbf11ba8347e9c5f.png')}
                alt="alt text"
                className={styles.icon2}
              />
            </div>
            <div className={styles.flexRow5__spacer1} />
            <div className={styles.flexRow5__item1}>
              <img
                src={require('assets/2717bc021098ed2c2a95dacbebc74493.png')}
                alt="alt text"
                className={styles.image6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Test.inStorybook = true;
