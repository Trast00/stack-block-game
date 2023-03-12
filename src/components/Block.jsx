import PropTypes from 'prop-types';

const Block = (props) => {
  const { id, size } = props;
  return (
    <div
      id={id}
      className={(id === '0') ? 'block-wrapper block-static' : 'block-wrapper'}
      style={{ width: size, zIndex: id }}
    >
      {(id === '0') ? <p>Tape to Play</p> : ''}
    </div>
  );
};

Block.defaultProps = {
  size: -1,
};

Block.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Block;
