angular
    .module('app')
    .controller('IDECtrl', function($scope) {

        var file1 = testFile('file1', 'hi nice\n to meet you', false);
        var file2 = testFile('file2', 'this is\n file kkk', false);
        var file3 = testFile('file3', 'my file\n good', false);

        $scope.root = [file1, file2, file3];
        $scope.openedFile = null;
        $scope.tabs = [];

        $scope.clickFile = function(file) {

            if ($scope.tabs.indexOf(file) === -1) {
                $scope.tabs.push(file);
            }

            $scope.openedFile = file;
        };

        $scope.closeFile = function(file) {

            var tabIndex = $scope.tabs.indexOf(file);
            $scope.tabs.splice(tabIndex, 1);

            try {
                $scope.openedFile = $scope.tabs[0];
            } catch (e) {
                $scope.openedFile = null;
            }
        };

        $scope.moveBar = function() {
            console.log(arguments);
        };

        function testFile(name, content, isFolder) {

            function guid() {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }

                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            }

            var fileIndex = guid();

            return {
                fileIndex: fileIndex,
                name: name || 'no name',
                content: content || '',
                lines: [fileIndex, 'text', 'file'],
                isFolder: isFolder || false,
                subdirectory: null
            };
        }
    });
