exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'firefox'
  },

  specs: [
    'mouse-events-test.js',
    'drag-and-drop-test.js'
  ],

  params: {
    dndTemplateUrl: 'http://codef0rmer.github.io/angular-dragdrop/#!/',
    clickTemplateUrl: 'https://material.angularjs.org/latest/demo/menu',
    rightClickTemplateUrl: 'https://msarsha.github.io/angular-right-click/'
  }
}
