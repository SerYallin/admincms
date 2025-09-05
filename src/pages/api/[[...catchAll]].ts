'use server';

import { Backend } from '@backend/main';
import { NextApiRequest, NextApiResponse } from 'next';

export const Api = async (req: NextApiRequest, res: NextApiResponse) => {
  const listener = await Backend.getListener();
  listener(req, res);
};

export default Api;
