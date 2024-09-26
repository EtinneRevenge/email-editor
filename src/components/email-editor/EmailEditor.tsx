import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.scss'

export function EmailEditor() {

  return (
    <div>

      <h1>Email editor</h1>
      <div className={styles.card}>

        <div className={styles.editor}>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis potenti tempus taciti urna dolor, elementum aptent cursus. Nostra quam sed consequat maecenas consequat primis. Molestie eros tristique tincidunt purus pharetra erat libero. Eget placerat phasellus convallis fusce congue auctor ligula aliquet. Mi tellus consectetur lacus ante consequat tristique enim nibh. Dolor sem leo sed nam ridiculus porttitor. Posuere id semper enim adipiscing nibh consequat primis rhoncus.
        </div>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button><Eraser /></button>
            <button><Bold /></button>
            <button><Italic /></button>
            <button><Underline /></button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  )
}


