import PropTypes from "prop-types";

const location = PropTypes.shape({
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
});

const offer = PropTypes.shape({
  bedrooms: PropTypes.number,
  city: PropTypes.shape({
    location,
    name: PropTypes.string,
  }),
  description: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    [`avatar_url`]: PropTypes.string,
    id: PropTypes.number,
    [`is_pro`]: PropTypes.bool,
    name: PropTypes.string,
  }),
  id: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
  [`is_favorite`]: PropTypes.bool,
  [`is_premium`]: PropTypes.bool,
  location,
  [`max_adults`]: PropTypes.number,
  [`preview_image`]: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
});

const review = PropTypes.shape({
  comment: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.shape({
    [`avatar_url`]: PropTypes.string,
    id: PropTypes.number,
    [`is_pro`]: PropTypes.bool,
    name: PropTypes.string,
  }),
});

export {offer, review};
