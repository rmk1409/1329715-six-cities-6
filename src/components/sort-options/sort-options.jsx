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
      <li
        className={`places__option ${activeSorting === SortOption.POPULAR ? `places__option--active` : ``}`}
        tabIndex="0" data-id={SortOption.POPULAR}>
        Popular
      </li>
      <li
        className={`places__option ${activeSorting === SortOption.LOW_PRICE_FIRST ? `places__option--active` : ``}`}
        tabIndex="0" data-id={SortOption.LOW_PRICE_FIRST}>
        Price: low to high
      </li>
      <li
        className={`places__option ${activeSorting === SortOption.HIGH_PRICE_FIRST ? `places__option--active` : ``}`}
        tabIndex="0" data-id={SortOption.HIGH_PRICE_FIRST}>
        Price: high to low
      </li>
      <li
        className={`places__option ${activeSorting === SortOption.TOP_RATED_FIRST ? `places__option--active` : ``}`}
        tabIndex="0" data-id={SortOption.TOP_RATED_FIRST}>
        Top rated first
      </li>
    </ul>
  </form>;
};

const MemoSortOptions = memo(SortOptions);

export {MemoSortOptions};
