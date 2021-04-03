import React, {useState, memo} from "react";
import {SortOption} from "../../const";
import {useDispatch, useSelector} from "react-redux";
import {setActiveSorting} from "../../store/action";
import {NameSpace} from "../../store/reducers/reducer";

const SortOptions = () => {
  const activeSorting = useSelector((state) => state[NameSpace.CLIENT].activeSorting);
  const dispatch = useDispatch();
  const [isOpened, setOpened] = useState(false);

  const handleSortingClick = (evt) => {
    dispatch(setActiveSorting(evt.target.dataset.id));
    setOpened(false);
  };

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex="0" onClick={() => setOpened(!isOpened)}>&nbsp;{activeSorting}
      <svg className="places__sorting-arrow" width="7" height="4"><use xlinkHref="#icon-arrow-select"/></svg>
    </span>
    <ul
      className={`places__options places__options--custom ${isOpened ? `places__options--opened` : ``}`}
      onClick={handleSortingClick}>
      {Object.values(SortOption).map((option) => (
        <li
          className={`places__option ${activeSorting === {option} ? `places__option--active` : ``}`}
          tabIndex="0" data-id={option} key={option}>
          {option}
        </li>
      ))}
    </ul>
  </form>;
};

const MemoSortOptions = memo(SortOptions);

export {MemoSortOptions, SortOptions};
