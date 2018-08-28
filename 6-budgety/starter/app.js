
//BudgetController
var budgetController = (function() {

})();

//UI Controller
var UIController = (function() {
    var DOMstrings = {
        inputType: 'add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }
    return {


        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMstrings;

    var ctrlAddItem = function() {
        // 1. get the filed input data
        var input = UIController.getInput();
        console.log(input);
        // 2. add item to the budget controller
        // 3. Add new item to UI
        // 4. Calculate teh budget
        // 5. Display the budget

    }
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem); {
        

};

    document.addEventListener('keypress', function(event) {
    
        if (event.keycode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    })



})(budgetController, UIController);













