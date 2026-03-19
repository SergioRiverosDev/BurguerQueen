import { Injectable } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { CategoryDto } from '../categories/dto/category-dto';
import { ProductDto } from '../products/dto/product-dto';
import { ProductsService } from '../products/products.service';
import { UserDto } from '../users/dto/user-dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class PopulateService {

    private categories: CategoryDto[] = [
        {
            name: "label.menu.grill",
            img: "grill.jpg"
        },
        {
            name: "label.salad.more",
            img: "salad.jpg"
        },
        {
            name: "label.desserts",
            img: "postres.png"
        },
        {
            name: "label.complements",
            img: "onion-ring.png"
        },
        {
            name: "label.drink.coffe",
            img: "cafe.png"
        }
    ];

    private products: ProductDto[] = [
        {
            "name": "label.big.menu.bacon",
            "img": "bacon-burger.jpg",
            "price": 8.6,
            "category": {
                name: "label.menu.grill",
            },
            "extras": [
                {
                    "label": "label.big.menu.question",
                    "blocks": [
                        {
                            "name": "label.big.menu",
                            "img": "big-menu.png",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "label.complements",
                    "blocks": [
                        {
                            "name": "label.bacon",
                            "img": "bacon.jpg",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.3,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.cheese",
                            "img": "cheese.png",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.2,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.meat.phopper",
                            "img": "carne_phopher.png",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.extra",
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.lettuce",
                            "img": "lettuce.png",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.2,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.tomato",
                            "img": "tomato.png",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.2,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.crunchy.onion",
                            "img": "onion.png",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.mayonnaise",
                            "img": "mayonnaise.jpg",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.barbecue.sauce",
                            "img": "barbecue-sauce.jpg",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.potato.classic",
                            "img": "potato-classic.png",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.queen.onion.rings",
                            "img": "onion-ring.png",
                            "options": [
                                {
                                    "price": 0.8,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.salad.individual",
                            "img": "salad.jpg",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "label.drinks",
                    "blocks": [
                        {
                            "name": "label.big.coca.cola.drink",
                            "img": "coca-cola.png",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.fanta.drink",
                            "img": "fanta.jpg",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.fanta.limon.drink",
                            "img": "fanta-limon.jpg",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "label.queen.big.egg",
            "img": "hamburguer-egg.png",
            "price": 8.7,
            "category": {
                name: "label.menu.grill"
            },
            "extras": [
                {
                    "label": "label.big.menu.question",
                    "blocks": [
                        {
                            "name": "label.big.menu",
                            "img": "big-menu.png",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "label.complements",
                    "blocks": [
                        {
                            "name": "label.lettuce",
                            "img": "lettuce.png",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.2,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.tomato",
                            "img": "tomato.png",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.2,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.mayonnaise",
                            "img": "mayonnaise.jpg",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.potato.classic",
                            "img": "potato-classic.png",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "label.drinks",
                    "blocks": [
                        {
                            "name": "label.big.coca.cola.drink",
                            "img": "coca-cola.png",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.fanta.drink",
                            "img": "fanta.jpg",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.fanta.limon.drink",
                            "img": "fanta-limon.jpg",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "label.big.phopper",
            "img": "phopper.jpg",
            "price": 6.99,
            "category": {
                name: "label.menu.grill"
            },
            "extras": [
                {
                    "label": "label.big.menu.question",
                    "blocks": [
                        {
                            "name": "label.big.menu",
                            "img": "big-menu.png",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "label.complements",
                    "blocks": [
                        {
                            "name": "label.bacon",
                            "img": "bacon.jpg",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.3,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.cheese",
                            "img": "cheese.png",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.2,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "label.complements",
                    "blocks": [
                        {
                            "name": "label.meat.phopper",
                            "img": "carne_phopher.png",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.extra",
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.lettuce",
                            "img": "lettuce.png",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.2,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.mayonnaise",
                            "img": "mayonnaise.jpg",
                            "options": [
                                {
                                    "name": "label.same",
                                    "price": 0,
                                    "activate": true
                                },
                                {
                                    "name": "label.remove",
                                    "price": 0,
                                    "activate": false
                                },
                                {
                                    "name": "label.extra",
                                    "price": 0.1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.potato.classic",
                            "img": "potato-classic.png",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.queen.onion.rings",
                            "img": "onion-ring.png",
                            "options": [
                                {
                                    "price": 0.8,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.salad.individual",
                            "img": "salad.jpg",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "label.drinks",
                    "blocks": [
                        {
                            "name": "label.big.coca.cola.drink",
                            "img": "coca-cola.png",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.fanta.drink",
                            "img": "fanta.jpg",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.fanta.limon.drink",
                            "img": "fanta-limon.jpg",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "label.doritos.burguer",
            "img": "burguer-steak.jpg",
            "price": 8.2,
            "category": {
                name: "label.menu.grill"
            },
            "extras": [
                {
                    "label": "label.big.menu.question",
                    "blocks": [
                        {
                            "name": "label.big.menu",
                            "img": "big-menu.png",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "label.complements",
                    "blocks": [
                        {
                            "name": "label.big.potato.classic",
                            "img": "potato-classic.png",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.queen.onion.rings",
                            "img": "onion-ring.png",
                            "options": [
                                {
                                    "price": 0.8,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.salad.individual",
                            "img": "salad.jpg",
                            "options": [
                                {
                                    "price": 0.5,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "label.drinks",
                    "blocks": [
                        {
                            "name": "label.big.coca.cola.drink",
                            "img": "coca-cola.png",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.fanta.drink",
                            "img": "fanta.jpg",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        },
                        {
                            "name": "label.big.fanta.limon.drink",
                            "img": "fanta-limon.jpg",
                            "options": [
                                {
                                    "price": 1,
                                    "activate": false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "label.salad.individual",
            "img": "salad.jpg",
            "price": 1.5,
            "category": {
                name: "label.salad.more"
            }
        },
        {
            "name": "label.dessert.kitkat",
            "img": "kitkat.jpg",
            "price": 1.5,
            "category": {
                name: "label.desserts"
            }
        },
        {
            "name": "label.dessert.oreo",
            "img": "oreo.jpg",
            "price": 1.5,
            "category": {
                name: "label.desserts"
            }
        },
        {
            "name": "label.big.potato.classic",
            "img": "potato-classic.png",
            "price": 1.5,
            "category": {
                name: "label.complements"
            }
        },
        {
            "name": "label.queen.onion.rings",
            "img": "onion-ring.png",
            "price": 2,
            "category": {
                name: "label.complements"
            }
        },
        {
            "name": "label.coffe",
            "img": "cafe.png",
            "price": 0.5,
            "category": {
                name: "label.drink.coffe"
            }
        },
        {
            "name": "label.big.coca.cola.drink",
            "img": "coca-cola.png",
            "price": 1.5,
            "category": {
                name: "label.drink.coffe"
            }
        },
        {
            "name": "label.big.fanta.drink",
            "img": "fanta.jpg",
            "price": 1.5,
            "category": {
                name: "label.drink.coffe"
            }
        },
        {
            "name": "label.big.fanta.limon.drink",
            "img": "fanta-limon.jpg",
            "price": 1.5,
            "category": {
                name: "label.drink.coffe"
            }
        }
    ];

    private users: UserDto[] = [
        {
            email: 'test@gmail.com',
            password: '123456',
            address: 'Calle falsa 123'
        }
    ]


    constructor(
        private categoryService: CategoriesService,
        private productService: ProductsService,
        private userService: UsersService,
    ) {
        this.initData();
    }

    async initData() {
        await this.initCategories();
        await this.initProducts();
        await this.initUsers();
    }

    async initCategories() {

        for (const category of this.categories) {
            const categoryFound = await this.categoryService.getCategoryByName(category.name);
            if (!categoryFound) {
                await this.categoryService.createCategory(category);
            }
        }

    }

    async initProducts() {

        for (const product of this.products) {
            const productFound = await this.productService.getProductsByName(product.name);
            if (!productFound) {
                await this.productService.createProduct(product);
            }
        }

    }

    async initUsers() {

        for (const user of this.users) {
            const userFound = await this.userService.findUserbyEmail(user.email);
            if (!userFound) {
                await this.userService.create(user);
            }
        }

    }

}
