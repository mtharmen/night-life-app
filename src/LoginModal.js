import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

class LoginModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
    this.confirm = this.confirm.bind(this)
    this.unlink = this.unlink.bind(this)
  }

  confirm(e) {
    e.preventDefault()
    this.toggle()
    this.props.confirm()
  }

  unlink(e) {
    e.preventDefault()
    this.props.unlink()
    this.confirm(e)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <button className="nav-link" href="#" onClick={this.toggle}>{this.props.children}</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} contentClassName="bg-dark">
          <ModalBody>
            {this.props.text}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.confirm}>{this.props.confirmText}</Button>
            {this.props.unlink && <Button color="danger" onClick={this.unlink}>Unlink</Button> }
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default LoginModal