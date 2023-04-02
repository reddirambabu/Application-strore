// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeClassName = isActive ? 'active-button' : ''

  const changeItem = () => {
    onChangeTabId(tabId)
  }

  return (
    <li onClick={changeItem} className={activeClassName}>
      <button type="button" className="button-item">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
