const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({frame: true, titleBarStyle:'hidden', width: 600, height: 600, minWidth: 400, minHeight: 400})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

//darwin is the name of the macOS kernal.
//The default behavior for a mac app is that the app is not 
//shutdown completely when we close it.

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//If the app becomes active, but the win variable is empty 
//then the instruction is set to create a new window.

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

//function ShowMe() {
//    alert("I want to see a box :-)");
//}

function calculateTotal() {

    var original_amount = document.getElementById('original_amount').value;
    var tax_percentage = document.getElementById('tax_percentage').value;
    var total_amount = document.getElementById('total_amount').value = (original_amount * tax_percentage) + original_amount;

    alert(a.value);
}