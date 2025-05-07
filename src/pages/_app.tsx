import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GameStateProvider } from '../utils/gameState';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chronoscape Lite</title>
        <meta name="description" content="A space-time exploration puzzle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GameStateProvider>
        <Component {...pageProps} />
      </GameStateProvider>
    </>
  );
}