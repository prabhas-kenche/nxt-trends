import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeSearchInput,
    onChangeCategory,
    onChangeRating,
    onChangeFilters,
    onKeyPress,
  } = props

  const handleSearchChange = event => {
    onChangeSearchInput(event.target.value) // Pass input value to parent
  }

  const handleCategory = categoryId => {
    onChangeCategory(categoryId) // Call parent method for category change
  }

  const handleRating = ratingId => {
    onChangeRating(ratingId) // Call parent method for rating change
  }

  const handleClearFilters = () => {
    onChangeFilters()
  }

  return (
    <div className="filters-group-container">
      <input
        type="search"
        placeholder="Search..."
        onChange={handleSearchChange} // Attach change handler
        onKeyPress={onKeyPress} // Handle Enter key
      />
      <h1>Category</h1>
      {categoryOptions.map(eachButton => (
        <p
          key={eachButton.categoryId}
          onClick={() => handleCategory(eachButton.categoryId)}
        >
          {eachButton.name}
        </p>
      ))}
      <h1>Rating</h1>
      {ratingsList.map(eachRating => (
        <button
          key={eachRating.ratingId}
          className="rating-button"
          type="button"
          onClick={() => handleRating(eachRating.ratingId)} // Attach rating click handler
        >
          <img
            className="rating-image"
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
          />
        </button>
      ))}

      <button type="button" onClick={handleClearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
