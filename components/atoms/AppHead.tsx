import { FC } from 'react';
import Head from 'next/head';

interface IAppHeadProps {
  title?: string;
  description?: string;
}

const defaultProps: IAppHeadProps = {
  title: 'Guest house in cameroon',
  description:
    'Find a guest house around Jardin Logbaba côté de quatorzième entre Termoin de Jehová',
};

const AppHead: FC<IAppHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

AppHead.defaultProps = defaultProps;

export default AppHead;
