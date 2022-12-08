import { useState } from "react"
import styles from "./Animate.module.css"

export const Animate = <P extends object>(BaseComponent: React.ComponentType<P>) => {
  const Animate = (props: P) => {
    const [isHover, setIsHover] = useState(false)
    return (
      <div
        className={isHover ? styles.tadaAnimation : ""}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <BaseComponent {...(props as P)} />
      </div>
    )
  }
  return Animate
}
