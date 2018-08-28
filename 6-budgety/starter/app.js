
//BudgetController
var budgetController = (function() {

})();

//UI Controller
var UIController = (function() {




})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // 1. get the filed input data
        // 2. add item to the budget controller
        // 3. Add new item to UI
        // 4. Calculate teh budget
        // 5. Display the budget
        console.log('it works');
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem); {
        

};

    document.addEventListener('keypress', function(event) {
    
        if (event.keycode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })



})(budgetController, UIController);













