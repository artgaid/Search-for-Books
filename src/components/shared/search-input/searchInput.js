import PropTypes from "prop-types";
import "./styles.scss";

SearchInput.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholderText: PropTypes.string,
  maxTextLength: PropTypes.number,
  onKeyDown: PropTypes.func,
};

export default function SearchInput({
  inputValue,
  onChange,
  onSubmit,
  placeholderText,
  maxTextLength,
  onKeyDown,
}) {
  return (
    <div className="search-input">
      <input
        className="search-input__input"
        type="text"
        value={inputValue}
        onKeyDown={onKeyDown}
        onChange={onChange}
        placeholder={placeholderText || ""}
        maxLength={maxTextLength || 200}
      />
      <button className="search-input__button" onClick={onSubmit} />
    </div>
  );
}
