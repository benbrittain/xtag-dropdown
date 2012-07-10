
xtag.register('x-dropdown', {
    onCreate: function(){
            alert("waz up?");
    },
    onInsert: function(){
        // fired each time a component 
        // is inserted into the DOM
    },
    events: {
        'click:delegate(x-toggler)': function(){
            alert("xtog");
            // activate a clicked toggler
        }
    },
    getters: {
        'togglers': function(){
            // return all toggler children
        }
    },
    setters: {
        // Add DOM object setters
    },
    methods: {
        nextToggler: function(){
            // activate next toggler
        },
        previousToggler: function(){
            // activate the previous toggler
        }
    }
});
