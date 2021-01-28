import "./pagination.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Pagination({currentPage, totalPages, prevHandle, nextHandle}) {
    return (
        <ul className="pagination">
            <li className={`pagination__item pagination__item--prev ${currentPage > 1 ? 'pagination__item--active': ''}`}>
                <button className="pagination__btn pagination__btn--prev" disabled={currentPage <=1} onClick={prevHandle}>
                    <BsArrowLeft className="pagination__icon"/>   
                    <span>prev</span>
                </button>
            </li>
            <li className="pagination__item pagination__item--info">
                <span>{currentPage} / {totalPages}</span>
            </li>
            <li className={`pagination__item pagination__item--next ${currentPage < totalPages ? 'pagination__item--active': ''}`}>
                <button className="pagination__btn pagination__btn--next" disabled={currentPage >= totalPages} onClick={nextHandle}>
                    <span>next</span>
                    <BsArrowRight className="pagination__icon"/>
                </button>
            </li>
        </ul>
    )
}