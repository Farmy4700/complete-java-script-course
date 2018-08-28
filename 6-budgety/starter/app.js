
//BudgetController
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItemes: {
            exp: [],
            inc: [],    
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type, des, val) {
            var newItem;
            //ID = last ID + 1
            //create new ID
            if (data.allItemes[type].length > 0) {
            ID = data.allItemes[type][data.allItemes[type].length -s].id + 1
            } else {
                ID = 0;
            }

            // create new item based on 'inc' or 'exp'
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            //push it into our data structure
            data.allItemes[type].push(newItem);
            //return element
            return newItem;
                       

        }
    }




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
    
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings;
        
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
        
        document.addEventListener('keypress', function(event) {
        if (event.keycode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    
    
    

    var ctrlAddItem = function() {
        var input, newItem;
        // 1. get the filed input data
        var input = UIController.getInput();
        console.log(input);
        // 2. add item to the budget controller
        newItem = budgetController.addItem(input.type, input.description, input.value);

        // 3. Add new item to UI
        // 4. Calculate teh budget
        // 5. Display the budget
    };

    return {
        init: function() {
            console.log('app started');
            setupEventListeners();
        }
    };
  
})(budgetController, UIController);

controller.init();











