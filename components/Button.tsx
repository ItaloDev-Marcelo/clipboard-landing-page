import { ButtonTp } from "@/types/ButtonTp"

const Button = ({style,title}:ButtonTp) => {
  return <button className={style}>{title}</button>
}

export default Button