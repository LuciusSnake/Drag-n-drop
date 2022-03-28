class DnD {

  position = {
    top: 'auto',
    left: 'auto'
  }

  shifts = {
    x: 0,
    y: 0
  }

  constructor (element) {
    this.element = element

    this.init()
  }

  init () {
    this.handleMouseMove = this.handleMouseMove.bind(this)

    this.element.addEventListener('mousedown', this.handleMouseDown.bind(this))
    document.addEventListener('mouseup', this.handleMouseUp.bind(this))
  }

  handleMouseDown ({ clientX, clientY }) {
    console.log('mousedown');

    document.addEventListener('mousemove', this.handleMouseMove)
    this.calcShifts(clientX, clientY)
    this.setPosition(clientX, clientY)
  }

  handleMouseMove ({ clientX, clientY }) {
    console.log('mousemove');

    this.setPosition(clientX, clientY)
  }

  handleMouseUp ({ clientX, clientY }) {
    console.log('mouseup');

    document.removeEventListener('mousemove', this.handleMouseMove)
    this.setPosition(clientX, clientY)
  }

  calcShifts(x, y) {
    const rect = this.element.getBoundingClientRect()
    const { top, left } = rect

    this.shifts.x = x - left
    this.shifts.y = y - top
  }

  setPosition(left, top) {
    this.position.left = left - this.shifts.x
    this.position.top = top - this.shifts.y

    this.element.style.top = this.position.top + 'px'
    this.element.style.left = this.position.left + 'px'
  }
}

export { DnD }