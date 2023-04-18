import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getCurrentBlock(): Promise<number> {
    const response = await axios.get('https://api.etherscan.io/api', {
      params: {
        module: 'proxy',
        action: 'eth_blockNumber',
        apikey: process.env.API_KEY,
      },
    });

    const currentBlock = parseInt(response.data.result, 16);

    return currentBlock;
  }
}
