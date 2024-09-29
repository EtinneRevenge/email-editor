import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.scss'

export function EmailEditor() {

  return (
    <div>

      <h1>Email editor</h1>
      <div className={styles.card}>

        <div className={styles.editor}>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis potenti tempus taciti urna dolor, elementum aptent cursus. Nostra quam sed consequat maecenas consequat primis. Molestie eros tristique tincidunt purus pharetra erat libero.
        </div>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button><Eraser size={18} /></button>
            <button><Bold size={18} /></button>
            <button><Italic size={18} /></button>
            <button><Underline size={18} /></button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  )
}


