export default class CategoryService {
    constructor() {}

    getCategories() {
        return {
            Nodes: [{
                    Id: 8,
                    Name: "Topping Specialties",
                    Nodes: [
                        { Id: 0, Name: "All" },
                        { Id: 1, Name: "Cheesy" },
                        { Id: 2, Name: "Vegan" },
                        { Id: 3, Name: "Meaty" }
                    ]
                },
                {
                    Id: 7,
                    Name: "Cuisine",
                    Nodes: [
                        { Id: 0, Name: "All" },
                        { Id: 4, Name: "Italian" },
                        { Id: 5, Name: "American" },
                        { Id: 6, Name: "Pinoy" }
                    ]
                }
            ]
        }
    }
}