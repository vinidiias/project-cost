import loading from '../../img/loading.svg'

import styles from './Loanding.module.css'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="" />
        </div>
    )
}

export default Loading