(function() {
  'use strict';

  angular
    .module('yoAngularTutorial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
