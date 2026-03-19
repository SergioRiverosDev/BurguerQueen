import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order-dto';
import { Model } from 'mongoose';
import { IOrder } from './interfaces/order.interface';
import { UsersService } from '../users/users.service';
import * as moment from 'moment';

@Injectable()
export class OrdersService {

    constructor(
        @Inject('ORDER_MODEL')
        private orderModel: Model<IOrder>,
        private userService: UsersService) { }

    async createOrder(order: OrderDto) {

        let total = 0;

        for (const quantityProduct of order.products) {
            let priceProduct = quantityProduct.product.price;
            const extras = quantityProduct.product.extras;
            if (quantityProduct.product.extras) {
                for (const products of extras) {
                    for (const product of products.blocks) {
                        if (product.options.length > 1) {
                            const pActivated = product.options.find(op => op.activate);
                            if (pActivated) {
                                priceProduct += pActivated.price;
                            }
                        } else if (product.options[0].activate) {
                            priceProduct += product.options[0].price;
                        }
                    }
                }
            }
            total += quantityProduct.quantity * priceProduct;
        }

        const user = await this.userService.findUserbyEmail(order.user.email);

        const startOfDay = moment(new Date()).startOf('day').toDate();
        const endOfDay = moment(new Date()).endOf('day').toDate();

        const ticket = await this.orderModel.countDocuments({
            date: {
                $gte: startOfDay,
                $lte: endOfDay,    // Fecha menor o igual al fin del día
            },
        });

        const orderModel = new this.orderModel({
            products: order.products,
            user,
            address: order.address,
            date: new Date(),
            total: +total.toFixed(2),
            ticket: ticket + 1
        });
        return orderModel.save()
    }

}
