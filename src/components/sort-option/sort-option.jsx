import React, {useState} from "react";
import {SortOption} from "../../const";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setActiveSorting} from "../../store/action";

const SortOptions = ({activeSorting, onSortingClick}) => {
  const [isOpened, setOpened] = useState(false);

  const handleSortingClick = (evt) => {
    onSortingClick(evt.target.dataset.id);
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

SortOptions.propTypes = {
  activeSorting: PropTypes.string.isRequired,
  onSortingClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSorting: state.activeSorting,
});

const mapDispatchToProps = (dispatch) => ({
  onSortingClick(newActiveSorting) {
    dispatch(setActiveSorting(newActiveSorting));
  },
});

const ConnectedSortOptions = connect(mapStateToProps, mapDispatchToProps)(SortOptions);

export {ConnectedSortOptions};
