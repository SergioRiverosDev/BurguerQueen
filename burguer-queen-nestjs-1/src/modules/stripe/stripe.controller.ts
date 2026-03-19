import { Body, Controller, Post, Query } from '@nestjs/common';
import { Stripe } from 'stripe';
import { CreatePaymentIntentDTO } from './dto/payment-intent.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/api/v1/stripe')
@ApiTags("Stripe")
export class StripeController {

    private stripe: Stripe;
    
    @Post('intent')
    async createPaymentIntent(
        @Body() createPaymentIntentDto: CreatePaymentIntentDTO,
    ): Promise<{
        paymentIntentClientSecret: string;
        ephemeralKey: string;
        customer: string;
    }> {

        this.setStripe(createPaymentIntentDto.secretKey);

        /**
         * https://stripe.com/docs/payments/accept-a-payment?platform=ios
         */
        const customerId = await (async () => {
            if (createPaymentIntentDto.customer_id)
                return createPaymentIntentDto.customer_id;
            const customer = await this.stripe.customers.create();
            return customer.id;
        })();
        const ephemeralKey = await this.stripe.ephemeralKeys.create(
            { customer: customerId },
            { apiVersion: '2020-08-27' },
        );
        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: createPaymentIntentDto.amount || 1099,
            currency: createPaymentIntentDto.currency || 'usd',
            customer: customerId,
        });
        return {
            paymentIntentClientSecret: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customerId,
        };
    }

    // @Post('intent/setup')
    // async createSetupIntent(
    //     @Body() createSetupIntentDto: CreateSetupIntentDTO,
    // ): Promise<{
    //     setupIntent: string;
    //     ephemeralKey: string;
    //     customer: string;
    // }> {
    //     this.setStripe(createSetupIntentDto.secretKey);

    //     const customerId = await (async () => {
    //         if (createSetupIntentDto.customer_id)
    //             return createSetupIntentDto.customer_id;
    //         const customer = await this.stripe.customers.create();
    //         return customer.id;
    //     })();
    //     const ephemeralKey = await this.stripe.ephemeralKeys.create(
    //         { customer: customerId },
    //         { apiVersion: '2020-08-27' },
    //     );
    //     const setupIntent = await this.stripe.setupIntents.create({
    //         customer: customerId,
    //         usage: 'on_session'
    //     });
    //     return {
    //         setupIntent: setupIntent.client_secret,
    //         ephemeralKey: ephemeralKey.secret,
    //         customer: customerId,
    //     };
    // }

    // @Post('intent/without-customer')
    // async createIntentWithoutCustomer(
    //     @Body() createPaymentIntentDto: CreatePaymentIntentDTO,
    // ): Promise<{
    //     paymentIntentClientSecret: string;
    // }> {

    //     this.setStripe(createPaymentIntentDto.secretKey);

    //     /**
    //      * https://stripe.com/docs/payments/accept-a-payment?platform=ios
    //      */
    //     const paymentIntent = await this.stripe.paymentIntents.create({
    //         amount: createPaymentIntentDto.amount || 1099,
    //         currency: createPaymentIntentDto.currency || 'usd',
    //     });
    //     return {
    //         paymentIntentClientSecret: paymentIntent.client_secret,
    //     };
    // }

    // @Post('identify')
    // async createVerificationSessions(): Promise<{
    //     verficationSessionId: string;
    //     ephemeralKeySecret: string;
    // }> {
    //     /**
    //      * https://stripe.com/docs/payments/accept-a-payment?platform=ios
    //      */
    //     const verificationSession = await this.stripe.identity.verificationSessions.create({
    //         type: 'document',
    //         metadata: {
    //             user_id: '1',
    //         },
    //     });
    //     const ephemeralKey = await this.stripe.ephemeralKeys.create(
    //         { verification_session: verificationSession.id },
    //         { apiVersion: '2022-11-15' }
    //     );
    //     return {
    //         verficationSessionId: verificationSession.id,
    //         ephemeralKeySecret: ephemeralKey.secret,
    //     };
    // }

    private setStripe(secretKey: string) {
        this.stripe = require('stripe')(secretKey);
    }

}
