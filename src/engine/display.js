class Display {
  constructor (canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.ctx.imageSmoothingEnabled = true

    // bind events
    this._onResize = this._onResize.bind(this)
  }

  registerEvents () {
    this._onResize()
    window.addEventListener('resize', this._onResize)
  }

  _onResize () {
    this.canvas.style.width = `${this.getDeviceWidth()}px`
    this.canvas.style.height = `${this.getDeviceHeight()}px`
    this.canvas.width = this.getDeviceWidth()
    this.canvas.height = this.getDeviceHeight()
    this.setTransformationMatrix()
  }

  setTransformationMatrix () {
    const scale = this.getScale()
    const offSetToNativeTop = (-NATIVE_HEIGHT / 2) * scale
    const offSetToNativeLeft = (-NATIVE_WIDTH / 2) * scale
    const matrix = [scale, 0, 0, scale]

    this.ctx.setTransform(
      ...matrix,
      Math.floor(this.getDeviceHeight() / 2 + offSetToNativeTop),
      Math.floor(this.getDeviceWidth() / 2 + offSetToNativeLeft)
    )
  }

  get width () {
    return this.canvas.width
  }

  get height () {
    return this.canvas.height
  }

  getDeviceWidth () {
    return window.innerWidth
  }

  getDeviceHeight () {
    return window.innerHeight
  }

  calcScaleFitNative () {
    const spw = this.getDeviceWidth() / NATIVE_WIDTH
    const sph = this.getDeviceHeight() / NATIVE_HEIGHT
    return Math.min(spw, sph)
  }

  calcScaleFillNative () {
    const spw = this.getDeviceWidth() / NATIVE_WIDTH
    const sph = this.getDeviceHeight() / NATIVE_HEIGHT
    return Math.max(spw, sph)
  }

  getScale () {
    return this.calcScaleFillNative()
  }
}

export const NATIVE_WIDTH = 1024
export const NATIVE_HEIGHT = 728

export default Display
