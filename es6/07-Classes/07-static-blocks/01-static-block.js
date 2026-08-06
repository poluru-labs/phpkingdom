class Config {
  static env;
  static {
    this.env = "dev";
  }
}
document.getElementById("out").textContent = Config.env;
