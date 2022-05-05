import { GetServerSideProps } from 'next';

import Head from 'next/head';
import { stripe } from '../services/stripe';

import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string,
    amount: number;

  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | gg.news </title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>News about <br /> the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for{product.amount} </span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="coder girl" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1Kw5gvGpJSnYYrEHV7AASILJ',  {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: (price.unit_amount / 100),

  }

  return {
    props: {
      product,
    }
  }
}
