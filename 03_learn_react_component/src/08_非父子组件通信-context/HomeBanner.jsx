
import ThemeContext from "./context"
function HomeBanner() {
  return (
    // 函数式组件中使用context，通过Consumer
    <div>
      <ThemeContext.Consumer>
        {
          value => {
            return <h5>函数式组件使用context - {value.color} - { value.size } </h5>
          }
        }
      </ThemeContext.Consumer>
    </div>
  )
}
export default HomeBanner