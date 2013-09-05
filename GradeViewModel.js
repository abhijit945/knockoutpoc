// Data model
require(['node_modules/knockout/build/output/knockout-latest.debug.js'], function(ko){
    var GradeViewModel = function() {
            this.gradeList = [
                {subjectAlias: "Algos", subject: "Analysis and Design of Algorithms", grade: "A"},
                {subjectAlias: "IR", subject: "Information Retrieval", grade: "A-"},
                {subjectAlias: "ACN", subject: "Advanced Computer Networks", grade: "B+"}
            ];
            this.chosenGrade = ko.observable();
            this.resetGrade = function () {
                this.chosenGrade(null)
            }
        }
    ko.applyBindings(new GradeViewModel());
});


