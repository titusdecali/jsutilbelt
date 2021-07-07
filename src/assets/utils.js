class Utils {
  // Global Utilities
  // How to use global utility functions: TODO: Add link here

  // Deep clone Object
  // *************************************************************
  deepClone(obj) {
    const deepClone = JSON.parse(JSON.stringify(obj))
    return deepClone
  } // Copy text to clipboard
  // *************************************************************
  copyToClipboard(text) {
    let copyText = document.createElement('input')
    document.body.appendChild(copyText)
    copyText.value = text
    copyText.select()
    document.execCommand('copy')
    document.body.removeChild(copyText)
    alert('Copied to clipboard')
  }
}
export default new Utils()
