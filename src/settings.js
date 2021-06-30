const settings = {
  getSettings() {
    const storedSettings = JSON.parse(localStorage.getItem("to-do-settings") || "[]");
    // console.log(storedSettings);
    return storedSettings;
  },
  setSettings(settingsObj) {
    localStorage.setItem("to-do-settings", JSON.stringify(settingsObj));
    const storedSettings = this.getSettings();
    return storedSettings;
  }
}

export default settings;