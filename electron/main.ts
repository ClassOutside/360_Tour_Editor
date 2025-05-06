import { app, BrowserWindow, ipcMain } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath, format } from "node:url"; // Import format
import path from "node:path";
import fs from "fs";
createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false,
      // Ensures renderer cannot access node features directly
      allowRunningInsecureContent: true,
      // Allows local file access
      webSecurity: false,
      // Disables web security for local files (development only) (without it seems like i cant load images in the 360 viewer)
    },
  });
  win.webContents.on("did-finish-load", () => {
    if (win) {
      win.webContents.send(
        "main-process-message",
        /* @__PURE__ */ new Date().toLocaleString()
      );
    }
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
const loadJSON = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading or parsing JSON:", err);
    return false;
  }
};
const saveJSON = (jsonData, destinationPath) => {
  try {
    fs.writeFileSync(
      destinationPath,
      JSON.stringify(jsonData, null, 2),
      "utf-8"
    );
    console.log("Loading json");
    console.log("JSON saved successfully to:", destinationPath);
  } catch (err) {
    console.error("Error saving the JSON file:", err);
  }
};
const updateImageLocations = (loadedJSON, directoryPath) => {
  if (loadedJSON.type === "tour" && Array.isArray(loadedJSON.destinations)) {
    loadedJSON.destinations.forEach((destination) => {
      if (destination.imageLocation) {
        destination.imageLocation = directoryPath + destination.imageLocation;
      }
    });
  }
};
const updateConfigurationFile = (destinationPath) => {
  console.log("test here");
  const defaultsPath = path.join(__dirname, "..", "defaults.json");
  let fileLocation = destinationPath;
  fileLocation = fileLocation.replace(/\\/g, "/");
  const defaultsJSON = loadJSON(defaultsPath);
  if (defaultsJSON) {
    defaultsJSON.FileLocation = fileLocation;
    saveJSON(defaultsJSON, defaultsPath);
    console.log("FileLocation updated in defaults.json:", fileLocation);
  } else {
    console.error("Failed to load defaults.json");
  }
};
ipcMain.on("loadJSON", (event, filePath, fileName) => {
  const loadedJSON = loadJSON(filePath);
  if (loadedJSON && loadedJSON.editInProgress !== true) {
    const jsonFolderPath = prepareNewDateTimeFolder(filePath);
    const destinationPath = path.join(jsonFolderPath, path.basename(filePath));
    loadedJSON.editInProgress = true;
    let directoryPath = filePath.substring(0, filePath.lastIndexOf(fileName));
    directoryPath = directoryPath.replace(/\\/g, "/");
    loadedJSON.tourLoadedFromPath = directoryPath;
    updateImageLocations(loadedJSON, directoryPath);
    saveJSON(loadedJSON, destinationPath);
    updateConfigurationFile(destinationPath);
    try {
      const fileURL = format({
        pathname: destinationPath,
        protocol: "file:",
        slashes: true,
      });
      event.reply("loadJSONResponse", {
        success: true,
        data: fileURL,
      });
    } catch (error) {
      console.log("Error in loading json: " + error);
      event.reply("loadJSONResponse", {
        success: false,
        error: "Invalid JSON format.",
      });
    }
  } else if (loadedJSON) {
    console.log("editInProgress " + filePath);
    updateConfigurationFile(filePath);
    try {
      event.reply("loadJSONResponse", {
        success: true,
        filePath: filePath,
        tourConfiguration: loadedJSON,
      });
    } catch (error) {
      console.log("Error in loading json: " + error);
      event.reply("loadJSONResponse", {
        success: false,
        error: "Invalid JSON format.",
      });
    }
  } else {
    console.log("Condition not met in the JSON.");
  }
});
app.whenReady().then(createWindow);
function prepareNewDateTimeFolder(filePath) {
  const currentDateTime = /* @__PURE__ */ new Date()
    .toISOString()
    .replace(/[:.-]/g, "_");
  const jsonFolderName =
    path.basename(filePath, path.extname(filePath)) + "-" + currentDateTime;
  const jsonFolderPath = path.join(__dirname, jsonFolderName);
  fs.mkdirSync(jsonFolderPath, { recursive: true });
  fs.mkdirSync(path.join(jsonFolderPath, "360Photos"), { recursive: true });
  fs.mkdirSync(path.join(jsonFolderPath, "360Videos"), { recursive: true });
  return jsonFolderPath;
}
export { MAIN_DIST, RENDERER_DIST, VITE_DEV_SERVER_URL };
