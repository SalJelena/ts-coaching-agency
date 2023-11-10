import { Link } from "react-router-dom";
import { type Session } from "../../../models/session";

type CardProps = {
    el: Session
}

function Card({ el }: CardProps) {
  return (
    <div>
        <Link to={`/sessions/${el.id}`}>
            <h3>{el.title}</h3>
        </Link>
    </div>
  )
}

export default Card