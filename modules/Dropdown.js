import React from 'react'
import classname from 'classname'
import './dropdownButton.scss'

class DropdownButton extends React.Component {
  static get displayName () {
    return 'Shared/UIComponents/DropdownButton'
  }

  static get defaultProps () {
    return {
      type: 'default',
      hasCaret: false
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }

  show () {
    this.setState({ isVisible: true })
    document.addEventListener('click', this.hide)
  }

  hide () {
    this.setState({ isVisible: false })
    document.removeEventListener('click', this.hide)
  }

  render() {
    const styles = {
      outline: 'none'
    }

    return (
      <div className="dropdown">
        <button style={styles} className={classname('btn', 'btn-' + this.props.type, {'showing': this.state.isVisible})} type="button" onClick={this.show} role="button">
          {this.props.label}
          {this.props.hasCaret && <span className="caret"></span>}
        </button>
        <ul className={classname('dropdown-menu', { 'show': this.state.isVisible })}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default DropdownButton
