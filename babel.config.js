module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
          "import",
          { libraryName: "@digitalgd/gmd-ui", libraryDirectory: "es", style: true }
        ]
    ]
}
