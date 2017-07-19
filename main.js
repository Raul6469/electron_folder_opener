const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const dialog = require('electron').dialog

if (process.defaultApp) {
    // If we have the path to our app we set the protocol client to launch electron.exe with the path to our app
    if (process.argv.length >= 2) {
      app.setAsDefaultProtocolClient('folderopener', process.execPath, [path.resolve(process.argv[1])])
    }
    } else {
      app.setAsDefaultProtocolClient('folderopener')
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

/*
function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, show: false})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}
*/

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    //createWindow()
  }
})

app.makeSingleInstance(function (event, url) {
  //console.log(event[2]);
  var monUrl = event[2];
  //console.log(monUrl);
  //console.log(String(monUrl));
  var myPath = monUrl.split('?path=')[1];

  const shell = require('electron').shell

  const os = require('os')

  console.log(myPath);
  console.log(shell.showItemInFolder(myPath));

  app.quit();
})

setTimeout(function() { app.quit(); }, 5000);


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
