export default class CategoryService {
<<<<<<< HEAD
    constructor() { }
=======
    constructor() {
        this.Data = [];
    }
>>>>>>> 27c4cdaae34d50da2fac47f595a4ec2bef94a35b

    getCategories() {
        return {
            Nodes : [
                        { 
                            Id: 0, Name : "Topping Specialties",
                            Nodes: [ 
                                    { Id: 1, Name : "Cheesy" }, 
                                    { Id: 2, Name : "Vegan"},
                                    { Id: 2, Name : "Meaty"}]
                        },
                        {  
                            Id: 3, Name : "Cuisine",
                            Nodes: [ 
                                { Id: 4, Name : "Italian" }, 
                                { Id: 5, Name : "American" },
                                { Id: 6, Name : "Pinoy"}]
                        }
                    ]
        }
    }
}
