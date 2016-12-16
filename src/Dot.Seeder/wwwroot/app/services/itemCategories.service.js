export default class ItemCategoriesService {
    constructor($filter) {  
        this.filter = $filter;
        this.categoryToItemMap = [
            { CategoryId : 1, ItemIds:[2] },
            { CategoryId : 2, ItemIds:[1, 3] },
            { CategoryId : 3, ItemIds:[5, 6] },
            { CategoryId : 4, ItemIds:[7] },
            { CategoryId : 5, ItemIds:[4, 6] },
            { CategoryId : 6, ItemIds:[1, 2, 3] }
        ];
    }

    getCategoryToItemMap() {
        return this.categoryToItemMap;
    }

    getItemsOfCategories(categoryIds) {
        
    }
}