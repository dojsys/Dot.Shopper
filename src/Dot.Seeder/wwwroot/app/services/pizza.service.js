export default class PizzaService 
{
    constructor(ItemsService) 
    {
        this.ItemsService = ItemsService;
        this.pizza = {};
    }

    getPizza(id) 
    {
        return this.ItemsService.getItemById(id);
    }
}
