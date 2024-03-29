import { categories } from '../utils/constants';

const Categories = ({ selectedCategory, setSelectedCategory }) =>
  categories.map((category) => {
    return (
      <button
        className='category-btn'
        onClick={() => {
          setSelectedCategory(category.name);
        }}
        style={{
          background: category.name === selectedCategory && '#FC1503',
          color: '#fff',
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? '#fff' : 'red',
            marginRight: '15px',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? '1' : '0.8',
          }}
        >
          {category.name}
        </span>
      </button>
    );
  });

export default Categories;
