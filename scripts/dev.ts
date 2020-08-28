import { utils } from 'umi';
import UmiUI from '../packages/ui/lib/UmiUI';

const { signale } = utils;

(async () => {
  process.env.CURRENT_PROJECT = 'examples/app';
  process.env.LOCAL_DEBUG = 'true';

  const umiui = new UmiUI();
  const { server } = await umiui.start();
    // 监听信号量为SIGINT(所有平台执行ctrl+c时发出的信号量)，可以进行重复监听。
  process.on('SIGINT', () => {
    signale.info('exit build by user');
    server.close();
    process.exit(0);
  });
})();
