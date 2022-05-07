import Stripe from 'stripe';
import * as packageInfo from '../../package.json';

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY,
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'ggnews',
            version: '0.1.0',
        },       
    }
)