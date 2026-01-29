const { app, BrowserWindow } = require ( "electron" )

function createWindow ( )
{
    const win = new BrowserWindow ( { 
        width: 1200,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    } )
}

app.whenReady ( ).then ( ( ) => {
    createWindow ( )
} )