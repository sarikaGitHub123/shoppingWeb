import CategoryItem from "../category-item/category-item.componemt"
import '../directory/directory.styles.scss'

const Directory = ({categories}) =>{
    return (
        <div className="directory-container">
        {categories.map((category,index) => {
          return(
            <CategoryItem key={category.id} category={category}/>
          )
        })}
      </div>
    )
}

export default Directory