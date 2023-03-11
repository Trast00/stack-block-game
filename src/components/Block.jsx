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

Block.propTypes = {
  id: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default Block;
