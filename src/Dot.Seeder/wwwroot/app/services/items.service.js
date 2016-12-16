export default class ItemsService {
    constructor($filter) 
    { 
        this.$filter = $filter;
        this.items = [
                { 
                    Id: 0, 
                    Name : "Pizza Marinara",
                    Price: 60.00,
                    Description: "Features tomatoes, garlic, oregano, and extra virgin olive oil.",
                    Image: "/images/california.jpg"
                },
                { 
                    Id: 1, 
                    Name : "Pizza Margherita",
                    Price: 55.00,
                    Description: "Features tomatoes, sliced mozzarella, basil, and extra virgin olive oil.",
                    Image: "/images/california.jpg"
                },
                { 
                    Id: 2, 
                    Name : "Pizza Margherita Extra",
                    Price: 45.00,
                    Description: "Features tomatoes, mozzarella from Campania, basil, and extra virgin olive oil.",
                    Image: "/images/california.jpg"
                },
                { 
                    Id: 3, 
                    Name : "Chicago Pizza",
                    Price: 75.00,
                    Description: "Chicago pizza are ground beef, sausage, pepperoni, onion, mushrooms, and green peppers.",
                    Image: "/images/california.jpg"
                },
                { 
                    Id: 4, 
                    Name : "New York Style Pizza",
                    Price: 78.00,
                    Description: "New York-style pizzas can handle a wide range of toppings, from pepperoni and sausage to mushroom and anchovies.",
                    Image: "/images/california.jpg"
                },
                { 
                    Id: 5, 
                    Name : "Sicilian Pizza",
                    Price: 97.50,
                    Description: "The original Sicilian pizza isn't overloaded with toppings. However, the strength of the thick crust is perfect for adding on your guests' favorite toppings.",
                    Image: "/images/california.jpg"
                },
                { 
                    Id: 6, 
                    Name : "Greek Pizza",
                    Price: 12.00,
                    Description: "Since there are no traditional toppings on Greek pizza, outside of mozzarella and cheddar cheese, you or your guests are free to add what you'd like.",
                    Image: "/images/california.jpg"
                },
                { 
                    Id: 7, 
                    Name : "California Pizza",
                    Price: 2.99,
                    Description: "When it comes to California pizza, there's no such thing as traditional toppings.",
                    Image: "/images/california.jpg"
                },
            ];
    }

    getItemById(id) {
        return this.$filter('filter')(this.items, { Id: id })[0];
    }

    getItems() {
        return this.items;
    }
}
