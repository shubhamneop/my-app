import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import withLayout from '../components/Layout';


const Index = () => (
  <div>
    <Head><title>Home Page</title></Head>
    <style jsx>
      {`
       h1 {
         font-size:3rem;
         font-family: initial;
       }
      `}
    </style>
    <h1>Home Page</h1>
  </div>
);

export default withLayout(Index);